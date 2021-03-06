$(function() {
	$(window).on('load', function() {
		$(".catalog-wrap").addClass("bounceIn");
	});
	$(window).scroll(function() {
		$(".about-wrap").each(function() {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 700) {
				$(this).addClass("shake");
			}
		});
	});
	$(window).scroll(function() {
		$(".button-price").each(function() {
			var elPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPos < topOfWindow + 900) {
				$(this).addClass("fadeInRight");
			}
		});
	});
});
$(".navbar-li li ul").hide();
$(".navbar-li li:has('.navbar-subli')").hover(
	function(){
		$(".navbar-li li ul").stop().fadeToggle(300);
	}
);
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
	$('.navbar__button, .button-contact').click( function(event){ // лoвим клик 
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('.okno') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('.okno__close, .overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('.okno')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('.overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
});
$('.menu-button').on('click', function(){
  $('.menu').toggleClass('menu_active');
});
$('.hero-arrow__img').on('click', function(){
  $('.catalog-card__off').toggleClass('catalog-card__on');
});
$('.hero-arrow__img').on('click', function(){
  $('.service-table').toggleClass('service-table__on');
});
$('.hero-arrow__img').on('click', function(){
  $('.hero-arrow').toggleClass('hero-arrow__on');
});
$('.service__button').on('click', function(){
  $('.service-table').toggleClass('service-table__on');
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


