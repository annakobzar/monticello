'use strict';

function initMap() {
	let map, coords, styles, marker, info, content;

	coords = {
		lat: 40.67448242060088, 
		lng: -73.94315566377654
	}

	styles = [
		{
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#f5f5f5"
			}
		  ]
		},
		{
		  "elementType": "labels.icon",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#616161"
			}
		  ]
		},
		{
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#f5f5f5"
			}
		  ]
		},
		{
		  "featureType": "administrative.land_parcel",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#bdbdbd"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#eeeeee"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#e5e5e5"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#ffffff"
			}
		  ]
		},
		{
		  "featureType": "road.arterial",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#dadada"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#616161"
			}
		  ]
		},
		{
		  "featureType": "road.local",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		},
		{
		  "featureType": "transit.line",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#e5e5e5"
			}
		  ]
		},
		{
		  "featureType": "transit.station",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#eeeeee"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#c9c9c9"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		}
	  ]

	map = new google.maps.Map(document.getElementById("map"), {
		center: coords,
		zoom: 15,
		styles: styles,
		disableDefaultUI: true,
		zoomControl: true,
		streetViewControl: true,
		mapTypeControl: true,
    	mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: ["roadmap", "satellite"],
		},
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM,
		},
	});

	marker = new google.maps.Marker({
		position: coords,
		map: map,
		title: "Right position",
		// анимация
		animation: google.maps.Animation.DROP,
		// вставить свой маркер
		icon: 'images/marker.png',
	  });

	content = `<h1 class="map__title">Hey! We are here!</h1>
				<p class="map__text">Please, welcome.</p>
				`;

	info = new google.maps.InfoWindow({
		content: content,
	  });

	marker.addListener("click", () => {
		info.open(map, marker);
	 });
}

(function($){
	$(document).ready(function() {
		// Fancybox
		$('.photo').fancybox({
			// добавить кнопочки к галлерее
			buttons: [
				"fullScreen",
				"download",
				"thumbs",
				"close"
			  ],
			// эффекты "разворачивания" картинки
			// animationEffect: 'fade',
			animationEffect: 'zoom',
			animationDuration: 800, //задержка эффекта
			// эффект для перелистывания
			transitionEffect: 'slide',
			transitionDuration: 800,
			loop: true,

		});

		// Slick Slaider
		$('.slider').slick({
			dots: true,
			arrows: true,
			prevArrow: '<div class="slider__prev"> < </div>',
			nextArrow: '<div class="slider__next"> > </div>',
			appendArrows: $('.slider__arrows'),
			appendDots: $('.slider__dots'),
			slidesToShow: 3,
			slidesToScroll: 2,
			// infinite: false,
			speed: 4000,
			// centerMode: true,
			// initialSlide: 4,
			autoplay: true,
			// autoplaySpeed: 500,
			// pauseOnHover: false,
			// fade: true,
			// swipe: false,
			responsive: [
			  {
				breakpoint: 560,
				settings: {
				  slidesToShow: 1,
				  dots: false,
				  speed: 500,
				  swipe: true
				}
			  }
			]
		  });

		// Fixed Menu
				
		let sections = {
			header: $('#header').offset().top,
			about: $('#about').offset().top,
			news: $('#news').offset().top,
			works: $('#works').offset().top,
			footer: $('#footer').offset().top
		};
		console.log(sections);

		$(window).scroll(() => {
			let scrTop = $(document).scrollTop() + ($(window).height() / 3),
				position = '';

				console.log(scrTop);

			if (scrTop < sections.about) {
				position = 'header';
			} else if (scrTop >= sections.about && scrTop < sections.news) {
				position = 'about';
			} else if (scrTop >= sections.news && scrTop < sections.works) {
				position = 'news';
			} else if (scrTop >= sections.works && scrTop < sections.footer) {
				position = 'works';
			} else {
				position = 'footer';
			}

			$('.fixedMenu__link').removeClass('fixedMenu__active');

			$('.fixedMenu').find(`[href="#${position}"]`).addClass('fixedMenu__active');
			
		});
		
	});
})(jQuery);
