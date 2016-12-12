$(document).ready(function () {
	$(".tabs_b").eq(0).css("display", "block");
	$(".tabs_h").on("click", function(){
		var a = $(".tabs_h").index(this);
		console.log(a);
		$(".tabs_b").css("display", "none");
		$(".tabs_b").eq(a).css("display", "block");
		$(".tabs_h").css("background", "#0089ad");
		$(this).css("background", "#03a5d0");
	});
});