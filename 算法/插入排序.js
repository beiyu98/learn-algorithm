const array = [0, 3, 6, 17, 35, 100, 98, 66, 88, 58, 23, 45, 34, 11];

//1.把数组分为[已排序]和[未排序]两部分,第一个数为[已排序]，其余为[未排序]
//2.从[未排序]抽出第一个数，和[已排序]部分比较，插入到合适的位置

function insertSort(array) {
  const len = array.length;
  for (let i = 1; i < len; i++) {
    const curValue = array[i];
    let j;
    for (j = i - 1; j > -1 && array[j] > curValue; j--) {
      array[j + 1] = array[j];
    }
    //说明说明循环到array[j]位置且array[j]<curValue
    //已经找到位置了，那么将array[j+1]复制为curValue
    array[j + 1] = curValue;
  }
  return array;
}

console.log(insertSort(array));
