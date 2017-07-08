var http = require('http');

http.createServer(function(req, res)
	{
		//res.writeHead(200, {'Content-Type': 'text/html'});
		console.log("mysecond.js started");
		res.end('Hello World Again');
	}
).listen(8081);
