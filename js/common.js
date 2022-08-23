$(function(){
	$(".nav ul li").hover(
		function(){
			$(this).addClass("cur");
			$(this).find("#subs").show();
			
			},function(){
			$(this).removeClass("cur");
			$(this).find("#subs").hide();
			
			}
	)
})