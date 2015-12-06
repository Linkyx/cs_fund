var mysql = require('mysql');
var connect_info = require('../config.js');

//连接数据库
var client = mysql.createConnection({
  user: connect_info.database.user,
  password: connect_info.database.passwd,
  host: connect_info.database.host,
  port: connect_info.database.port,
  database: connect_info.database.data,
  charset: 'UTF8_GENERAL_CI',
  debug: false
});

client.connect();


//对数据库的操作
client.query(
  'SELECT * FROM ' + connect_info.database.table,
  function (err, results, fields){
      if(err){
        throw err;
      }
      if(results){
        for(var i = 0; i < results.length; i++){
          console.log(results[i].fund_remark);
        }
      }
      client.end();
  }
);