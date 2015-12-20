/*连接数据库并进行数据库的定义及创建
  具体的配置文件在config中
*/
var Sequelize = require('sequelize');
var config = require('../../config.js');

/*配置信息，创建模板对象*/
var sequelize = new Sequelize(config.database.data, config.database.user, config.database.passwd, {
  host: config.database.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 9,
    idle: 10000
  }
});

module.exports = sequelize;