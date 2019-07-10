function bubbleSortDoubbleWays(nums) {
  let low = nums;
  let high = nums.length - 1;
  while (low < high) {
    let mark = true;
    for (let i = low; i < high; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        mark = false;
      }
    }
    high--;

    for (let j = high; j > low; j--) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
        mark = false;
      }
    }
    low++;
    if (mark) return nums;
  }
  return nums;
}
const tag = 'test';
console.time(tag)
const res = bubbleSortDoubbleWays([2, 4, 6, 2, 6, 8, 3, 6]);
console.log(res);
console.timeEnd(tag);