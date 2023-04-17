const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],
  temp: [],
  tempR: [],
  Length: 0,

  getLength() {
    this.Length = this.temp.length;
    return this;
  },
  addLink(value) {
    //  if (value!==)

    this.temp.push(value);
    return this;
  },
  removeLink(position) {
    for (let i = 0; i < this.temp.length; i++) {
      if (i !== position) this.tempR.push(this.temp[i]);
    }
    this.temp = this.tempR;
    this.tempR = [];
    return this;
  },
  reverseChain() {
    this.temp = this.temp.reverse;
    return this;
  },
  finishChain() {
    for (let i = 0; i < this.temp.length; i++) {
      if (i !== this.temp.length - 1) {
        this.result.push(`( ${this.temp[i]} )~~`);
      }
      if (i === this.temp.length - 1) {
        this.result.push(`( ${this.temp[i]} )`);
      }
    }
    this.temp = [];
    return this.result.join("");
  },
};

module.exports = {
  chainMaker,
};
