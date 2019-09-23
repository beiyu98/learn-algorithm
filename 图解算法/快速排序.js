/**
 * 快速排序
 * 思想：
 * 1.分而治之
 * 2.递归
 * 
 * 复杂度 :
 * 平均情况： n * log n
 * 最遭情况： n^2
 * @param {array} arr 数组
 */
const quickSort = arr => {
  if (!Array.isArray(arr)) return arr;
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  let left = [],
    right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

module.exports = { quickSort };
