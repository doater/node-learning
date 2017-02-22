var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log('1');
  next(new Error('gggg'));
  // next();
});

app.use(function(req, res, next) {
  console.log('2');
  res.status(200).end();
});

app.use(function(err, req, res, next){
  console.log(err.message);
  res.status(500).send('服务器内部错误。');
})
app.listen(3000);
