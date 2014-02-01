var express = require('express')
  , port = 3000
  , app = express()
  , jade = require('jade')
  , jquery = require('jquery')
  , io = require('socket.io').listen(app.listen(port));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("view options", { layout: false });

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

// load route at root
app.get('/', function(req, res){
  res.render('home');
});

app.get('/ref', function(req, res) {
	res.render('ref');
});

io.sockets.on('connection', function (socket) {
    //socket.emit('message', { message: 'welcome to the chat' });
    console.log('connection established');
});