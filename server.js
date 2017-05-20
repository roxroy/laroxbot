'use strict';

var express = require('express')
var path = require('path')
var bodyParser = require('body-parser');

var auth = require('./app/auth');
var routes = require('./app/routes');
var app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', __dirname + '/public');

app.get('/slack', routes.auth);
app.get('/', routes.index);
app.post('/', routes.commands);

const server = app.listen(process.env.PORT || 3000, () => {
	console.log('Web server listening on port %d in %s mode', server.address().port, app.settings.env);
});
