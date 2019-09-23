const selectSort = arr => {
  if (!Array.isArray(arr)) throw new Error("params:arr must be array");
  if (arr.length < 1) return arr;

  let res = [];
  for (let i = 0; i <= arr.length; i++) {
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        min = arr[j];
      }
    }
    console.log(i, min);
    res.push(min);
  }

  return res;
};
module.exports = { selectSort };
