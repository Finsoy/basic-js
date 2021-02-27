const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  let newArr = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === '--discard-next') {
      } else if (arr[i - 1] === '--discard-next') {
        newArr.splice(arr.indexOf(arr[i]), 1);
      } else if (arr[i] === '--discard-prev') {
        if (i === 0) {
        } else {
          newArr.splice(arr.indexOf(arr[i - 1]), 1);
        }
      } else if (arr[i] === '--double-next') {
        if (i === arr.length - 1) {
        } else {
          newArr.push(arr[i + 1]);
        }
      } else if (arr[i] === '--double-prev') {
        if (i === 0) {
        } else {
          if (arr[i - 2] === '--discard-next') {
          } else {
            newArr.push(arr[i - 1]);
          }
        }
      } else newArr.push(arr[i]);
    }
  } else throw Error('Error');
  return newArr;
};
