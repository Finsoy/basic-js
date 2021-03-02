const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  arr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  constructor(bool) {
    this.bool = bool;
  }
  encrypt(str, key) {
    if (!(str && key)) throw Error;
    let string = '';
    let k = 0;
    for (let i = 0; i < str.length; i++) {
      if (typeof Number(str[i]) === 'number') {
        string += str[i];
      } else if (!this.arr.includes(str[i].toUpperCase())) {
        k = k === key.length - 1 ? 0 : k + 1;
        continue;
      }
      string += this.arr[
        (this.arr.indexOf(str[i].toUpperCase()) +
          this.arr.indexOf(key[k].toUpperCase())) %
          this.arr.length
      ];
      k = k === key.length - 1 ? 0 : k + 1;
    }
    return this.bool ? string : string.split('').reverse().join('');
  }
  decrypt(str, key) {
    if (!(str && key)) throw Error;
    let string = '';
    let k = 0;
    for (let i = 0; i < str.length; i++) {
      if (!this.arr.includes(str[i].toUpperCase())) {
        k = k === key.length - 1 ? 0 : k + 1;
        continue;
      }
      string += this.arr[
        (this.arr.indexOf(str[i].toUpperCase()) +
          this.arr.length -
          this.arr.indexOf(key[k].toUpperCase())) %
          this.arr.length
      ];
      k = k === key.length - 1 ? 0 : k + 1;
    }
    return this.bool ? string : string.split('').reverse().join('');
  }
}
module.exports = VigenereCipheringMachine;
