const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);
  if (isNaN(sample)) {
    return false;
  }
  if (typeof sample === "number") {
    let k = Math.LN2 / HALF_LIFE_PERIOD;
    let upper = Math.log(MODERN_ACTIVITY / sample);
    console.log(Math.ceil(upper / k));
    return Math.ceil(upper / k);
  }
};
