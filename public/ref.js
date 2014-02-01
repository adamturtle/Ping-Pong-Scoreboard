
$(document).ready(function() {
	var socket = io.connect('http://' + window.location.host);

	socket.emit('test');

	var $homeTeamScore = $('#home-team-score'),
		$homeTeamTimeouts = $('#home-team-timeouts'),
		$awayTeamScore = $('#away-team-score'),
		$awayTeamTimeouts = $('#away-team-timeouts');

	$homeTeamScore.change(function() {
		var score = $(this).val();
		socket.emit('update-home-team-score', { score: score });
	});

	$awayTeamScore.change(function() {
		var score = $(this).val();
		socket.emit('update-away-team-score', { score: score });
	});

	$('#home-field-goal').click(function() {
		$homeTeamScore.val(parseInt($homeTeamScore.val()) + 3);
		$homeTeamScore.trigger('change');
	});
	$('#home-touchdown').click(function() {
		$homeTeamScore.val(parseInt($homeTeamScore.val()) + 6);
		$homeTeamScore.trigger('change');
	});
	$('#home-pat').click(function() {
		$homeTeamScore.val(parseInt($homeTeamScore.val()) + 1);
		$homeTeamScore.trigger('change');
	});
	$('#home-reset').click(function() {
		$homeTeamScore.val(0);
		$homeTeamScore.trigger('change');
	});

	$('#away-field-goal').click(function() {
		$awayTeamScore.val(parseInt($awayTeamScore.val()) + 3);
		$awayTeamScore.trigger('change');
	});
	$('#away-touchdown').click(function() {
		$awayTeamScore.val(parseInt($awayTeamScore.val()) + 6);
		$awayTeamScore.trigger('change');
	});
	$('#away-pat').click(function() {
		$awayTeamScore.val(parseInt($awayTeamScore.val()) + 1);
		$awayTeamScore.trigger('change');
	});
	$('#away-reset').click(function() {
		$awayTeamScore.val(0);
		$awayTeamScore.trigger('change');
	});


	$homeTeamTimeouts.change(function() {
		socket.emit('update-home-team-timeouts', { timeouts: $(this).val() });
	});

	$awayTeamTimeouts.change(function() {
		socket.emit('update-away-team-timeouts', { timeouts: $(this).val() });
	});

	$homeTeamTimeouts.change(function() {
		socket.emit('update-home-team-timeouts', { timeouts: $(this).val() });
	});

	$('#quarter-counter').change(function() {
		socket.emit('update-quarter', { value: $(this).val() });
	});

	$('#down-counter').change(function() {
		socket.emit('update-down', { value: $(this).val() });
	});

	$('#playclock-reset').click(function() {
		var value = 20;
		socket.emit('reset-playclock', { value: value });
	});

});
