const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let temp = [];
  let tm = n.toString().split("");
  tm.pop();
  let tn;

  let max = Number(tm.join(""));

  let arr = n.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    temp = [];
    for (let j = 0; j < arr.length; j++) {
      i === j ? temp : temp.push(arr[j]);
    }

    tn = Number(temp.join(""));
    tn > max ? (max = tn) : max;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
