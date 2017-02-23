var test = require('tap').test
  , http = require('http')
  , request = require('request')
  , basic_auth = require(__dirname + '/..')('username123', 'password456')
  , i = 0

var server = http.createServer(function (req, res) {
  i++
  basic_auth(req, res, function() {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Your username & password were correct\n')
  })
  if (i === 4) server.close()
}).listen(31337, '127.0.0.1')

test("with authentication", function(t) {
  request("http://username123:password456@127.0.0.1:31337/", function(err, res) {
    if (err) throw err
    t.equals(res.statusCode, 200)
    t.end()
  })
})

test("with an incorrect username", function(t) {
  var start = +Date.now()
  request("http://hithere:password456@127.0.0.1:31337/", function(err, res) {
    if (err) throw err
    t.equals(res.statusCode, 401)
    t.ok(+Date.now() - start > 4500, "there is a delay before the response")
    t.end()
  })
})

test("with an incorrect password", function(t) {
  var start = +Date.now()
  request("http://username123:BLABLABLA@127.0.0.1:31337/", function(err, res) {
    if (err) throw err
    t.equals(res.statusCode, 401)
    t.ok(+Date.now() - start > 4500, "there is a delay before the response")
    t.end()
  })
})

test("without authentication", function(t) {
  request("http://127.0.0.1:31337/", function(err, res) {
    if (err) throw err
    t.equals(res.statusCode, 401)
    t.end()
  })
})

