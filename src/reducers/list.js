let lastId = 0;

const list = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return [
        ...state,
        {
          id: lastId++,
          title: action.title,
          isCompleted: false
        }
      ];

    case 'REMOVE_FROM_LIST':
      return [...state].filter(item => item.id !== action.itemId);

    case 'SET_ITEM_ACTIVE':
      return [...state].map(item => {
        if (item.id === action.itemId) {
          return setActive(item);
        }
        return { ...item };
      });

    case 'COMPLETE_ITEM':
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
