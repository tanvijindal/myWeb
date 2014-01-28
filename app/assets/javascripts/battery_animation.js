function battery_animation() {
	var full = document.getElementById('full');
	full.style.display = "block";
	full.style.width = "0px";
	full.style.height = "10px";
	var animation = setInterval(function(){
    
    if(parseInt(full.style.width,10) == 1260)
        clearInterval(animation);
    full.style.width = parseInt(full.style.width,10)+10 +"px";
	},20);
	$(window).focus(function () {
        clearInterval(animation); // Clearing interval if for some reason it has not been cleared yet
    }).blur(function () {
        clearInterval(animation); // Clearing interval on window blur
    });

    //Animate the number of hours

    $({someValue: 0}).animate({someValue: 20}, {
      duration: 3000,
      easing:'swing', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#battery_hours').text(commaSeparateNumber(Math.round(this.someValue)));
      }
  });

    timeout = setTimeout(battery_animation, 50000);
}

function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
}

$(document).ready(function() {
	var full = document.getElementById('full');
	var empty = document.getElementById('empty');
	full.style.display = "none";
  timeout = setTimeout(battery_animation, 10);
});