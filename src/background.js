import { get, set } from './storage';

const state = {
  enable: true,
  lists: [],
};

const getInitialState = () => (
  get('redirect').then(info => (
    Object.assign(state, info.redirect)
  ))
);

const command = {
  SWITCH_STATUS(status) {
    state.enable = status;
    set('redirect', state);
  },
  SWITCH_ITEM(id) {
    state.lists.forEach((item, idx) => {
      if (item.id === id) {
        state.lists[idx].enable = !item.enable;
      }
    });
    set('redirect', state);
  },
  DELETE_ITEM(id) {
    let idx;
    for (let i = 0, len = state.lists.length; i < len; i += 1) {
      if (state.lists[i].id === id) {
        idx = i;
        break;
      }
    }
    state.lists.splice(idx, 1);
    set('redirect', state);
  },
  ADD_ITEM(data) {
    state.lists.push(data);
    set('redirect', state);
  },
  MODIFY_ITEM(data) {
    let idx;
    for (let i = 0, len = state.lists.length; i < len; i += 1) {
      if (state.lists[i].id === data.id) {
        idx = i;
        break;
      }
    }
    state.lists[idx] = data;
    set('redirect', state);
  },
};

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (state.enable) {
      const currentUrl = details.url;
      const rules = state.lists.filter((item) => {
        if (
          item.enable
          && (
            currentUrl.indexOf(item.before) > -1
            || currentUrl.indexOf(item.after) > -1
          )
        ) {
          return true;
        }
        return false;
      }).sort((a, b) => (a.order < b.order));

      const rule = rules[0];
      const redirectUrl = currentUrl.replace(rule.before, rule.after);
      return { redirectUrl };
    }
    return {};
  },
  {
    urls: ['<all_urls>'],
  },
  ['blocking'],
);

window.state = state;
window.getInitialState = getInitialState;
window.command = command;
