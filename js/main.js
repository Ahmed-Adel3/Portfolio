AOS.init({
	duration: 800,
	easing: 'slide'
});

$(document).ready(function($) {

	
   "use strict";
   $(window).stellar({
		responsive: false,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
    });

   $.Scrollax();
   
   var loader = function() {
	   setTimeout(function() { 
		   if($('#ftco-loader').length > 0) 
			   $('#ftco-loader').removeClass('show');
	   }, 1);
   };
   loader();
     initSwiper();
   var contentWayPoint = function() {
	   var i = 0;
	   $('.ftco-animate').waypoint( function( direction ) {
		   if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {				
			   i++;
			   $(this.element).addClass('item-animate');
			   setTimeout(function(){

				   $('body .ftco-animate.item-animate').each(function(k){
					   var el = $(this);
					   setTimeout( function () {
						   var effect = el.data('animate-effect');
						   if ( effect === 'fadeIn') {
							   el.addClass('fadeIn ftco-animated');
						   } else if ( effect === 'fadeInLeft') {
							   el.addClass('fadeInLeft ftco-animated');
						   } else if ( effect === 'fadeInRight') {
							   el.addClass('fadeInRight ftco-animated');
						   } else {
							   el.addClass('fadeInUp ftco-animated');
						   }
						   el.removeClass('item-animate');
					   },  k * 50, 'easeInOutExpo' );
				   });				
			   }, 100);				
		   }
	   } , { offset: '95%' } );
   };
   contentWayPoint();

 
});

function createElement(initObj) {
   var element = document.createElement(initObj.Tag);
   for (var prop in initObj) {
	   if (prop === "childNodes") {
		   initObj.childNodes.forEach(function (node) { element.appendChild(node); });
	   }
	   else if (prop === "attributes") {
		   initObj.attributes.forEach(function (attr) { element.setAttribute(attr.key, attr.value) });
	   }
	   else element[prop] = initObj[prop];
   }
   return element;
}

function initSwiper(){
   let mainContainer = document.getElementById("mainContainer");
   for (let i = 0; i < data.length; i++) {

   	let swiperWrap = createElement({ Tag: 'div', classList: 'swiper-wrapper',attributes:[{key:"data-scrollax",value:"properties: { translateY: '-80%'}"}], childNodes: [] });
   	data[i].images.forEach(a=>swiperWrap.appendChild(createElement({ Tag: 'div', classList:'swiper-slide', attributes:[{key:"style",value:"background-image: url(images/"+a+");"}]  })))
	   
   	let swiperPagination = createElement({ Tag: 'div', classList: 'swiper-pagination' });
   	let swiperBtnNext = createElement({ Tag: 'div', classList: 'swiper-button-next'});
   	let swiperBtnPrev = createElement({ Tag: 'div', classList: 'swiper-button-prev'});

   	let swiperContainer = createElement({ Tag: 'div', classList: "swiper-container "+((i%2 != 0)?"order-2":""), childNodes: [swiperWrap,swiperPagination,swiperBtnNext,swiperBtnPrev] });

    let headerLink = createElement({ Tag: 'a', href: data[i].link, innerHTML:data[i].header});
    let header = createElement({ Tag: 'h2', classList: 'heading', childNodes: [headerLink] });
	let description =  createElement({ Tag: 'p', innerHTML: data[i].description, attributes:[{key:"style",value:"font-size: 16px"}] ,childNodes: [header] });
	let projLink = createElement({Tag: 'p', childNodes: [createElement({ Tag: 'a', href: data[i].link, innerHTML:((data[i].link != "")?"View Live Project":"")})] })
	let textContainer = createElement({ Tag: 'div', classList: 'text', childNodes: [header,description,projLink] });

   	let mainDiv = createElement({ Tag: 'div', classList: 'block-3 d-md-flex ftco-animate',attributes:[{key:"data-scrollax-parent",value:"true"}], childNodes: [swiperContainer,textContainer] });	
       mainContainer.appendChild(mainDiv);
   }

   var swiper = new Swiper('.swiper-container', {
	   pagination: {
		 el: '.swiper-pagination',
	   },

	   autoplay: {
		   delay: 3500,
		   disableOnInteraction: true,
	   },
	   navigation: {
		 nextEl: '.swiper-button-next',
		 prevEl: '.swiper-button-prev',
	   },
	 });
}

