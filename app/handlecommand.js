'use strict';

let messageTemplate = function(text) {
   	return {
		  response_type: 'in_channel', // public to the channel
		  text:  text
	};
}

function help(res, commandText) {
	let commandParts = commandText.split(' ');
	const command = commandParts[0];
	let message = '';

	switch (command) {
		case '' :
			message += 'get a random chunk of wisdom';
		break;
		case 'bash' :
			message += 'get information about the command and its syntax';
		break;
		case 'help' :
			message += 'learn how to';
		break;
		case 'rant' :
			message += 'get the ultimate push';
		break;
		default:
			if (Number.parseInt(command) > 1 ) {
				message += 'get a specific chunk of wisdom';
			}
		break;
	}

	messageTemplate(message);
	res.json(message);
} 

module.exports =  {
   help
}
