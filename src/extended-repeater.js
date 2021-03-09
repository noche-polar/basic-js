const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str != "string") {str = String(str);}
  if (options.hasOwnProperty("addition") && typeof options.addition != "string") {options.addition = String(options.addition);}

  let separator = "+";
  let addition = options.addition;
  let additionSeparator = "|";
  let totalAddition = "";
  let newStr = "";

  if (options.hasOwnProperty("separator")) {separator = options.separator;}
  if (typeof options.addition == "undefined") {addition = "";}
  if (options.hasOwnProperty("additionSeparator")) {additionSeparator = options.additionSeparator;}

  if (!Number.isInteger(options.additionRepeatTimes) || options.additionRepeatTimes == 1 || !options.hasOwnProperty("additionRepeatTimes")) {
    totalAddition += addition;
  } else {
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
      totalAddition += addition;
      if (i < options.additionRepeatTimes) {totalAddition += additionSeparator}
    }
  }

  if (!Number.isInteger(options.repeatTimes) || options.repeatTimes == 1 || !options.hasOwnProperty("repeatTimes")) {
    newStr += str + totalAddition;
  } else {
    for (let i = 1; i <= options.repeatTimes; i++) {
      newStr += str + totalAddition;
      if (i < options.repeatTimes) {newStr += separator}
    }
  }

  return newStr;
};