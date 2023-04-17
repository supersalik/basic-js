const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      let temp = [];
      for (let n = 0; n < i; n++) {
        if (mat[n][j] === 0) temp.push(0);
      }

      temp.includes(0) ? sum : (sum = sum + mat[i][j]);
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
