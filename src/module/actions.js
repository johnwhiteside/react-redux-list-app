import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_TODO_TO_ACTIVE,
} from 'module/constants';

const addToDo = title => ({
  type: ADD_TODO,
  payload: {
    title,
  }
});

const completeToDo = itemId => ({
  type: COMPLETE_TODO,
  payload: {
    itemId,
  }
});

const deleteToDo = itemId => ({
  type: DELETE_TODO,
  payload: {
    itemId,
  }
});

const setToDoToActive = itemId => ({
  type: SET_TODO_TO_ACTIVE,
  payload: {
    itemId,
  }
});

export {
  addToDo,
  completeToDo,
  deleteToDo,
  setToDoToActive,
};
