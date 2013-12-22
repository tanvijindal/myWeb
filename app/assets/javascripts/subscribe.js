$(function() {
  $('.subscribe_email_form').on("ajax:success", function(data, testStatus, xhr) {
								$('input[name="email"]').val("Thanks for subscribing");
								});
  });