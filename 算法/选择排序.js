const array = [0, 3, 6, 17, 35, 100, 98, 66, 88, 58, 23, 45, 45, 34, 11];

//1.找出最小的数，和第一个交换位置
//2.在剩下的数中，找出最二小的数，放在第二个
//3.依次类推，排出顺序
function selectSort(array) {
  const len = array.length;
  let min;

  for (let i = 0; i < len; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  return array;
}

console.log(selectSort(array));
