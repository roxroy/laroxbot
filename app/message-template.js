'use strict';

require('dotenv').config()

module.exports.textFormat = function(text) {
   	return {
		  response_type: 'in_channel', // public to the channel
		  text:  text
	};
}

module.exports.imageFormat = function(imageIndex) {		
	const BASE_SITE_URL = process.env.BASE_SITE_URL;
   	return {
    "attachments": [
        {
          "pretext": "Get the ultimate push",
          "text": `<${BASE_SITE_URL} | Get Larox> :: <http://www.github.com/laroxbot|Get Code>`,
					"image_url": `${BASE_SITE_URL}/images/rant-${imageIndex}.jpg`,
          "mrkdwn_in": "text"
        }
    ]
	};
}
