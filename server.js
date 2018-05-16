const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
var useragent = require('express-useragent');
global.config = require('./config');

mongoose.connect('mongodb://127.0.0.1:27017/Ulib' , { useMongoClient : true });
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));
app.use(expressValidator());
app.use(useragent.express());
app.use('/public' , express.static('public'))

const router = require('./routes');

app.use('/api' , router)

app.listen(config.port , () => {
    console.log(`Server running at Port ${config.port}`)
});
