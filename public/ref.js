
$(document).ready(function() {
	var socket = io.connect('http://' + window.location.host);

	socket.emit('test');

	var $player1Score = $('#player-1-score'),
		 $player2Score = $('#player-2-score'),
		 $points 		= $('#points'),
		 $service 		= $('#service');

	$player1Score.change(function() {
		var score = $(this).val();
		socket.emit('update-player-1-score', { score: score });
	});

	$player2Score.change(function() {
		var score = $(this).val();
		socket.emit('update-player-2-score', { score: score });
	});

	$points.change(function() {
		var points = $(this).val();
		var service;

		if( points % 5 == 0 ){
			if( $service.val() == 1 ){
				service = 2;
			} else {
				service = 1;
			}
			$service.val(service);

			socket.emit('update-service', { player: service })
		}
	});

	$('#player-1-score-up').click(function() {
		$player1Score.val(parseInt($player1Score.val()) + 1);
		$points.val(parseInt($points.val()) + 1);
		$player1Score.trigger('change');
		$points.trigger('change');
	});

	$('#player-1-score-down').click(function() {
		if( $player1Score.val() > 0 ){
			$player1Score.val(parseInt($player1Score.val()) - 1);
			$points.val(parseInt($points.val()) - 1);
			$player1Score.trigger('change');
			$points.trigger('change');
		}
	});

	$('#player-2-score-up').click(function() {
		$player2Score.val(parseInt($player2Score.val()) + 1);
		$points.val(parseInt($points.val()) + 1);
		$player2Score.trigger('change');
		$points.trigger('change');
	});

	$('#player-2-score-down').click(function() {
		if( $player2Score.val() > 0 ){
			$player2Score.val(parseInt($player2Score.val()) - 1);
			$points.val(parseInt($points.val()) - 1);
			$player2Score.trigger('change');
			$points.trigger('change');
		}
	});

	$('#reset').click(function() {
		$player1Score.val(0);
		$player2Score.val(0);
		$points.val(0);
		$player1Score.trigger('change');
		$player2Score.trigger('change');
		$points.trigger('change');
	});

});
