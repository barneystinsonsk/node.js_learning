var http = require('http');
var fs = require('fs'); // File system handling

http.createServer(function (req, res)
  {
    fs.readFile('demofile1.html', function(err, data)
    {
      res.writeHead(200, {'Content-Type': 'text/html'});
    });
  }
)
