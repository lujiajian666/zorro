const Sequelize = require("sequelize");
const sequelize = new Sequelize('nodejs','root','',{
  host:'localhost',
  dialect:'mysql',
  port:3306,
})
module.exports = sequelize;