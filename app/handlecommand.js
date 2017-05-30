'use strict';

require('dotenv').config();
const messageTemplate =  require('./message-template');

const randomNumber = function(low, high) {
	return Math.floor(Math.random() * (high - low)) + low;
}

function help(res, commandText) {
	let commandParts = commandText.split(' ');
	const command = commandParts[0];
	let commandMessage = '',
	     message;

	switch (command) {
		case '' :
			commandMessage += 'get a random chunk of wisdom';
			message = messageTemplate.textFormat(commandMessage);
		break;
		case 'bash' :
			commandMessage += 'get information about the command and its syntax';
			message = messageTemplate.textFormat(commandMessage);
		break;
		case 'help' :
			commandMessage += 'learn how to';
			message = messageTemplate.textFormat(commandMessage);
		break;
		case 'rant' :
			//message += 'get the ultimate push'; 
			message = messageTemplate.imageFormat(randomNumber(1,5));
		break;
		default:
			if (Number.parseInt(command) > 1 ) {
				commandMessage += 'get a specific chunk of wisdom';
			}
			message = messageTemplate.textFormat(commandMessage);
		break;
	}

	res.json(message);
} 

module.exports =  {
   help
}
