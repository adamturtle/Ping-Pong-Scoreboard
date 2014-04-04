$(document).ready(function() {

    var socket = io.connect('http://' + window.location.host);

    socket.on('connection', function(){
       $('#player-1-score').html(data.score);
    })

    socket.on('change-player-1-score', function (data) {
        $('#player-1-score').html(data.score);
    });
    socket.on('change-player-2-score', function (data) {
        $('#player-2-score').html(data.score);
    });
    socket.on('change-service', function (data) {
        $('#player1 .serving, #player2 .serving').text('');
        $('#player' + data.player + ' .serving').text('Service');
    });

});