import {
  ADD_TO_LIST,
  COMPLETE_ITEM,
  REMOVE_FROM_LIST,
  SET_ITEM_ACTIVE,
} from './constants';

const addToList = title => ({
  type: ADD_TO_LIST,
  title
});

const completeItem = itemId => ({
  type: COMPLETE_ITEM,
  itemId
});

const removeFromList = itemId => ({
  type: REMOVE_FROM_LIST,
  itemId
});

const setItemActive = itemId => ({
  type: SET_ITEM_ACTIVE,
  itemId
});

export {
  addToList,
  completeItem,
  removeFromList,
  setItemActive,
};
