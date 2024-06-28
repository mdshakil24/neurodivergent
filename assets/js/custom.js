
$(document).ready(function(){
  
    // Mobile Menu js
    $(".all-p-humber").click(function () {
        $(this).toggleClass("open");
    });
    $(".mobile-menu-icon").click(function () {
        $('.lv-header-nav-menu ul').slideToggle();
    });

    $('.health-crisis-slider-content').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ['<img src="assets/images/icons/arrow-left.png">',
                  '<img src="assets/images/icons/arrow-right.png">'],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 4
            }
        }
    });


});


