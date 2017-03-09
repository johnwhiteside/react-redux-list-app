import { createSelector } from 'reselect';
import compareValues from 'utils/compareValues';

const getListItems = (state) => state.list;

export const getActiveItems = createSelector(
  [ getListItems ],
  (listItems) => {
    return [...listItems].sort((a, b) => compareValues(a, b));
  }
)
