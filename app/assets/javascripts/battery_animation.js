function battery_animation() {
	var full = document.getElementById('full');
	full.style.display = "block";
	full.style.width = "0px";
	full.style.height = "46px";
	var animation = setInterval(function(){
    
    if(parseInt(full.style.width,10) == 90)
        clearInterval(animation);
    full.style.width = parseInt(full.style.width,10)+2 +"px";
	},30);
	$(window).focus(function () {
        clearInterval(animation); // Clearing interval if for some reason it has not been cleared yet
    }).blur(function () {
        clearInterval(animation); // Clearing interval on window blur
    });
    timeout = setTimeout(battery_animation, 5000);
}

$(document).ready(function() {
	var full = document.getElementById('full');
	var empty = document.getElementById('empty');
	full.style.display = "none";
  	timeout = setTimeout(battery_animation, 5000);
});