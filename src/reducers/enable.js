const enable = (state = true, action) => {
  switch (action.type) {
    case 'SWITCH_STATUS':
      return !state;
    default:
      return state;
  }
};

export default enable;
