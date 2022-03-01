document.addEventListener('DOMContentLoaded',() => {
	const elementoCarousel= document.querySelectorAll('.carousel');
	M.Carousel.init(elementoCarousel, {
		duration:200,
		dist:-30,
		shift:-50,
		padding:-100,
		numVisible:3,
		indicators:true,
		noWrap:false
	});
});


jQuery(document).ready(function($){
    setTimeout(function(){
        $('.trans--grow').addClass('grow');
    }, 275);
});
