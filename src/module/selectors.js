import { createSelector } from 'reselect';
import { sortBy } from 'lodash';

const getListItems = (state) => state.items;

const getActiveItems = createSelector(
  [ getListItems ],
  items => sortBy(items, 'active'),
);

export {
  getActiveItems,
}