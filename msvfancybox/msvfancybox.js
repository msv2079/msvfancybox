$(function ()
{
    $(".fancybox").click(function (e)
    {
        e.preventDefault();

        $("#ModalFancyBoxTitle").empty();
        $("#ModalFancyBoxTextLeft").empty();
        $("#ModalFancyBoxTextRight").empty();
        $("#ModalFancyBoxImage").attr("src", "");

        $("#ModalFancyBoxTitle").html($(this).data("title"));
        $("#ModalFancyBoxTextLeft").html($(this).data("textleft"));

        if ($(this).data("textright") == "" || $(this).data("textright") == undefined)
        {
            $("#ModalFancyBoxBodyLeft").css({"width": "100%", "border": "none"});
            $("#ModalFancyBoxBodyRight").remove();
        } else
        {
            $("#ModalFancyBoxTextRight").html($(this).data("textright"));
        }

        $("#ModalFancyBoxImage").attr("src", $("img", this).attr("src"));
        
        if ($(this).data("imageheight") != undefined && $(this).data("imageheight") != "")
        {
            $("#ModalFancyBoxImage").css("height", $(this).data("imageheight") + "px");
        }

        $("html").css("overflow", "hidden");

        var widthModal = $("img", this).prop('naturalWidth');

        if ($(this).data("width") != undefined && $(this).data("width") != "")
        {
            widthModal = $(this).data("width");
        }

        $("#ModalFancyBox").css("width", widthModal + "px");

        var widthLeft = (((widthModal + 40) / 2) * -1) + "px";
        console.log(widthLeft);
        var offsetTop = $("#mainmenu").offset().top;
        var widthTop = "15%";

        if (offsetTop != 0)
        {
            widthTop = (offsetTop + 50) + "px";
        }

        $("#ModalFancyBox").css(
                {
                    "left": widthLeft,
                    "margin-top": widthTop
                });
                
        $("#BGModalFancyBox").show();
        $("#ModalFancyBox").show();
    });

    $("#ModalFancyBoxClose").click(function (e)
    {
        e.preventDefault();

        $("html").css("overflow", "scroll");
        $("#BGModalFancyBox").hide();
        $("#ModalFancyBox").hide();
    });
});