var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  }

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api', indexRouter);
//app.use('/users', usersRouter);

module.exports = app;
