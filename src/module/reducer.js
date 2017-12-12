import {
  ADD_TO_LIST,
  COMPLETE_ITEM,
  REMOVE_FROM_LIST,
  SET_ITEM_ACTIVE,
} from './constants';
//import Immutable from 'immutable';
let lastId = 0;

const initialState = {
  items: []
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: lastId++,
            title: action.title,
            isCompleted: false
          }
        ]
      }

    case REMOVE_FROM_LIST:
      return [...state].filter(item => item.id !== action.itemId);

    case SET_ITEM_ACTIVE:
      return [...state].map(item => {
        if (item.id === action.itemId) {
          return setActive(item);
        }
        return { ...item };
      });

    case COMPLETE_ITEM:
      return [...state].map(item => {
        if (item.id === action.itemId) {
          return completeItem(item);
        }
        return {...item};
      });
    default:
      return state;
  }
}

//helpers
const completeItem = (item) => {
  return {
    ...item,
    isCompleted: true
  }
};

const setActive = (item) => {
  return {
    ...item,
    isCompleted: false
  }
};

export default list;
