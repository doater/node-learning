var express = require('express');
var app = express();
var path = require('path');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);
// app.get('/', function(req, res){
//   res.send('hi, express.');
// })

// app.get('/users/:name', function(req, res){
//     res.send('Hello, ' + req.params.name);
// })

app.listen(8080, function(){
  console.log('The server is starting on port 8080.')
})
