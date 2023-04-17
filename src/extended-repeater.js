const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let x = 1;
  options.repeatTimes ? (x = options.repeatTimes) : (x = 1);
  if (str === null) str = "null";

  for (let i = 0; i < x; i++) {
    result.push(str);

    let y = 1;
    options.additionRepeatTimes ? (y = options.additionRepeatTimes) : (y = 1);

    for (let j = 0; j < y; j++) {
      if (options.addition === null) options.addition = "null";
      result.push(options.addition);
      let adS;
      options.additionSeparator
        ? (adS = options.additionSeparator)
        : (adS = "|");
      if (j !== y - 1) result.push(adS);
    }
    if (options.repeatTimes > 1 && i !== options.repeatTimes - 1) {
      options.separator ? result.push(options.separator) : result.push("+");
    }
  }

  return result.join("");
}

module.exports = {
  repeater,
};
