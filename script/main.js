$( document ).ready(function() {
    console.log( "Willkommen auf der Schuhmanufaktur Förmschön Website!" );
    console.log( "made by Nikolas Leander Schmidt" );
    if($('.hero-section-inner').length > 0) {
        heroResize();
    }

    AOS.init();
});

/* Menu Click Events */
$(".topbar-burger-container").click(function() {
    toggleMenu(this);
});
$(".main-menu a").click(function() {
    toggleMenu($(".topbar-burger-container"));
})

/* Hero-Section - Window-Resize Listener */
$( window ).resize(function() {
    if($('.hero-section-inner h3').length > 0) {
        heroResize();
    }
});

/* Jubilaeum-Slick-Slider */
if ($('.jubilaeum-section-slider').length > 0) {
    $('.jubilaeum-section-slider').slick({
        autoplay:true,
        speed: 500,
        autoplaySpeed:4000,
        arrows:true,
        prevArrow: $('.prev-slide'),
        nextArrow: $('.next-slide')
    });
}

/* Vote-Slick-Slider */
if ($('.vote-slider').length > 0) {
    $('.vote-slider').slick({
        autoplay:true,
        speed: 500,
        autoplaySpeed:4000,
        arrows:true,
        prevArrow: $('.prev-vote-slide'),
        nextArrow: $('.next-vote-slide')
      });
}

/* Parallax Lax Animation */


/* Menu Open-Close Function */
function toggleMenu(clickedElement) {
    $(clickedElement).toggleClass('cross');
    $('html').toggleClass('noscroll');
    $('.main-menu-container').toggleClass('main-menu-opened');

    if ($(clickedElement).hasClass("cross")) {
        $('.topbar-burger-typo').html("Zurück");
    } else {
        $('.topbar-burger-typo').html("Menü");
    }
}

/* Hero-Section Function for Position and Height of the Lines */
function heroResize() {
  var topH3 = $('.hero-section-inner h3').offset().top;
  var topLogo = $('.hero-section-inner .logo-icon').offset().top;
  var topH2 = $('.hero-section-inner h2').offset().top;

  $('.hero-second-line').css('top', (topH3 - $('.hero-section-inner h3').height));
  $('.hero-second-line').css('height', topLogo - topH3 - 80);

  $('.hero-third-line').css('top', topLogo + 130);
  $('.hero-third-line').css('height', topH2 - topLogo - 142);

  $('.hero-fourd-line').css('height', topLogo - topH3 - 80);
}


