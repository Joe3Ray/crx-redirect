const lists = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_LIST': {
      const { keyword } = action;
      return state.map(item => (
        (item.before.indexOf(keyword) > -1 || item.after.indexOf(keyword) > -1)
          ? { ...item, visible: true }
          : { ...item, visible: false }));
    }
    case 'SWITCH_ITEM': {
      const { id } = action;
      return state.map(item => ((item.id === id) ? { ...item, enable: !item.enable } : item));
    }
    case 'DELETE_ITEM': {
      const arr = [];
      const { id } = action;
      state.forEach((item) => {
        if (item.id !== id) {
          arr.push(item);
        }
      });
      return arr;
    }
    case 'ADD_ITEM': {
      const { data } = action;
      return state.concat(data);
    }
    case 'MODIFY_ITEM': {
      const { id } = action.data;
      return state.map((item) => {
        if (item.id === id) {
          return action.data;
        }
        return item;
      });
    }
    default:
      return state;
  }
};

export default lists;
