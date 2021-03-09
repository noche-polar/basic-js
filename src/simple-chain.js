const CustomError = require("../extensions/custom-error");

const chainMaker = {
  newChain: [],

  getLength() {
    return this.newChain.length;
  },

  addLink(value) {
    this.newChain.push(`( ${value} )`);

    return this;
  },

  removeLink(position) {
    if (typeof position != "number" || position < 0 || position > this.newChain.length || !Number.isInteger(position)) {
      this.newChain = [];
      throw new Error();
    }

    this.newChain.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.newChain = this.newChain.reverse();

    return this;
  },

  finishChain() {
    let result = this.newChain.join('~~');
    this.newChain = [];

    return result;
  }
};

module.exports = chainMaker;
