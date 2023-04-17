const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sA) {
  const k = Math.log(2) / HALF_LIFE_PERIOD;
  let t = 0;
  if (
    typeof sA !== "string" ||
    Number(sA) === 0 ||
    Number(sA) === NaN ||
    isNaN(sA) ||
    Number(sA) === null ||
    Number(sA) < 0
  )
    return false;
  else {
    t = Math.ceil(Math.log(MODERN_ACTIVITY / sA) / k);
    if (t < 0) return false;
    else return t;
  }
}

module.exports = {
  dateSample,
};
