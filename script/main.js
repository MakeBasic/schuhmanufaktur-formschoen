$( document ).ready(function() {
    console.log( "ready!" );
    heroResize();
});

$(".topbar-burger-container").click(function() {
    closeMenu(this);
});


$(".main-menu a").click(function() {
    closeMenu($(".topbar-burger-container"));
})

$( window ).resize(function() {
    if($('.hero-section-inner') !== null) {
      console.log( "ready!!!!" );
        heroResize();
    }
});

$('.jubilaeum-section-slider').slick({
    autoplay:true,
    speed: 500,
    autoplaySpeed:4000,
    arrows:true,
    prevArrow: $('.prev-slide'),
    nextArrow: $('.next-slide')
});

$('.vote-slider-container').slick({
  autoplay:true,
  speed: 500,
  autoplaySpeed:4000,
  arrows:true,
  prevArrow: $('.prev-vote-slide'),
  nextArrow: $('.next-vote-slide')
});


function closeMenu(el) {
  console.log( "menu" );
    $(el).toggleClass('cross');
    $('html').toggleClass('noscroll');
    $('.main-menu-container').toggleClass('main-menu-opened');

    if ($(el).hasClass("cross")) {
        $('.topbar-burger-typo').html("Zurück");
    } else {
        $('.topbar-burger-typo').html("Menü");
    }
}

function heroResize() {
  var topH3 = $('.hero-section-inner h3').offset().top;
  var topLogo = $('.hero-section-inner .logo-icon').offset().top;
  var topH2 = $('.hero-section-inner h2').offset().top;

  $('.hero-second-line').css('top', (topH3 - $('.hero-section-inner h3').height));
  $('.hero-second-line').css('height', topLogo - topH3 - 80);

  $('.hero-third-line').css('top', topLogo + 130);
  $('.hero-third-line').css('height', topH2 - topLogo - 130);

  $('.hero-fourd-line').css('top', (topH2 - $('.hero-section-inner h2').height) - 630);
  $('.hero-fourd-line').css('height', topLogo - topH3 - 80);
}


