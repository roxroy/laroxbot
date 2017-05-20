'use strict';

function help(res) {
	let data = {
	  response_type: 'in_channel', // public to the channel
	  text: '302: Found',
	  attachments:[
	    {
	      image_url: 'https://http.cat/302.jpg'
	    }
	]};
	res.json(data);
} 

module.exports =  {
   help
}
