let http = require('http');

function getText(data) {
	const start = data.indexOf('<PRE>');
	const end = data.lastIndexOf('</PRE>');
  let text = data.substring(start+5, end).trim().split('\n');
  return text.slice(0, 20).join('\n');
}

function getSummary(commandArg, cb) {

	let options = {
	    host: 'man.he.net',
	    path: `/man1/${commandArg}`
		},
		data ='';

	let request = http.request(options, function (res) {
	    res.on('data', function (chunk) {
      		data += chunk;
	    });
	    res.on('end', function () {
				  cb(getText(data));
	    });
	});
	request.on('error', function (e) {
	     cb('Unknown command.');;
	});
	request.end();
}

module.exports =  {
   getSummary
}

