/**
 * 利用reduce数组去重
 * @param {Array} array 待去重数组
 */
function filterRepeatByReduce(array) {
  return array.reduce((a, b) => {
    if (a.indexOf(b) === -1) {
      a.push(b);
    }
    return a;
  }, []);
}

/**
 * 利用set数据结构去重
 * @param {Array} array 数组
 */
function filterRepeatBySet(array) {
  return [...new Set(array)];
}

const arr = [1, 3, 4, 2, 4, 3];
console.log(filterRepeatByReduce(arr));
console.log(filterRepeatBySet(arr));
