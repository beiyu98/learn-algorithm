function reverseWord(words) {
  return words.split(/\s/g).map(str => str.split('').reverse().join(''));
}

module.exports = { reverseWord };