$(document).ready(function() {
	$('.button_ok').click(function() {
		$('.list__element').text($(".reminder_text").val()).append($(".reminder_time").val());
		var t= setTimeout(timer(), 4000);
	});

	function timer() {
		alert("Warning!!!");
	}
});
