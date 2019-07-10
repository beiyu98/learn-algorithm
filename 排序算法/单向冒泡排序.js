function bubbleSort(nums) {
  for (let i = 0, len = nums.length; i < nums.length; i++) {
    let mark = true;
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        mark = false;
      }
    }
    if (mark) return nums;
  }
  return nums;
}
const tag = 'test';
console.time(tag)
const res = bubbleSort([2, 4, 6, 2, 6, 8, 3, 6]);
console.log(res);
console.timeEnd(tag);