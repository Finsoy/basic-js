const CustomError = require('../extensions/custom-error');

const chainMaker = {
  arr: [],
  string: '',
  getLength() {
    return this.string.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number') {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.deleteChain();
      throw Error;
    }
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    for (let i = 0; i <= this.arr.length - 1; i++) {
      if (i === this.arr.length - 1) {
        this.string += `( ${this.arr[i]} )`;
      } else {
        this.string += `( ${this.arr[i]} )~~`;
      }
    }
    let temp = this.string;
    this.deleteChain();
    return temp;
  },
  deleteChain() {
    this.arr = [];

    this.string = '';
  },
};

module.exports = chainMaker;
