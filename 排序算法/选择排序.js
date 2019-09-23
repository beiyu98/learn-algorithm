// 和冒泡排序相似，区别在于选择排序是将每一个元素和它后面的元素进行比较和交换。

// 最好： O(n²)
// 最坏： O(n²)
// 平均： O(n²)


function selectSort(nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

const tag = 'test';
console.time(tag);
const res = selectSort([2, 4, 6, 2, 6, 8, 3, 6]);
console.log(res);
console.timeEnd(tag);