
$(document).ready(function() {
    //---------------------------------
    // carousel
    //---------------------------------
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa fa-pause')) {
            $('#carouselButton').children('span').removeClass('fa-pause').addClass('fa-play');
            $('#mycarousel').carousel('pause');
        }
        else if($('#carouselButton').children('span').hasClass('fa fa-play')) {
            $('#carouselButton').children('span').removeClass('fa-play').addClass('fa-pause');
            $('#mycarousel').carousel('cycle');
        }
    });
    //---------------------------------
    //login modal
    //---------------------------------
    $('#loginBtn').click(function() {
        $('#loginModal').modal('toggle'); //show could be used as well -> ass says toggle 
    });
    $('#loginDismiss').click(function() {
        $('#loginModal').modal('toggle'); //hide could be used as well -> ass says toggle 
    });
    $('#loginCancel').click(function() {
        $('#loginModal').modal('toggle'); //hide could be used as well -> ass says toggle 
    });
    //---------------------------------
    // reserve modal
    //---------------------------------
    $('#bookBtn').click(function() {
        $('#bookModal').modal('toggle'); //show could be used as well -> ass says toggle 
    });
    $('#bookDismiss').click(function() {
        $('#bookModal').modal('toggle'); //hide could be used as well -> ass says toggle 
    });
    $('#bookCancel').click(function() {
        $('#bookModal').modal('toggle'); //hide could be used as well -> ass says toggle 
    });
})
