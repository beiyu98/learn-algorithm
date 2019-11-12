const array = [0, 3, 6, 17, 35, 100, 98, 66, 88, 58, 23, 45, 45, 34, 11];

function bubbleSort(array) {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
}

console.log(bubbleSort(array));
