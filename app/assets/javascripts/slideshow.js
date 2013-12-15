function next_slide() {
  var active = $('.slideshow .slides div.active');
  var active_pagination_tab = $('.slideshow .slide-pagination .pagination-tabs div.active');
  if (active.length == 0) active = $('.slideshow .slides div:last');
  if (active_pagination_tab.length == 0) active_pagination_tab = $('.slideshow .slide-pagination .pagination-tabs div:last');
  var next = active.next().length ? active.next() : $('.slideshow .slides div:first');
  var next_pagination_tab = active_pagination_tab.next().length ? active_pagination_tab.next() : $('.slideshow .slide-pagination .pagination-tabs div:first');
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
  var active_pagination_tab = $('.slideshow .slide-pagination .pagination-tabs div.active');
  if (active.length == 0) active = $('.slideshow .slides div:last');
  if (active_pagination_tab.length == 0) active_pagination_tab = $('.slideshow .slide-pagination .pagination-tabs div:last');
  var next = $('.slideshow .slides').children('div').eq(i);
  var next_pagination_tab = $('.slideshow .slide-pagination .pagination-tabs').children('div').eq(i);
  
  next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
													  active.removeClass('active last-active');
													  });
  active_pagination_tab.removeClass('active');
  next_pagination_tab.css({opacity: 0.1}).addClass('active').animate({opacity: 1.0}, 1000);
  
  timeout_var = setTimeout(next_slide, 5000);
}

$(function() {
  timeout_var = setTimeout(next_slide, 5000);
  tab_buttons =  $('.slideshow > .slide-pagination > .pagination-tabs div');
  for (i=0; i<3; i++ )
  {
	tab_buttons.eq(i).on('click', {val : i}, manual_slide_nav );
  }
  
  });