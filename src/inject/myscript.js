$(document).ready(function(){
	var icon = $(".T-I.J-J5-Ji.nu.T-I-ax7.L3");
	var btn = $('<button type="button">Click Me!</button>');
	btn.attr("data-tooltip", "my tooltip");
	btn.on("click", function() {
		alert('test');
	});
	icon.before(btn);
});
