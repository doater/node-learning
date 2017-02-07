var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

global.dbHelper = require('./dao/dbHelper');
global.db = mongoose.connect('mongodb://127.0.0.1:27017/webpictures');

app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}))

app.set('views', path.join('public/views'));
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) {
        res.locals.message = '<div class="alert alert-danger" style="margin-bottom: 20px;color:red;">' + err + '</div>';
    }
    next();
})
require('./routes')(app);
app.get('/', function(req, res) {
    res.render('login');
})

app.listen(4000, function() {
    console.log('the server is start on port 4000');
})