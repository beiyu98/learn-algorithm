//检查给定的字符串是否是同构的
//为了使两个字符串同构，字符串a中出现的所有字符都可以用另一个字符替换
//获取字符串b，必须保留字符的顺序。的任何一个字符都必须有一对一的映射
//字符串A到字符串B的每个字符

// paper and title is isomorphic.
// egg and sad is not isomorphic.
// dgg and add is isomorphic.

//解题要点：同构代表两个字符串中每个位置上字符在自身第一次出现的索引相同

function isIsomorphic(firstStr, secondStr) {
  if (!firstStr || !secondStr) return false;
  const s = firstStr.split('').map(str => firstStr.indexOf(str));
  const t = secondStr.split('').map(str => secondStr.indexOf(str));
  return s.join('') === t.join('');
}
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('egg', 'sad'));
console.log(isIsomorphic('dgg', 'add'));
