const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  for (const member of members) {
    if (typeof member === "string") {
      title.push(member[0].toUpperCase());
    } else {
      return;
    }
  }
  newTitle = title.sort().join("");

  return newTitle;
};
