const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  for (let member of members) {
    if (typeof member === "string") {
      member = member.replace(/\s+/g, "");
      title.push(member[0].toUpperCase());
    } else {
      return;
    }
  }
  newTitle = title.sort().join("");

  return newTitle;
};
