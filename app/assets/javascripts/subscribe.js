$(function() {
  $('.subscribe_email_form')
  .bind("ajax:success", function(data, testStatus, xhr) {
								$('input[name="email"]').val("Thanks for subscribing");
								})
  .bind("ajax:beforeSend", function(evt, xhr, settings){
		var $submitButton = $('.subscribe_button');
		
		// Update the text of the submit button to let the user know stuff is happening.
		// But first, store the original text of the submit button, so it can be restored when the request is finished.
		$submitButton.data( 'origText', $(this).text() );
		$submitButton.text( "Submitting..." );
		})
  .bind("ajax:complete", function(evt, xhr, status){
		var $submitButton = $('.subscribe_button');
		
		// Restore the original submit button text
		$submitButton.text( $(this).data('origText') );
		})
  .bind("ajax:error", function(evt, xhr, status, error){
		var $form = $(this),
		errors,
		errorText;
		
		try {
        // Populate errorText with the comment errors
        errors = $.parseJSON(xhr.responseText);
		} catch(err) {
        // If the responseText is not valid JSON (like if a 500 exception was thrown), populate errors with a generic error message.
        errors = {message: "Please reload the page and try again"};
		}
		
		// Build an unordered list from the list of errors
		errorText = "There were errors with the submission: \n<ul>";
		
		for ( error in errors ) {
        errorText += "<li>" + error + ': ' + errors[error] + "</li> ";
		}
		
		errorText += "</ul>";
		
		// Insert error list into form
		alert(String(errorText));
		});
  });