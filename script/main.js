$( document ).ready(function() {
    console.log( "ready!" );
});

$(".topbar-burger-container").click(function() {
    console.log( "menu" );
    $(this).toggleClass('cross');
    $('html').toggleClass('noscroll');
    $('.main-menu-container').toggleClass('main-menu-opened');

    if ($(this).hasClass("cross")) {
        $('.topbar-burger-typo').html("Zurück");
      } else {
        $('.topbar-burger-typo').html("Menü");
      }
});