const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let used = [];
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  for (let s of arr1) {
    let x = arr2.filter((cur) => cur === s).length;
    let y = arr1.filter((cur) => cur === s).length;

    if (x !== 0 && !used.includes(s)) {
      used.push(s);
      x > y ? (sum += y) : (sum += x);
    }
  }
  console.log(used);
  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
