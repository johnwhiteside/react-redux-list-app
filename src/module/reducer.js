import { Map, Record } from 'immutable';

import {
  ADD_TO_LIST,
  COMPLETE_ITEM,
  REMOVE_FROM_LIST,
  SET_ITEM_ACTIVE,
} from './constants';

let lastId = 0;

const ToDo = Record({
  id: null,
  title: '',
  isCompleted: false,
});

const list = (state = Map([]), action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      const todo = new ToDo({ id: lastId++, title: action.title });
      return state.set(todo.id, todo);

    case REMOVE_FROM_LIST:
      return state.delete(action.itemId);

    case SET_ITEM_ACTIVE:
      return state.update(action.itemId, todo => todo.set('isCompleted', false));

    case COMPLETE_ITEM:
      return state.update(action.itemId, todo => todo.set('isCompleted', true));

    default: return state;
  }
}

export default list;
