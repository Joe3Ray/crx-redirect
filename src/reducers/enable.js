const enable = (state = true, action) => {
  switch (action.type) {
    case 'SWITCH_STATUS':
      return action.status;
    case 'GET_INFO':
      return action.info.enable;
    default:
      return state;
  }
};

export default enable;
