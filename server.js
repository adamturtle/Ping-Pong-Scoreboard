var express = require('express')
  , port = process.env.PORT || 3000
  , app = express()
  , jade = require('jade')
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("view options", { layout: false });

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

server.listen(port);

// load route at root
app.get('/', function(req, res){
  res.render('home');
});

app.get('/ref', function(req, res) {
	res.render('ref');
});

io.sockets.on('connection', function (socket) {

  socket.on('update-player-1-score', function (data) {
    io.sockets.emit('change-player-1-score', data);
  });
  socket.on('update-player-2-score', function (data) {
    io.sockets.emit('change-player-2-score', data);
  });
  socket.on('update-service', function(data){
    io.sockets.emit('change-service', data);
  })

});