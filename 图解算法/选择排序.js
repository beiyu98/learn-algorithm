/**
 * 选择排序
 *
 * 算法复杂度：n^2
 * @param arr 待排序数组
 * @returns {*} 排序后的数组
 */
const selectSort = arr => {
  if (!Array.isArray(arr)) throw new Error("params:arr must be array");
  if (arr.length < 2) return arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};
module.exports = {selectSort};
