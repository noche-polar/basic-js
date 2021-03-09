const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max_depth = 1;

    for (let item of arr) {
      if (!Array.isArray(item)) continue;
      let depth = 1 + this.calculateDepth(item);
      if (max_depth < depth) max_depth = depth;
    }
    
    return max_depth;
  }
};