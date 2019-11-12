function setValue(obj) {
  obj.name = 'b';
  obj = new Object();
  obj.name = 'c';
}

const obj = new Object();
obj.name = 'a';

console.log(obj.name);
setValue(obj);
console.log(obj.name);
// js 传递对象的指针，只能修改值，不能修改指针的指向
