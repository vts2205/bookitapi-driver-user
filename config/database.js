const { Sequelize } = require('sequelize')

module.exports.taxiDatabase = new Sequelize('travelbooking', 'root', '', {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  operatorsAliases: 0,
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})