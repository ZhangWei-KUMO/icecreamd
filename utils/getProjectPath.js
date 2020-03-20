const path = require('path');
const cwd = process.cwd();

module.exports = function getProjectPath(...filePath) {
  return path.join(cwd, ...filePath);
}

