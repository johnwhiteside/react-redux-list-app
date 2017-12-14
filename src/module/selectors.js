import { createSelector } from 'reselect';

const getActiveItems = createSelector(
  state => state,
  items => {
    return items.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) { return 1 }
      if (!a.isCompleted && b.isCompleted) { return -1 }
      if (a.isCompleted && b.isCompleted) { return 0 }
    });
  },
);

export {
  getActiveItems,
};
