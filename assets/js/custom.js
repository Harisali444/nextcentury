$(document).ready(function() {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function() {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
    });

    $('.loginUp').click(function() {
        $('.LoginPopup').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.signUp').click(function() {
        $('.signUpPop').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.closePop,.overlay').click(function() {
        $('.popupMain').fadeOut();
        $('.overlay').fadeOut();
    });

});


// Fancy Media
$('.fancybox-media').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    helpers: {
        media: {}
    }
});


// Slider For
$('.product-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '.product-main-slider-nav'
});
$('.product-main-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-main-slider',
    arrows: false,
    dots: false,
    focusOnSelect: true,
});


// Accordion
$('.myaccordi>li').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});
//  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion


// Sticky Navigation
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});


// Normal Slider
$('.provide-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.product-slider').slick({
    dots: false,
    infinite: true,
    loop: true,
    arrows: false,
    speed: 300,
    cssEase: 'ease-in-out',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.blog-slider').slick({
    dots: false,
    infinite: true,
    loop: true,
    arrows: true,
    speed: 300,
    cssEase: 'ease-in-out',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.testimonials-slider').slick({
    dots: true,
    infinite: true,
    loop: true,
    centerMode: true,
    arrows: false,
    speed: 300,
    cssEase: 'ease-in-out',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.car-reviews').slick({
    dots: true,
    infinite: true,
    loop: true,
    arrows: false,
    speed: 300,
    cssEase: 'ease-in-out',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


// Navigation Menu 
$(window).on('load', function() {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function() {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            console.log(hrefVal , this)
            $(this).removeClass('active');
            $(this).closest('li').addClass('active')
            $('ul.menu li.first').removeClass('active');
        }
    });

});


window.onload = function(){
    document.getElementById('first-btn-portfolio').click();
}

// Tabbing JS

$('[data-targetit]').on('click', function(e) {
    $(this).addClass('current');
    $(this).siblings().removeClass('current');
    var target = $(this).data('targetit');
    $('.' + target).siblings('[class^="porfolio-"]').hide();
    $('.' + target).fadeIn();
    $(".product-slider").slick("setPosition");
});

/* RESPONSIVE JS */
if ($(window).width() < 825) {}


/********topTopButton************/
var btn = $('#topTopButton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0
      }, 1500);
});



$(document).ready(function(){
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '2',
        // loop: true,
        // coverflowEffect: {
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows : true,
        // },
        
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 6,
            slideShadows : false,
          },
          
      });
      
      
    var galleryTop = new Swiper('.swiper-container.testimonial', {
        speed: 400,
        spaceBetween: 50,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // loop: true,
        direction: 'vertical',
        pagination: {
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        },
        thumbs: {
            swiper: galleryThumbs
          }
      });
        
});