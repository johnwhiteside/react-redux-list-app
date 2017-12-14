import * as actions from 'module/actions';
import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_TODO_TO_ACTIVE,
} from 'module/constants';

describe('actions', () => {
  it('should return action to create todo', () => {
    const title = 'Test Todo';
    const expectedAction = {
      type: ADD_TODO,
      payload: {
        title,
      }
    };
    expect(actions.addToDo(title)).toEqual(expectedAction);
  });

  it('should return action to complete todo', () => {
    const itemId = 123;
    const expectedAction = {
      type: COMPLETE_TODO,
      payload: {
        itemId,
      }
    };
    expect(actions.completeToDo(itemId)).toEqual(expectedAction);
  });

  it('should return action to delete todo', () => {
    const itemId = 123;
    const expectedAction = {
      type: DELETE_TODO,
      payload: {
        itemId,
      }
    };
    expect(actions.deleteToDo(itemId)).toEqual(expectedAction);
  });

  it('should return action to set todo to active', () => {
    const itemId = 123;
    const expectedAction = {
      type: SET_TODO_TO_ACTIVE,
      payload: {
        itemId,
      }
    };
    expect(actions.setToDoToActive(itemId)).toEqual(expectedAction);
  });
});
