// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'postgres', 'your_new_password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
