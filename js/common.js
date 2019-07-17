$(document).ready(function() {
	$(".hamburger").click(function(event) {
		$(this).toggleClass("is-active");
		$(".navtabs").toggleClass("active");
		$(".serachbar_wrap").toggleClass("active");
	});
	$(".owl-carousel1").owlCarousel({
		items: 1,
		autoWidth: false,
		nav: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
	});
	$(".op_owl").owlCarousel({
		items: 1,
		autoWidth: false,
		nav: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
	});
	$(function() {
	  $('.email').selectric();
	});
	$(document).on('click', 'a[href^="#"]', function(e) {
	    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;

	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos});
	});
});