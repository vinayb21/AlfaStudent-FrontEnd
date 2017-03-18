var load = function() {

    if ($(window).width() >= 960) {
        $("#li1").addClass('col-md-push-3');
        $("#signinCart").addClass('col-md-push-4');
        $('#signin').addClass('col-md-push-6');
        $('#signin').css("margin-top","-40px");
        $("#category1").css("margin-left","60px");
        $("#category2").css("padding-left","50px");
        $("#myCarousel").css("height","300px");
        $("#category3").css("padding-left","50px");
        $("#category4").css("padding-left","50px");
        $("#category5").css("padding-left","50px");
        $("#category6").css("padding-left","50px");
        $("#category7").css("padding-left","50px");
    }

    else if($(window).width() >= 768){
        $('#div1').addClass('col-sm-12');
        $('#div1').css("padding-left","22px");
        $('#div2').addClass('navbar-left col-sm-pull-5');
        $('#signin').addClass('col-sm-2');
        $('#user').hide();
        $("#li1").addClass('col-sm-12');
        $("#signin").addClass('col-sm-2');
        $("#category1").css("margin-left","20px");
        $("#category2").css("padding-left","50px");
        $("#category3").css("padding-left","50px");
        $("#category4").css("padding-left","50px");
        $("#category5").css("padding-left","50px");
        $("#category6").css("padding-left","50px");
        $("#category7").css("padding-left","50px");   
    }

    else {
        $("#signinCart").css("padding-left","30px");
    }

    $('#cartBtn').click(function(){
        window.location.href='cart.html';
    });
    
    $('.myone').attr("id","one");

}

load();