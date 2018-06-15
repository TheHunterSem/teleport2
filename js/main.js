jQuery(function($){
    $('.suggest-slider').owlCarousel({
        items: 1,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $('.burger-menu-btn').click(function(){
        $('.main-nav').toggleClass('main-nav--visible');
    });
    $('.top-header__call-btn, .grey-btn, .orange-btn').magnificPopup({
        type: 'inline'
    });

    var mediaNode = $('.video-bg__media');
    var mediaNodeBg = mediaNode.attr('data-bg');
    var mediaNodeVideo = mediaNode.find('iframe');
        setTimeout(function () {
        mediaNode.css({
            opacity: 1
        });
    }, 1000);

    mediaNode.css({
        'background-image': 'url(' + mediaNodeBg + ')'
    });

    if($( window ).width() > 1239 && mediaNodeVideo ) {
        setTimeout(function () {
            mediaNodeVideo.css({
                opacity: 1
            });
        }, 3000);
        setTimeout(function () {
            mediaNodeVideo.css({
                opacity: 0
            });
        }, 120000);
    }

});