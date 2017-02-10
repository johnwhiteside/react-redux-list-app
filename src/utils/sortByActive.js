const orderByActive = (items) => {
  return [...items].sort((a, b) => compareValues(a, b));
};

const compareValues = (a, b) => {
  if (a.isCompleted === b.isCompleted){
    return 0;
  } else if (a.isCompleted) {
    return 1;
  }
  return -1;
}

export default orderByActive;
