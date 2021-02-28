const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let string = '';
  if (!options.separator) {
    options.separator = '+';
  }

  if (options.repeatTimes > 1) {
    string = `${str} `;
  }

  return string.repeat(options.repeatTimes).split(' ').join(options.separator);
};
