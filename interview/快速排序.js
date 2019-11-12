const array = [0, 3, 6, 17, 35, 100, 98, 66, 88, 58, 23, 45, 45, 34, 11];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const midIndex = Math.floor(array.length / 2);
  const mid = array.splice(midIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < mid) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat([mid], quickSort(right));
}
