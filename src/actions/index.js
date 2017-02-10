export const addToList = (title) => ({
  type: 'ADD_TO_LIST',
  title
});

export const removeFromList = (itemId) => ({
  type: 'REMOVE_FROM_LIST',
  itemId
});

export const completeItem = (itemId) => ({
  type: 'COMPLETE_ITEM',
  itemId
});

export const setItemActive = (itemId) => ({
  type: 'SET_ITEM_ACTIVE',
  itemId
});
