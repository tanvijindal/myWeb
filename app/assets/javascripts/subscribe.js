$(function() {
  $('.subscribe_email_form')
  .bind("ajax:success", function(data, testStatus, xhr) {
    $('input[name="email"]').val("Thanks for subscribing");
    })
  .bind("ajax:beforeSend", function(evt, xhr, settings){
    var $submitButton = $('.subscribe_button');
    $submitButton.data( 'origText', $(this).text() );
    $submitButton.text( "Submitting..." );
    })
  .bind("ajax:complete", function(evt, xhr, status){
    var $submitButton = $('.subscribe_button');
    $submitButton.text( $(this).data('origText') );
    })
  .bind("ajax:error", function(evt, xhr, status, error){
    var $form = $(this),
    errors,
    errorText;
    try {
      errors = $.parseJSON(xhr.responseText);
    } catch(err) {
      errors = {message: "Please reload the page and try again"};
      }
    errorText = "There were errors with the submission: \n<ul>";
    for ( error in errors ) {
      errorText += "<li>" + error + ': ' + errors[error] + "</li> ";
    }
    errorText += "</ul>";
    alert(String(errorText));
    });
  });
