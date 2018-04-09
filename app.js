const express 		= require('express');
const path 			= require('path');
const favicon 		= require('serve-favicon');
const logger 		= require('morgan');
const cookieParser 	= require('cookie-parser');
const bodyParser 	= require('body-parser');


const index 		= require('./routes/index');
const users 		= require('./routes/users');
const api 			= require('./routes/api');

const app 			= express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', api);
app.use('/', index);
app.use('/users', users);


const port = process.env.PORT || 3050;



//Server
app.listen(port , ()=>{
	console.log(`SERVER IS RUNNING ON PORT ${port}`);	
})


module.exports = app;
