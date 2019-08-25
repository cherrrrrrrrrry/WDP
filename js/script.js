//Плавные якоря меню
$(document).ready(function () {
	$("#menu, #down, #services-anchor, #contacts-anchor").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var	top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});


//Адаптивное меню
$(document).ready(function() {
	$('.menu-trigger').click(function() {
		$('nav ul').slideToggle(500);
	});

	$(window).resize(function() {
		if ($(window).width > 960 ) {
			$('nav ul').removeAttr('style');
		}
	});
});


//Кнопка "Back to Top"
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 2000);
	});
});


//Настройка Slick (Portfolio) - Desktop Version
$('.works-slider-d').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	dots: true,
  	arrows: false,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 2000
});


//Настройка Slick (Portfolio) - Mobile Version
$('.works-slider-m').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	dots: true,
  	arrows: false,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000
});


//Настройка Slick (Prices) - Desktop Version
$('.prices-slider-m').slick({
	infinite: true,
	slidesToScroll: 1,
	slidesToShow: 1,
	draggable: false,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000
});


//Настройка Slick (Team) - Desktop Version
$('.team-slider-d').slick({
	infinite: true,
	slidesToScroll: 3,
	slidesToShow: 3,
	draggable: false,
	dots: true,
	arrows: false
});


//Настройка Slick (Team) - Mobile Version
$('.team-slider-m').slick({
	infinite: true,
	slidesToScroll: 1,
	slidesToShow: 1,
	draggable: false,
	arrows: false,
	dots: true,
	autoplay: true
});


//Настройка Slick (Blog) - Mobile Version
$('.blog-slider-m').slick({
	infinite: true,
	slidesToScroll: 1,
	slidesToShow: 1,
	draggable: false,
	arrows: false,
	dots: true
});


//Анимация при scroll
$(document).ready(function () {
	var h = $(window).height();
	$(window).scroll(function () {
		if (($(this).scrollTop() + h) >= $("#toTop").offset().top) {
			$("#toTop").addClass('animated fadeInUp');
		}
		if (($(this).scrollTop() + h) >= $(".about").offset().top) {
			$(".about h2").addClass('animated zoomIn fast');
			$(".about hr").addClass('animated fadeInLeft slow');
			$(".about .item").eq(0).addClass('animated fadeInLeft slow');
			$(".about .item").eq(1).addClass('animated fadeIn slow');
			$(".about .item").eq(2).addClass('animated fadeInRight slow');
		}
		if (($(this).scrollTop() + h) >= $(".services").offset().top) {
			$(".services h2").addClass('animated zoomIn fast');
			$(".services hr").addClass('animated fadeInLeft slow');
			$(".services .line").addClass('animated fadeInUp slow');
		}
		if (($(this).scrollTop() + h) >= $(".portfolio").offset().top) {
			$(".portfolio h2").addClass('animated zoomIn fast');
			$(".portfolio hr").addClass('animated fadeInLeft slower');
			$(".portfolio .line").addClass('animated fadeIn slower');
			$(".portfolio button").addClass('animated fadeIn slower');
		}
		if (($(this).scrollTop() + h) >= $(".prices").offset().top) {
			$(".prices h2").addClass('animated zoomIn fast');
			$(".prices hr").addClass('animated fadeInLeft slow');
			$(".prices .item").addClass('animated fadeIn slower');
		}
		if (($(this).scrollTop() + h) >= $(".team").offset().top) {
			$(".team h2").addClass('animated zoomIn fast');
			$(".team hr").addClass('animated fadeInLeft slow');
			$(".team .item").addClass('animated fadeIn slower');
		}
		if (($(this).scrollTop() + h) >= $(".blog").offset().top) {
			$(".blog h2").addClass('animated zoomIn fast');
			$(".blog hr").addClass('animated fadeInLeft slow');
			$(".blog .item").addClass('animated fadeIn slower');
		}
		if (($(this).scrollTop() + h) >= $(".contacts").offset().top) {
			$(".contacts h2").addClass('animated zoomIn fast');
			$(".contacts hr").addClass('animated fadeInLeft slow');
			$(".contacts .item").addClass('animated fadeInDown slow');
			$(".contacts form").addClass('animated fadeIn slower');
		}
	});
});