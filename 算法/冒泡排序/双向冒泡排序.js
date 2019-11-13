// 普通的冒泡排序在一趟循环中只能找出一个最大值或最小值，双向冒泡则是多一轮循环既找出最大值也找出最小值。

function bubbleSort(arr) {
  [low, high] = [0, arr.length - 1];

  while (low < high) {
    let flag = true;
    for (let i = low; i < high; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        flag = false;
      }
    }
    high--;
    for (let j = high; j > low; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        flag = false;
      }
    }
    low++;
    if (flag) return arr;
  }
  return arr;
}


const tag = 'test';
console.time(tag)
const res = bubbleSort([2, 4, 6, 2, 6, 8, 3, 6]);
console.log(res);
console.timeEnd(tag);