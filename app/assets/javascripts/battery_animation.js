function battery_animation() {
  //Animate the number of hours

  $({someValue: 0}).animate({someValue: 20}, {
    duration: 3000,
    easing:'swing', // can be anything
    step: function() { // called on every step
      // Update the element's text with rounded-up value:
      $('#battery_hours').text(commaSeparateNumber(Math.round(this.someValue)));
    }
  });

    timeout = setTimeout(battery_animation, 6000);
}

function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
}

$(document).ready(function() {
  timeout = setTimeout(battery_animation, 10);
});