const fs = require("fs");
const path = require("path");

const EMPTY_LINE = "";

const deleteFile = filename => {
  try {
    return fs.unlinkSync(path.join(__dirname, filename));
  } catch (error) {}
};

const deleteFolder = path => {
  try {
    return fs.rmdirSync(path.join(__dirname, path));
  } catch (error) {}
};

console.log(EMPTY_LINE);

console.log("🧹  Clean...");

// Remove folders
deleteFolder(".git");

// Remove files
deleteFile("setup.js");

console.log("✅ Finished!");
