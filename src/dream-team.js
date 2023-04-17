const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let arrL = [];

  if (
    !Array.isArray(arr) ||
    arr === null ||
    arr === undefined ||
    arr === false
  ) {
    return false;
  }

  for (let i of arr) {
    if (arr.filter((ar) => typeof ar === "string").length === 0) {
      return false;
    }
    if (typeof i === "string" && i !== "" && i !== null) {
      i = i.trim();
      if (i.includes(".")) {
        arrL.push(i[i.indexOf("." + 1)].toUpperCase());
      } else {
        arrL.push(i[0].toUpperCase());
      }
    }
  }
  arrL = arrL.sort().join("");
  return arrL;
}

module.exports = {
  createDreamTeam,
};
