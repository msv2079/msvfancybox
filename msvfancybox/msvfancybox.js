$(function()
{
	$(".fancybox").click(function(e)
	{
		e.preventDefault();

		$("#ModalFancyBoxTitle").empty();
		$("#ModalFancyBoxTextLeft").empty();
		$("#ModalFancyBoxTextRight").empty();
		$("#ModalFancyBoxImage").attr("src", "");
		
		$("#ModalFancyBoxTitle").html($(this).data("title"));
		$("#ModalFancyBoxTextLeft").html($(this).data("textleft"));
		$("#ModalFancyBoxTextRight").html($(this).data("textright"));
		$("#ModalFancyBoxImage").attr("src", $("img", this).attr("src"));
					
		$("html").css("overflow", "hidden");
		$("#BGModalFancyBox").show();
		$("#ModalFancyBox").show();
								
		var widthLeft = ((($("img", this).prop('naturalWidth') + 40) / 2) * -1) + "px";	
		var offsetTop = $("#mainmenu").offset().top;
		var widthTop = "15%";
		console.log(offsetTop);
		
		if (offsetTop != 0)
		{
			widthTop = (offsetTop + 100) + "px";	
		}
		
		$("#ModalFancyBox").css("left", widthLeft);
		$("#ModalFancyBox").css("margin-top", widthTop);
		
	});
	
	$("#ModalFancyBoxClose").click(function(e)
	{
		e.preventDefault();
		
		$("html").css("overflow", "scroll");
		$("#BGModalFancyBox").hide();
		$("#ModalFancyBox").hide();
	});
});