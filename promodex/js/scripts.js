$(document).ready(function() {
	if ( $(window).width() <= 550 ) {
		startSlider();
	}

	$(window).on('resize', function () {
		if ( $(window).width() <= 550 ) {
			startSlider();
		} else {
			$('#slider').trigger('destroy.owl.carousel');	
		}
	});
	
	function startSlider() {
		if ( $('#slider').hasClass('owl-loaded') ) {
			return;
		}
		$('#slider').owlCarousel({
		    loop:true,
		    margin:10,
		    dots: true,
		    nav: false,
		    responsiveClass:true,
		    responsive:{
	            0:{
	                items:1,
	            }
	        }
		});	
	}		
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdGlmICggJCh3aW5kb3cpLndpZHRoKCkgPD0gNTUwICkge1xyXG5cdFx0c3RhcnRTbGlkZXIoKTtcclxuXHR9XHJcblxyXG5cdCQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCAkKHdpbmRvdykud2lkdGgoKSA8PSA1NTAgKSB7XHJcblx0XHRcdHN0YXJ0U2xpZGVyKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcjc2xpZGVyJykudHJpZ2dlcignZGVzdHJveS5vd2wuY2Fyb3VzZWwnKTtcdFxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIHN0YXJ0U2xpZGVyKCkge1xyXG5cdFx0aWYgKCAkKCcjc2xpZGVyJykuaGFzQ2xhc3MoJ293bC1sb2FkZWQnKSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0JCgnI3NsaWRlcicpLm93bENhcm91c2VsKHtcclxuXHRcdCAgICBsb29wOnRydWUsXHJcblx0XHQgICAgbWFyZ2luOjEwLFxyXG5cdFx0ICAgIGRvdHM6IHRydWUsXHJcblx0XHQgICAgbmF2OiBmYWxzZSxcclxuXHRcdCAgICByZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuXHRcdCAgICByZXNwb25zaXZlOntcclxuXHQgICAgICAgICAgICAwOntcclxuXHQgICAgICAgICAgICAgICAgaXRlbXM6MSxcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0XHR9KTtcdFxyXG5cdH1cdFx0XHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0cy5qcyJ9
