const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  let result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);

    let x = arr[i];
    console.log(
      !result.includes(
        arr[i] && temp.filter((ar) => ar === arr[i]).length === 1
      )
    );
    console.log(result.includes(arr[i]));
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    } else if (
      temp.filter((ar) => ar === arr[i]).length !==
      result.filter((ar) => ar === arr[i]).length
    ) {
      console.log(1);
      result.push(
        arr[i] + `(${temp.filter((ar) => ar === arr[i]).length - 1})`
      );
    } else if (
      temp.filter((ar) => ar === arr[i]).length ===
      result.filter((ar) => ar === arr[i]).length
    ) {
      result.push(arr[i] + `(${result.filter((ar) => ar === arr[i]).length})`);
    }
  }
  console.log(temp);
  console.log(result);
  return result;
}

module.exports = {
  renameFiles,
};
