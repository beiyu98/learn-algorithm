const array = [0, 3, 6, 17, 35, 100, 98, 66, 88, 58, 23, 45, 45, 34, 11];

function mergeSort(array) {
  if (array.length < 2) return array;

  const midIndex = Math.floor(array.length / 2);
  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex);
  //先全部执行完mergeSort
  //变成merge(merge(merge(...), merge(...)), merge(merge(...), merge(mere(...), merge(...))))
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    //注重理解leftIndex++ rightIndex++
    //当一边较小时，将较小的一边先存入result中，并将这一边的游标向前移动一位
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  //当循环结束时，必定有一边还有剩余元素，且是比较大的元素，按照result+left+right拼接就好
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort(array));
