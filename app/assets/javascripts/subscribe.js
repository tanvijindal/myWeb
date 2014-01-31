$(function() {
  $("#subscribe_email_form").on("ajax:success", function()
								{
								$('input[name="email"]').val("Thanks for subscribing");
								});
  $(".footer #subscribe_email_form").on("ajax:success", function()
								{
  								$('input[name="email"]').val("Thanks for subscribing");
								});
});
