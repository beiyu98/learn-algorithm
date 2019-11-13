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

function binarySearch(array, search, pos = 0) {
  if (!Array.isArray(array)) throw new Error(`params type error`);
  const len = array.length;
  const midIndex = Math.floor((len - 1) / 2);
  if (array[midIndex] === search) {
    console.log(`${search} is at ${pos + midIndex}`);
  } else if (array[midIndex] < search) {
    return binarySearch(array.slice(midIndex + 1), search, pos + midIndex + 1);
  } else if (array[midIndex] > search) {
    return binarySearch(array.slice(0, midIndex), search, pos);
  } else {
    console.log(`no found ${search}`);
  }
}

const sortArray = quickSort(array);
binarySearch(sortArray, 51);
binarySearch(sortArray, 66);
