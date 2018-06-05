const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
var useragent = require('express-useragent');
global.config = require('./modules/config');

mongoose.connect('mongodb://admin:BxaGmA2a5t@ds147180.mlab.com:47180/ulibdb' , { useMongoClient : true });
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));
app.use(expressValidator());
app.use(useragent.express());
app.use('/public' , express.static('public'))

const router = require('./modules/routes');

app.use('/api' , router)

app.listen(config.port, '0.0.0.0', function(err) {
    console.log(`Server running at Port ${config.port}`);
});
