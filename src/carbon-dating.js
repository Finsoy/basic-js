const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let time = 0;
  if (sampleActivity) {
    if (sampleActivity === toString(sampleActivity)) {
      time =
        Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / HALF_LIFE_PERIOD;
    } else return false;
  } else return false;

  return Math.ceil(time);
};
