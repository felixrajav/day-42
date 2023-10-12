const express = require('express');
require('dotenv').config(); 
const { tokenGate } = require('./Middleware/AuthGates');
const APP_SERVER = express();


APP_SERVER.get('/',(req,res,next) => {
    res.send('<h1>URL SHORTENER TASK</h1>')
});
APP_SERVER.use('/signup', require('./controllers/SignUp.controller'));
APP_SERVER.use('/users', require('./controllers/users.controller'));
APP_SERVER.use('/login', require('./controllers/Login.controller'));
APP_SERVER.use('/forgot', require('./controllers/Forgot.controller'));
APP_SERVER.use('/reset', require('./controllers/reset.controller'));
APP_SERVER.use('/shortenUrl', require('./controllers/ShortenUrl.controller'));
APP_SERVER.use('/userActivities', require('./controllers/UserActivities.controller'));

module.exports = APP_SERVER;