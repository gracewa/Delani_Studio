$(document).ready(function(){
    $("#design").click(function(){
        $("#designIcon").toggle();
        $("#clickDesign").toggle();
    });
    $("#dev").click(function(){
        $("#devIcon").toggle();
        $("#clickDev").toggle();
    });
    $("#productManagement").click(function(){
        $("#productIcon").toggle();
        $("#clickProduct").toggle();
    });
});

$(document).ready(function(){
$("#work1").mouseover(function(){
    $("#hoverWork1").show();
}).mouseout(function(){
    $("#hoverWork1").hide();
});
$("#work2").mouseover(function(){
    $("#hoverWork2").show();
}).mouseout(function(){
    $("#hoverWork2").hide();
});
$("#work3").mouseover(function(){
    $("#hoverWork3").show();
}).mouseout(function(){
    $("#hoverWork3").hide();
});
$("#work4").mouseover(function(){
    $("#hoverWork4").show();
}).mouseout(function(){
    $("#hoverWork4").hide();
});
$("#work5").mouseover(function(){
    $("#hoverWork5").show();
}).mouseout(function(){
    $("#hoverWork5").hide();
});
$("#work6").mouseover(function(){
    $("#hoverWork6").show();
}).mouseout(function(){
    $("hoverWork6").hide();
});
$("#work7").mouseover(function(){
    $("#hoverWork7").show();
}).mouseout(function(){
    $("#hoverWork7").hide();
});
$("#work8").mouseover(function(){
    $("#hoverWork8").show();
}).mouseout(function(){
    $("#hoverWork8").hide();
});
});

$(document).ready(function(){
    $("form").submit(function(){
        var name = $("#userName").val();
        var email = $("#userEmail").val();
        var message = $("#yourMessage").val();
        $("#thankYou").text(name);

        $(".thankYou").show();

        event.preventDefault();

    });
});
