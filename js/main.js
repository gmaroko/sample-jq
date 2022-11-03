$(document).ready(function (){
    $(window).resize(function(){
        $("body").css("background-color", "red");
    });

    $("#btn-one").click(function (){
        alert("Doing something");
    });
    
    $("#p-one").click(function (){
        $(this).text("updated"); // css
    });

    $(".p-two").click(function (){
        alert("Doing something - p2");
    });

    $("#img").hover(function(){ // mouseenter, mouseleave
        $(this).mouseenter(function(){
            $("#img-span").show();
        })
        $(this).mouseleave(function(){
            $("#img-span").hide();
        })        
    });
});


