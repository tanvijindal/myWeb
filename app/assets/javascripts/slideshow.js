function next_slide() {
  var active = $('.slideshow .slides div.active');
  var active_pagination_tab = $('.slideshow .slide-pagination div.active');
  if (active.length == 0) active = $('.slideshow .slides div:last');
  if (active_pagination_tab.length == 0) active_pagination_tab = $('.slideshow .slide-pagination div:last');
  var next = active.next().length ? active.next() : $('.slideshow .slides div:first');
  var next_pagination_tab = active_pagination_tab.next().length ? active_pagination_tab.next() : $('.slideshow .slide-pagination div:first');
  active.addClass('last-active');
  next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
													  active.removeClass('active last-active');
													  });
  active_pagination_tab.removeClass('active');
  next_pagination_tab.css({opacity: 0.1}).addClass('active').animate({opacity: 1.0}, 1000);
  
  timeout_var = setTimeout(next_slide, 5000);
}

function manual_slide_nav(event) {
  clearTimeout(timeout_var);
  var i = event.data.val;
  var active = $('.slideshow .slides div.active');
  var active_pagination_tab = $('.slideshow .slide-pagination div.active');
  if (active.length == 0) active = $('.slideshow .slides div:last');
  if (active_pagination_tab.length == 0) active_pagination_tab = $('.slideshow .slide-pagination div:last');
  var next = $('.slideshow .slides').children('div').eq(i);
  var next_pagination_tab = $('.slideshow .slide-pagination').children('div').eq(i);
  
  next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
													  active.removeClass('active last-active');
													  });
  active_pagination_tab.removeClass('active');
  next_pagination_tab.css({opacity: 0.1}).addClass('active').animate({opacity: 1.0}, 1000);
  
  timeout_var = setTimeout(next_slide, 5000);
}

function right_arrow() {
  clearTimeout(timeout_var);
  var active = $('.slideshow .slides div.active');
  var active_pagination_tab = $('.slideshow .slide-pagination div.active');
  if (active.length == 0) active = $('.slideshow .slides div:last');
  if (active_pagination_tab.length == 0) active_pagination_tab = $('.slideshow .slide-pagination div:last');
  var next = active.next().length ? active.next() : $('.slideshow .slides div:first');
  var next_pagination_tab = active_pagination_tab.next().length ? active_pagination_tab.next() : $('.slideshow .slide-pagination div:first');
  active.addClass('last-active');
  next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
                            active.removeClass('active last-active');
                            });
  active_pagination_tab.removeClass('active');
  next_pagination_tab.css({opacity: 0.1}).addClass('active').animate({opacity: 1.0}, 1000);
  
  timeout_var = setTimeout(next_slide, 5000);
}

function left_arrow() {
  clearTimeout(timeout_var);
  console.log("left arrow clicked")
  var active = $('.slideshow .slides div.active');
  var active_pagination_tab = $('.slideshow .slide-pagination div.active');
  if (active.length == 0) active = $('.slideshow .slides div:last');
  if (active_pagination_tab.length == 0) active_pagination_tab = $('.slideshow .slide-pagination div:last');
  var previous = active.prev().length ? active.prev() : $('.slideshow .slides div:last');
  var previous_pagination_tab = active_pagination_tab.prev().length ? active_pagination_tab.prev() : $('.slideshow .slide-pagination div:last');
  active.addClass('last-active');
  previous.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
                            active.removeClass('active last-active');
                            });
  active_pagination_tab.removeClass('active');
  previous_pagination_tab.css({opacity: 0.1}).addClass('active').animate({opacity: 1.0}, 1000);
  
  timeout_var = setTimeout(next_slide, 5000);
}

$(function() {
  timeout_var = setTimeout(next_slide, 5000);
  tab_buttons =  $('.slideshow > .slide-pagination div');
  for (i=0; i<3; i++ )
  {
	 tab_buttons.eq(i).on('click', {val : i}, manual_slide_nav );
  }
  left_arrow_image = $('.arrow-left');
  right_arrow_image = $('.arrow-right');
  console.log(left_arrow_image);
  left_arrow_image.on('click', left_arrow);
  right_arrow_image.on('click', right_arrow);
  
  });