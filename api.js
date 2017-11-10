var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var param = {
	'api-key': "231a3a80793d47a59c98d8c84561c875",
}

var headline, snippet, url, begin_date, end_date;


$('#submit').click(function(e) {
	e.preventDefault();

	var article = $('#resultArticles'), // append parsed
		searchInput = $('#searchTerm').val(),
		numOfSearch = $('#dropdownMenu1 :selected ').text(), // 
		beginYear = $('#beginYear').val(),
		endYear = $('#endYear').val();

	param.q = searchInput;

	if (!!beginYear) {
		beginYear.length <= 4 ? (beginYear += '0101') : beginYear;
		param.begin_date = beginYear;
	}

	if (!!endYear) {
		endYear.length <= 4 ? (endYear += '0101') : endYear;
		param.end_date = endYear;
	}

	url += "?" + $.param(param);
	console.log(url);

	$.ajax({
		url: url,
		method: "GET"
	}).done(function(result) {
		console.log(result);
		var defaultPath = result['response']['docs'];
		console.log(defaultPath);
		for (let i = 0; i < 10; i++) {
			console.log(i);
			console.log(defaultPath[i]['headline']['main']);
			article.append(
				$('<h1>').text(defaultPath[i]['headline']['main'])
			);
		}



	})


});