function vertical_slide_up() {
	console.log("pressed up");
	var current_section = $('.current_scrollable_section');
	var prev_section = current_section.prev();
	scrollTop = $(window).scrollTop();
	next_scroll_pos = prev_section.position().top;
	$('html, body').animate({scrollTop:next_scroll_pos},1000);
}

function vertical_slide_down() {
	console.log("pressed down");
	var current_section = $('.current_scrollable_section');
	var next_section = current_section.next();
	scrollTop = $(window).scrollTop();
	next_scroll_pos = next_section.position().top;
	$('html, body').animate({scrollTop:next_scroll_pos},1000);
}

$(document).ready(function() {
	var slideshow = $('.slideshow');
	slideshow.addClass('current_scrollable_section');

	// Hide up arrow
	if ($(window).scrollTop() <= $('.slideshow').height()) {
    	document.getElementById('up_arrow').style.display = "none"; 
    } else {
    	document.getElementById('up_arrow').style.display = ""; 
    }
	
	$(window).bind('scroll', function() {
		// For sliding between sections. 
		$('.slideshow').removeClass('current_scrollable_section');
        $('.scrollable_section').each(function() {
            var section = $(this);
            var position = $(window).scrollTop() - section.position().top;
            
            if (position >= 0 && position <section.height() ) {
                section.addClass('current_scrollable_section');
            } else {
                section.removeClass('current_scrollable_section');
            }

			// Hide up arrow
            if ($(window).scrollTop() <= $('.slideshow').height()) {
            	document.getElementById('up_arrow').style.display = "none"; 
            } else {
            	document.getElementById('up_arrow').style.display = ""; 
            }
        });        
		
    });

	up_arrow = $('#up_arrow');
	down_arrow = $('#down_arrow');
	up_arrow.on('click', vertical_slide_up);
	down_arrow.on('click', vertical_slide_down);
});