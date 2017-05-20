'use strict';

function help(res) {
	let data = {
	  response_type: 'in_channel', // public to the channel
	  text: 'Hello: ' + new Date() };
	res.json(data);
} 

module.exports =  {
   help
}
