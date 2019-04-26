$('.menu-button').on('click', function(){
  $('.menu').toggleClass('menu_active');
});
$('.hero-arrow__img').on('click', function(){
  $('.catalog-card__off').toggleClass('catalog-card__on');
});
$('.hero-arrow__img').on('click', function(){
  $('.hero-arrow').toggleClass('hero-arrow__on');
});
$('.service__button').on('click', function(){
  $('.catalog-card__off').toggleClass('catalog-card__on');
});
$('.service__button').on('click', function(){
  $('.hero-arrow').toggleClass('hero-arrow__on');
});
$('[type="tel"]').mask("+7 (999) 999-99-99");

/* Maps*/
var about = $('.about');
var aboutTop = about.offset().top;
$(window).bind('scroll', function(){
  var windowTop = $(this).scrollTop();
  if (windowTop > aboutTop) {
    $('#map').html('<script type="text/javascript" charset="utf-8" async  src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acec129fcbd89c1f34ea9c8b4796058021e79139eb3168ac1e0934bdc760cf0c6&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>');
    $(window).unbind('scroll')
  }
});