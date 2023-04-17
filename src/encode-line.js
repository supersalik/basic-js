const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "") return "";
  let result = [];
  let temp = str.split("");
  let num = 1;

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === temp[i + 1]) {
      num++;
    }

    if (temp[i] !== temp[i + 1] && num !== 1) {
      result.push(num + temp[i]);
      num = 1;
    }

    if (temp[i] !== temp[i - 1] && temp[i] !== temp[i + 1])
      result.push(temp[i]);
  }
  return result.join("");
}

module.exports = {
  encodeLine,
};
