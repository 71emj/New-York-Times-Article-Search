var queryFromInput = 'Planet of the apes';



// if (!!(inputArea.val())) {
// 	param.begin_date = inputArea.val();	
// 	return;
// }

// TODO if statement for end date 

url += '?' + $.param(param);

$.ajax({
	url: url,
	method: 'GET',
}).done(function(result) {
	console.log(result);
	// $('body').append(JSON.stringify(result));
	var responsePath = result.response['docs'];
	console.log(responsePath[0]['headline']['main']);
	console.log(responsePath[0]['snippet']);
	console.log(responsePath[0]['web_url']);


	var headline = responsePath[0]['headline']['main'],
		snippet = responsePath[0]['snippet'],
		url = responsePath[0]['web_url'];

	var newDiv = $('<div>');

	newDiv
		.append(
			$('<h1>').text(headline)
		).append(
			$('<a>').attr({
				href: url,
			}).append(
				$('<p>').text(url)
			)).append(
				$('<p>').text(snippet)
			);

	$('body').prepend(newDiv);


	// console.log(result[0]['byline']);

}).fail(function(err) {
	throw err;
});





function temp() {
	var newDiv = $('<div>');
	newDiv
		.append($('<h1>').text())
		.append($('<a>').attr({
			src: 'someurl',
		}))
		.append($('<p>').text('sometext'));

}