$(document).ready(function () {
	$('.toggle').click(function() {
		$(this).toggleClass("on");
	   $('.navigation').animate({width: 'toggle'});
	});
});
