var sequelize = require('./sequelize.js');
var Sequelize = require('sequelize');


/*fund 表为基本信息表*/
  var fund = sequelize.define ('fund', {
    //主键,id
    fundId: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    //支出或转入金额
    fundCount: {
      type: Sequelize.FLOAT(10),
      allowNull: false
    },
    //交易信息
    fundRemark: {
      type: Sequelize.STRING(1024),
      allowNull: false
    },
    //交易日期
    fundDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    //总金额
    fundSum: {
      type: Sequelize.FLOAT(10),
      allowNull: false,
      defaultValue: 0
    }
  },
    //sequelize配置信息
  {
      timestamps: false,
      freezeTableName: true,
      tableName: 'fund'
  }
  );

  /*创建fund表*/
  fund.sync({force:false}).then(function () {
      console.log('success to create fund or fund is created');
  });

module.exports = fund;
