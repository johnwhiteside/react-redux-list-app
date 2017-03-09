export default function compareValues(a, b) {
  if (a.isCompleted === b.isCompleted){
    return 0;
  } else if (a.isCompleted) {
    return 1;
  }
  return -1;
}
