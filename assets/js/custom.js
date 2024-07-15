
$(document).ready(function () {

    // Mobile Menu js
    $(".all-p-humber").click(function () {
        $(this).toggleClass("open");
    });
    $(".mobile-menu-icon").click(function () {
        $('.neurodivergent-lower-nav > ul').slideToggle();
    });

    // HOME PAGE SLIDER 
    $('.nt-health-crisis-content').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        infinite: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

      // SIMILAR HERO SLIDER 
      $('.nt-similar-hero-slider').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        infinite: true,
      });


});





// mental health tab js
function mentalHealthTab(evt, tabId) {
    let i;
    let tabcontent;
    let tabBtn;

    // Get all elements with class="nt-mhu-right-text" and hide them
    tabcontent = document.getElementsByClassName('nt-mhu-right-text');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tab-btn" and remove the class "active"
    tabBtn = document.getElementsByClassName('tab-btn');
    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace("active", "");
    }


    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = 'block';
    evt.currentTarget.className += " active";
}

// use for remove tab anchor default behaviors
document.querySelectorAll('a.tab-btn').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
    })
});








