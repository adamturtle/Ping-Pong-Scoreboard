    window.onload = function() {
 
    var messages = [];
    var socket = io.connect('http://localhost:3000');
    var content = document.getElementById("content");
 
    socket.on('message', function (data) {
        console.log('message');   
    });
 
    //sendButton.onclick = function() {
    //    var text = field.value;
    //    socket.emit('send', { message: text });
    //};
 
}