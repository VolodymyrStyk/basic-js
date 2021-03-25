const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let number = 0;
  for (let subArr of matrix) {
    for (let elem of subArr) {
      if (elem === "^^") {
        number++;
      }
    }
  }
  return number;
};
