var DataTypes = require("sequelize").DataTypes;
var _cab = require("./cab");
var _cabShifts = require("./cab_shifts");
var _carModels = require("./car_models");
var _customerQueries = require("./customer_queries");
var _driver = require("./driver");
var _transactions = require("./transactions");
var _users = require("./users");

function initModels() {
  var sequelize = require('../config/database').taxiDatabase
  var cab = _cab(sequelize, DataTypes);
  var cabShifts = _cabShifts(sequelize, DataTypes);
  var carModels = _carModels(sequelize, DataTypes);
  var customerQueries = _customerQueries(sequelize, DataTypes);
  var driver = _driver(sequelize, DataTypes);
  var transactions = _transactions(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    cab,
    cabShifts,
    carModels,
    customerQueries,
    driver,
    transactions,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
