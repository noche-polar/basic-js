const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minTurns = 2 ** disksNumber - 1;
  let seconds = Math.floor(3600 * minTurns / turnsSpeed);

  return { turns: minTurns, seconds: seconds};
};
