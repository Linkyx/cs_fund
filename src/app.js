/*程序请求的入口文件*/

var fs = require('fs');
var koa = require('koa');
var router = require('koa-router')();
var SumController = require('./backend/controllers/sum');

var app = koa();

app.controllers = {}
var files = fs.readdirSync('./backend/controllers');
files.forEach(function (item) {
  var filePath = './backend/controllers/' + item;

  var stats = fs.statSync(filePath);
  if (stats.isFile()) {
    var mod = require(filePath);
    app.controllers[item.slice(0, -3)] = mod;
  }
});

router.get('/home', app.controllers.sum.index);

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
