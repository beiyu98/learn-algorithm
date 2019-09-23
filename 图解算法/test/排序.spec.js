const {selectSort} = require("../选择排序");
const {quickSort} = require('../快速排序');

it("选择排序", () => {
  const arr = [2, 8, 4, 1, 5, 9];
  const res = selectSort(arr);
  expect(res).toEqual([1, 2, 4, 5, 8, 9]);
});


it('快速排序', function () {
  const arr = [2, 8, 4, 1, 5, 9];
  const res = quickSort(arr);
  expect(res).toEqual([1, 2, 4, 5, 8, 9]);
});
