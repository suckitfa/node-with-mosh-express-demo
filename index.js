const express = require("express");
const Joi = require("joi");
const app = express();
const logger = require('./middleware/logger');
const auth = require('./auth')
const helmet = require('helmet')
const morgan = require('morgan')
const config = require('config')
const courses = require('./routes/courses')
const home = require('./routes/home')
// using view engine
app.set('view engine','pug')
app.set('views','./views'); // put all the views file in the folder called views

// how to debugging node.js app
const startupDebugger = require('debug')('app:startup')
const debDebugger = require('debug')('app:db')
// configuration
console.log('App name = ', config.get('name'))
console.log('mail server = ',config.get('mail.host'))

console.log('NODE_ENV = ',process.env.NODE_ENV)
console.log(`env = ${app.get('env')}`)
// middleware
app.use(helmet())
// detect env to use third party logger-morgan
if(app.get('env') === 'development') {
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
  startupDebugger('Morgan enabled....')
}
app.use(express.json());
app.use(express.urlencoded()); // key=value&key=value
// static file
app.use(express.static('public'))
// write our own middleware
app.use(logger)
app.use(auth)

// routes
// home api
app.use('/',home);

// course api
app.use('/api/courses',courses)
// PORTS
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
