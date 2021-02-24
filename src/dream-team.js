const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  let sortName = '';

  if (Array.isArray(members)) {
    for (let i of members) {
      if (typeof i === 'string') {
        let temp = i.trim();
        sortName += temp[0].toUpperCase();
      }
    }
  } else return false;
  return sortName.split('').sort().join('');
};
