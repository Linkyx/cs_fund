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

/*对数据库的相关操作*/

//查找全部数据,不包括已经删除的
exports.watchAll  = function (){
  client.query(
    'SELECT * FROM ' + connect_info.database.table + ' WHERE flag != 0',
    function (err, results){
        if(err){
          throw err;
        }
        for(var i = 0; i < results.length; i++){
          console.log(results[i].fund_remark);
        }
        return results;
    }
  );
}

//查看某一天的数据
exports.watchOneDay = function (){
  client.query(
    'SELECT * FROM ' + connect_info.database.table + ' WHERE fund_date > ' + '\'2015-12-06\'',
    function (err, results){
      if(err){
        throw err;
      }
      console.log(results);
      return results;
    }
  );
};

//插入一条数据
exports.insertData = function (){
  client.query(
    'INSERT INTO ' + connect_info.database.table + '(fund_count, fund_remark, fund_date, flag) '
    +'VALUES (10, "test", NULL, 1)',
    function (err, results){
      if(err){
        throw(err);
      }
      console.log('insert success');
      return true;
    }
  );
}

//删除一条数据 ,只进行flag的更新
exports.deleteData = function (){
  client.query(
    'UPDATE ' + connect_info.database.table + ' SET `flag`=0 WHERE `fund_id` = ' + 3,
    function (err, results){
      if(err){
        throw(err);
      }
      console.log('update success');
      return true;
    }
    );
}




