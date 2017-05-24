var express = require('express');
var ejs = require('ejs');
var app = express();
var path = require('path');

// disable view-caching
app.disable('view cache');

// config template engine
app.set('views', path.join(__dirname, '../client/templates'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
//ejs가 관리할거야
// serve static files
app.use(express.static('public'));

//route
app.use('/api', require('./api'))
app.use('/', require('./www'))
//안에 있는 인덱스를 찾는다. .use 미들웨어를 찾는다.

app.listen(3000, function () {
 console.log('Rest API Server listening on port 3000!');
});