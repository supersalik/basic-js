const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrInd = [];
  let arrM = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) arrInd.push(i);
    if (arr[i] !== -1) arrM.push(arr[i]);
  }
  arrM = arrM.sort((a, b) => a - b);
  console.log(arrM);

  for (let i = 0; i < arr.length; i++) {
    if (arrInd.includes(i)) result.push(-1);
    else {
      result.push(arrM[0]);
      arrM.shift();
    }
  }
  console.log(result);
  return result;
}

module.exports = {
  sortByHeight,
};

