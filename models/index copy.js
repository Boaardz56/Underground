"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};
debugger;

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    console.log('filtering files ' +  (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js"));
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    console.log('index.js sequelizing model file dynamically importing them --- ' + file)
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  }
  );

  console.log('!!!!!!!! after the foreach here is the global variable "db" :')
  for (var key in db) {
    // skip loop if the property is from prototype
    if (!db.hasOwnProperty(key)) continue;

    var obj = db[key];
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;

        // your code
        console.log(prop + " = " +  obj[prop]);
    }
}
  

Object.keys(db).forEach(function(modelName) {
  console.log('Identifying keys for models for associations modelName - ' + modelName)
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
