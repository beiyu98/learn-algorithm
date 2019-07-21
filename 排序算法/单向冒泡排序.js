// 通过相邻元素的比较和交换，使得每一趟循环都能找到未有序数组的最大值或最小值。

// 最好： O(n) ，只需要冒泡一次数组就有序了。
// 最坏： O(n²)
// 平均： O(n²)

function bubbleSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let flag = true;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
      }
    }
    if (flag) return arr;
  }
  return arr;
}
const tag = 'test';
console.time(tag)
const res = bubbleSort([2, 4, 6, 2, 6, 8, 3, 6]);
console.log(...res);
console.timeEnd(tag);