$(document).ready(function() {
    var socket = io.connect('http://' + window.location.host);
    
    socket.on('change-home-team-score', function (data) {
        $('#home-team-score').html(data.score);
    });   
    socket.on('change-away-team-score', function (data) {
        $('#away-team-score').html(data.score);
    }); 

    socket.on('change-home-team-timeouts', function (data) {
        var value = $('#home-team-timeouts').html();
        if (data.direction == 'up') {
            value = parseInt(value) + 1;
        } else if (value != 1) {
            value = parseInt(value) - 1;
        }
        $('#home-team-timeouts').html(value);
    });   
    socket.on('change-away-team-timeouts', function (data) {
        var value = $('#away-team-timeouts').html();
        if (data.direction == 'up') {
            value = parseInt(value) + 1;
        } else if (value != 1) {
            value = parseInt(value) - 1;
        }
        $('#away-team-timeouts').html(value);
    }); 

    socket.on('change-quarter', function (data) {
        var value = $('#quarter-number').html();
        if (data.direction == 'up') {
            value = parseInt(value) + 1;
        } else if (value != 1) {
            value = parseInt(value) - 1;
        }
        $('#quarter-number').html(value);
    }); 

    socket.on('change-down', function (data) {
        if (typeof(data.value) !== 'undefined') {
            $('#down-counter').html(data.value);
            return true;   
        } else {
            var value = $('#down-counter').html();
            if (data.direction == 'up') {
                value = parseInt(value) + 1;
            } else if (value != 1) {
                value = parseInt(value) - 1;
            }
            $('#down-counter').html(value);    
        }
    }); 

    socket.on('playclock-reset', function (data) {
        $('#playclock-timer').html(data.value);
    }); 
});