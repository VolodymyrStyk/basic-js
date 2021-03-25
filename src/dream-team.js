const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    for (let member of members) {
      if (typeof member === "string") {
        member = member.replace(/\s+/g, "");
        title.push(member[0].toUpperCase());
      } else {
        member = "";
      }
    }
    newTitle = title.sort().join("");

    return newTitle;
  } else {
    return false;
  }
};
