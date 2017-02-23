var http = require('http')
  , basic_auth = require(__dirname + '/..')('username123', 'password456')

http.createServer(function (req, res) {
  basic_auth(req, res, function() {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Your username & password were correct\n')
  })
}).listen(31337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:31337/')
