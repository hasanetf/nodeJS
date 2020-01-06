var http = require('http');
var bhtml = require('./modules/basic');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    bhtml.blkHTML(res);
    res.write('Hello World!');
    res.end();
}).listen(8080);
