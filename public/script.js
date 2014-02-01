$(document).ready(function() {
    var socket = io.connect('http://' + window.location.host);
    
    socket.on('change-home-team-score', function (data) {
        $('#home-team-score').html(data.score);
    });   
    socket.on('change-away-team-score', function (data) {
        $('#away-team-score').html(data.score);
    }); 

    socket.on('change-home-team-timeouts', function (data) {
        $('#home-team-timeouts').html(data.timeouts);
    });   
    socket.on('change-away-team-timeouts', function (data) {
        $('#away-team-timeouts').html(data.timeouts);
    }); 

    socket.on('change-quarter', function (data) {
        $('#quarter-number').html(data.value);
    }); 

    socket.on('change-down', function (data) {
        $('#down-counter').html(data.value);
    }); 

    socket.on('playclock-reset', function (data) {
        $('#playclock-timer').html(data.value);
    }); 
});