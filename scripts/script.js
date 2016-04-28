var main = function() {
	//When form is submitted...

	//Select all form elements
	$('form').submit(function(event) {
		//Select form input
		var $input = $(event.target).find('input');

		//Get comment data
		var comment = $input.val();

		//Does the comment have text?
		if (comment != "") {
			//Create a new li element
			var html = $('<li>').text(comment);

			//Prepend comment to another element
			html.prependTo('#comments');

			//Clear input window
			$input.val('');
		}

		return false; //Don't do default browser behavior
	});
}

$(document).ready(main);
