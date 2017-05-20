'use strict';

var handlecommand = require('./handlecommand')


module.exports.index = function(req, res){
  res.render('index');
};

module.exports.commands = function(req, res){
  let text = req.body.text;
  // implement your bot here ...
  console.log (text);
  handlecommand.help(res);
};
