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
        //$('#playclock-timer').html(data.value);
        if (data.mode == 'play') {
            if (PlayClock.running) {
                PlayClock.pause();
            } else {
                PlayClock.start();    
            }
        } else if (data.mode == 'restart') {
            PlayClock.restart(data.value);
        }
    }); 

    var PlayClock = {
        totalSeconds: 20,
        running: false,

        start: function () {
            var self = this;
            this.running = true;

            this.interval = setInterval(function () {
                if (self.totalSeconds == 0) {
                    self.pause();
                    return false;
                }
                self.totalSeconds -= 1;
                //$("#min").text(Math.floor(self.totalSeconds / 60 % 60));
                $("#playclock-timer").text(parseInt(self.totalSeconds % 60));
            }, 1000);
        },

        pause: function () {
            this.running = false;
            clearInterval(this.interval);
            delete this.interval;
        },

        restart: function(value) {
            $("#playclock-timer").text(value);
            clearInterval(this.interval);
            delete this.interval;
            this.totalSeconds = value;
            this.start();
        },

        resume: function () {
            if (!this.interval) this.start();
        }
    };

    //
});