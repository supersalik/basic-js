const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let y = n.toString().split("");

  while (y.length > 1) {
    y = n.toString().split("");
    console.log(y);
    for (let i of y) {
      sum += Number(i);
      console.log(sum);
      n = sum;
    }
    sum = 0;
  }
  return Number(y[0]);
}

module.exports = {
  getSumOfDigits,
};
