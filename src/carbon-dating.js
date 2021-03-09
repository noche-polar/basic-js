const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" ||
             isNaN(+sampleActivity) || 
             +sampleActivity >= 15 || 
             +sampleActivity <= 0) {
    return false;
  }

  let age = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD));

  return age;
};
