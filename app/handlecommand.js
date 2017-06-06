'use strict';

require('dotenv').config();
const messageTemplate =  require('./message-template');
const bashCommand = require('./bashCommand');

const randomNumber = function(low, high) {
	return Math.floor(Math.random() * (high - low)) + low;
}

function help(res, commandText) {
	const commandParts = commandText.split(' ');
	const command = commandParts[0];
	const commandArg = commandParts[1] ? commandParts[1].toLowerCase().trim() : false;
	let commandMessage = '',
	     message;

	switch (command) {
		case '' :
			commandMessage += 'get a random chunk of wisdom';
			message = messageTemplate.textFormat(commandMessage);
			res.json(message);
		break;
		case 'bash' :
			//commandMessage += 'get information about the command and its syntax';
			if (commandArg) {
				bashCommand.getSummary(commandArg, function(lines) {
					message = messageTemplate.bashFormat(commandArg, lines );
					res.json(message);
				})
			}
		break;
		case 'help' :
			commandMessage += 'learn how to';
			message = messageTemplate.textFormat(commandMessage);
			res.json(message);
		break;
		case 'rant' :
			//message += 'get the ultimate push'; 
			message = messageTemplate.imageFormat(randomNumber(1,5));
			res.json(message);
		break;
		default:
			if (Number.parseInt(command) > 1 ) {
				commandMessage += 'get a specific chunk of wisdom';
			}
			message = messageTemplate.textFormat(commandMessage);
			res.json(message);
		break;
	}	
} 

module.exports =  {
   help
}
