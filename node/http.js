var http = require('http');
var mymodule = require('./module_demo');
http.createServer(function(req,res){
    // http header to declare html
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("hello test");    
    res.write(req.url);
    res.write(mymodule.currentTime());
    res.end();
}).listen(8080);
