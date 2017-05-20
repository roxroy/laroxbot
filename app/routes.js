'use strict';

var handlecommand = require('./handlecommand');
var auth = require('./auth');

module.exports.auth = function(req, res){
  auth(req, res);
};

module.exports.index = function(req, res){
  res.render('index');
};

module.exports.commands = function(req, res){
  let text = req.body.text;
  // implement your bot here ...
  console.log (text);
  handlecommand.help(res);
};
