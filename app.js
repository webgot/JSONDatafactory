const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const config = require('./config');
const index = require('./routes/index');
const users = require('./routes/users');
const saying = require('./routes/saying');
const login = require('./routes/login');
const faq = require('./routes/faq');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));
app.use(expressSession({
  secret : config.session_key,
  resave : true,
  saveUninitialized : true
}));

app.use('/', index);
app.use('/users', users);
app.use('/saying', saying);
app.use('/faq', faq);
app.use('/login', login);

app.get('/addSaying', (req, res)=>{
  if(req.session.user){
    res.render('addSaying');
  }
  else
    res.redirect('login');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
