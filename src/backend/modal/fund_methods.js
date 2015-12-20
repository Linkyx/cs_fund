
var Fund = require('./fund_modal.js');

/*进行插入操作
  每当插入一条数据时，要从当前数据库中选取最后一条数据中的sum
  作为下一次插入时的基准
*/

exports.insertValue = function *(){
  //找到最后一条数据并返回
  var fund = yield Fund.findAll({order:[['fundId', 'DESC']],limit: 1});
  if(fund.fundId == null){
    //如果数据库为空,创建一条
    //初始化数据,并返回
    Fund.create({fundCount: 0, fundSum: 0, fundRemark: 'initialization'});
    //console.log(fund.fundId);
  }
  //获取数据库中最新的sum值
  var sum = fund.fundSum;
  //创建一条新记录
   yield Fund.create({fundCount: 10, fundSum:10, fundRemark: 'test'});
}