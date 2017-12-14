import * as actions from 'module/actions';
import { Map, Record } from 'immutable';

import reducer, {
  initialState,
  ToDo,
} from 'module/reducer';

import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_TODO_TO_ACTIVE,
} from 'module/constants';

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should return state with todo added', () => {
    const title = 'Test Todo';
    const todo = new ToDo({ id: 0, title });
    const expectedState = Map([]).set(todo.id, todo);
    expect(reducer(undefined, actions.addToDo(title))).toEqual(expectedState);
  });

  it('should return state with todo removed', () => {
    const title = 'Test Todo';
    const todo = new ToDo({ id: 0, title });
    const testState = Map([]).set(todo.id, todo);
    const expectedState = Map([]);
    expect(reducer(testState, actions.deleteToDo(todo.id))).toEqual(expectedState);
  });

  it('should return state with todo set to incomplete', () => {
    const title = 'Test Todo';
    const todo = new ToDo({ id: 0, title, isCompleted: true });
    const testState = Map([]).set(todo.id, todo);
    const expectedState = testState.update(todo.id, todo => todo.set('isCompleted', false));
    expect(reducer(testState, actions.setToDoToActive(todo.id))).toEqual(expectedState);
  });

  it('should return state with todo set to complete', () => {
    const title = 'Test Todo';
    const todo = new ToDo({ id: 0, title, isCompleted: false });
    const testState = Map([]).set(todo.id, todo);
    const expectedState = testState.update(todo.id, todo => todo.set('isCompleted', true));
    expect(reducer(testState, actions.completeToDo(todo.id))).toEqual(expectedState);
  });

});
