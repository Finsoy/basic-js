const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let string = '';
  let addition = '';
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (options.repeatTimes) {
    if (options.repeatTimes === 1 && options.additionRepeatTimes === 1) {
      if (options.addition) {
        string = `${str}${options.addition}`;
      } else {
        string = `${str}`;
      }
    } else {
      for (let i = 1; i <= options.repeatTimes; i++) {
        addition = '';
        if (options.additionRepeatTimes) {
          for (let j = 1; j <= options.additionRepeatTimes; j++) {
            if (j === options.additionRepeatTimes) {
              addition += `${options.addition}`;
            } else {
              addition += `${options.addition}${options.additionSeparator}`;
            }
          }
        } else {
          if (options.addition) {
            addition = `${options.addition}`;
          }
        }

        if (i === options.repeatTimes) {
          string += `${str}${addition}`;
        } else {
          string += `${str}${addition}${options.separator}`;
        }
      }
    }
  } else {
    if (options.addition) {
      string = `${str}${options.addition}`;
    } else {
      string = `${str}`;
    }
  }

  return string;
};
