var handlecommand = require('./handlecommand');
var auth = require('./auth');
require('dotenv').config()

module.exports.auth = function(req, res){
  auth(req, res);
};

module.exports.index = function(req, res){
  res.render('index', { client_id: process.env.SLACK_CLIENT_ID });
};

module.exports.commands = function(req, res){
  let commandText = req.body.text;
  // implement your bot here ...
  console.log (commandText);
  handlecommand.help(res, commandText);
};
