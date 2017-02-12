$(window).resize(function() {
  //resize just happened, pixels changed
    if ($(window).width() >= 960) {
                    $('#div1').addClass('col-md-2');
                    $('#div2').addClass('navbar-right');
                    $("#li1").addClass('col-md-push-2');
                    $('#signin').addClass('col-md-push-4');
                    $("#category1").css("margin-left","60px");
                    $("#category2").css("padding-left","50px");
                    
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
                }
                else
                {
                    ;
                }
});