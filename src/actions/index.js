export const togglePanel = id => ({ type: 'TOGGLE_PANEL', id });

export const switchStatus = status => ({ type: 'SWITCH_STATUS', status });

export const filterList = keyword => ({ type: 'FILTER_LIST', keyword });

export const switchItem = id => ({ type: 'SWITCH_ITEM', id });

export const deleteItem = id => ({ type: 'DELETE_ITEM', id });

export const addItem = data => ({ type: 'ADD_ITEM', data });

export const modifyItem = data => ({ type: 'MODIFY_ITEM', data });
