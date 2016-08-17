$(function() {
	$(document).foundation();


	// Smooth scrolling to element IDs
	$('.next-section a[href^=#]:not([href=#])').on('click', function () {
		var element = $($(this).attr('href'));
		$('html,body').animate({ scrollTop: element.offset().top },'slow', 'swing'); 
		return false;
	});

	$('input, textarea').placeholder(); 

	$(".menu").click(function(mobileOpen) {
        mobileOpen.preventDefault();
        $("nav").toggleClass("open");
    });


});



