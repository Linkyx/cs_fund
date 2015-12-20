var fundMethods = require('../modal/fund_methods.js');



var fund = fundMethods.insertValue();
fund.next().value.then(function (data) {
  console.log(data[0].fundId);
});
