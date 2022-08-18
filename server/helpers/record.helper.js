const calculatePoints = (value) => {
  let points = 0;
  if (value > 50) {
    points = 1 * 50;
  }
  if (value > 100) {
    let val = value - 100;
    let calVal = 2 * val;
    points = points + calVal;
  }
  return points;
};

module.exports = {
  calculatePoints,
};
