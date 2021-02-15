export const addItem = payload => ({
  type: 'ADD_ITEM',
  payload,
});

export const checkItem = payload => ({
  type: 'CHECK_ITEM',
  payload,
});

export const uncheckItem = payload => ({
  type: 'UNCHECK_ITEM',
  payload,
});

export const filterItems = (payload) => ({
  type: 'FILTER_ITEMS',
  payload,
});

export const setText = (payload) => ({
  type: 'SET_TEXT',
  payload,
});

export const setDate = (payload) => ({
  type: 'SET_DATE',
  payload,
});