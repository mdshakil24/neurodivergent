
$(document).ready(function(){
  
    // Mobile Menu js
    $(".all-p-humber").click(function () {
        $(this).toggleClass("open");
    });
    $(".mobile-menu-icon").click(function () {
        $('.lv-header-nav-menu ul').slideToggle();
    });

    $('.nt-health-crisis-content').owlCarousel({
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




function mentalHealthTab(evt,tabId) {
    let i;
    let tabcontent;
    let tabBtn;

     // Get all elements with class="nt-mhu-right-text" and hide them
     tabcontent = document.getElementsByClassName('nt-mhu-right-text');
     for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
     }

    // Get all elements with class="tab-btn" and remove the class "active"
     tabBtn = document.getElementsByClassName('tab-btn');
     for(i =0; i < tabBtn.length; i ++) {
        tabBtn[i].className = tabBtn[i].className.replace("active","");
     }


    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = 'block';
    evt.currentTarget.className += " active";


}

// mentalHealthTab()