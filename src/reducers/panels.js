const panels = (state = { isList: true }, action) => {
  switch (action.type) {
    case 'TOGGLE_PANEL':
      return {
        isList: !state.isList,
        id: action.id,
      };
    default:
      return state;
  }
};

export default panels;
