// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

$(document).ready(function() {
	//выбор активного пункта меню 
	$(window).scroll(function(){
	     var $sections = $('.track');
		$sections.each(function(i,el){
	        var top  = $(el).offset().top-100;
	        var bottom = top +$(el).height();
	        var scroll = $(window).scrollTop();
	        var id = $(el).attr('id');
	    	if( scroll > top && scroll < bottom){
	            $('a.active').removeClass('active');
				$('a[href="#'+id+'"]').addClass('active');

	        }
	    })
	 });


	//бургер
	$(".hamburger").click(function(event) {
		$(this).toggleClass("is-active");
		$(".navtabs").toggleClass("active");
		$(".serachbar_wrap").toggleClass("active");
	});

	//слайдер1
	$(".owl-carousel1").owlCarousel({
		items: 1,
		autoWidth: false,
		nav: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
	});
	//слайдер2
	$(".op_owl").owlCarousel({
		items: 1,
		autoWidth: false,
		nav: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
	});
	// ВЫПАДАЮЩИЙ СПИСОК В ФОРМЕ 
	$(function() {
	  $('.email').selectric();
	});


	//МЕДЛЕННЫЙ СКРОД К ЯКОРЮ 
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
