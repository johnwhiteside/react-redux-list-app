import { Map, Record } from 'immutable';

import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_TODO_TO_ACTIVE,
} from 'module/constants';

let lastId = 0;

const ToDo = Record({
  id: null,
  title: '',
  isCompleted: false,
});

const initialState = Map([]);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = new ToDo({ id: lastId++, title: action.payload.title });
      return state.set(todo.id, todo);

    case DELETE_TODO:
      return state.delete(action.payload.itemId);

    case SET_TODO_TO_ACTIVE:
      return state.update(action.payload.itemId, todo => todo.set('isCompleted', false));

    case COMPLETE_TODO:
      return state.update(action.payload.itemId, todo => todo.set('isCompleted', true));

    default: return state;
  }
}

export default reducer;
export {
  initialState,
  ToDo,
}
