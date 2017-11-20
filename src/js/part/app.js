$(document).ready(function() {
    var mainSlider = new Swiper('.slider-inn', {
	    nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    	pagination: '.swiper-pagination',
    	spaceBetween: 10,
    	paginationClickable: true
	});


	$('.detal-list-one').on('click', function(event) {

		if ( $(this).hasClass('open') ) {
			$('.detal-list-one').removeClass('open');
			$(this).next('.detal-one').hide();
		} else {
			$('.detal-list-one').removeClass('open');
			$('.detal-one').hide();
			$(this).addClass('open');
			$(this).next('.detal-one').show();
			
			var goods = new Swiper('.detal-one-slider', {
				slidesPerView: 1,
		    	spaceBetween: 30,
		    	nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev'
			});
		}
	});

	$('.good-quant__minus').on('click', function(event) {
		var n = $(this).next('.good-quant__input').val();

		if ( n > 1 ) {
			n--;
			$(this).next('.good-quant__input').val(n);
		}
	});

	$('.good-quant__plus').on('click', function(event) {
		var n = $(this).prev('.good-quant__input').val();
		n++;
		$(this).prev('.good-quant__input').val(n);
	});

	$('.to-cart').on('click', function() {
		good = {
			id : $(this).data('id'),
			img: $(this).data('img'),
			title: $(this).data('title'),
			art: $(this).data('art')
		}
		
		$('.good-img img').attr('src', good.img);
		$('.good-title').text(good.title);
		$('.good-art').text(good.art);
	});

	$('.detal-photo').not('.disable').on('mouseenter', function() {
		var url = $(this).data('url');
		$(this).append('<img class="hover-img" src="'+ url +'">');
	});

	$('.detal-photo').on('mouseleave', function() {
		$('.hover-img').remove();
	});

	$('.detal-photo.disable').on('mouseenter', function() {
		$(this).append('<div class="tooltip">Нет фото</div>');
	});

	$('.detal-photo.disable').on('mouseleave', function() {
		$('.tooltip').remove();
	});

	$('.tab-menu-one').on('click', function() {
		var idx = $(this).index();
		$('.tab-menu-one').removeClass('active');
		$(this).addClass('active');
		$('.tab-list-one').hide();
		$('.tab-list-one').eq(idx).show();
	});

	$('.garage-add').on('click', function() {
		$(this).hide().next('.garage-new').show();
	});

	$('input[type="checkbox"]').on('change', function() {
		$(this).next('.error').remove();
	});

	$(".detals").smoothDivScroll({
        mousewheelScrolling: false,
        manualContinuousScrolling: false,
        hotSpotScrolling: false,
        touchScrolling: true
    });

    $('.swiper-pagination').each(function() {
    	if ( $(this).find('.swiper-pagination-bullet ').length < 2 ) {
    		$(this).hide();
    	}
    });

    $('.detal-one__video').each(function() {
    	var url = $(this).attr('href');
    	var id = url.split('=')[1];
    	var link = 'https://img.youtube.com/vi/'+id+'/default.jpg'
    	$(this).find('img').attr('src', link);
    });

    $('.detal-one__video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.detal-one-slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			/*titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}*/
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

});