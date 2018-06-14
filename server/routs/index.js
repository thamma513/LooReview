const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

module.exports = (app) => {
  // API routes
  fs.readdirSync(__dirname + '/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
  fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  }).forEach((file) => {
    require(`./${file.substr(0, file.indexOf('.'))}`)(app);
  });
};