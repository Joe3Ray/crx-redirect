const background = chrome && chrome.extension.getBackgroundPage();
const { command, getInitialState } = background;

export const togglePanel = id => ({ type: 'TOGGLE_PANEL', id });

export const switchStatus = (status) => {
  const type = 'SWITCH_STATUS';
  command[type](status);
  return { type, status };
};

export const filterList = keyword => ({ type: 'FILTER_LIST', keyword });

export const switchItem = (id) => {
  const type = 'SWITCH_ITEM';
  command[type](id);
  return { type, id };
};

export const deleteItem = (id) => {
  const type = 'DELETE_ITEM';
  command[type](id);
  return { type, id };
};

export const addItem = (data) => {
  const type = 'ADD_ITEM';
  command[type](data);
  return { type, data };
};

export const modifyItem = (data) => {
  const type = 'MODIFY_ITEM';
  command[type](data);
  return { type, data };
};

export const getInfo = () => (
  dispatch => (
    getInitialState().then((info) => {
      console.log(info);
      dispatch({
        type: 'GET_INFO',
        info,
      });
    })
  )
);
