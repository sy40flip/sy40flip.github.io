///**********************************************/
////1. load file
//$.getJSON('data-nytimes.json', function(data) {
//	console.log(data.results);
//	var output1 = '<ul>';
//	$.each(data.results, function(key, val) {
////		console.log(key+':'+val.Title);
////		console.log( key + ": " + val.name );
//		output1 += '<li>'
//		output1 +=  '<h2>'+ val.headline +'</h2>';
//		output1 +=  '<p><a target="_blank" href="' + val.link.url + '">'+ val.link.url +'</a></p>';
////		output1 +=  '<a target="_blank" href="http://www.imdb.com/title/'+ val.imdbID +'"><img src=' + val.Poster + '/></a>';
//		output1 += '</li>';
//	}); // $each()
//		output1 += '</ul>';
//
//
//////3. render in html
//	$('#update').html(output1);
//
//
//
//}); // getJSON



$(document).ready(function () {
//	$('#rep-lookup').submit(function(e){
		//e.preventDefault();
		
//		var $results = $('#rep-lookup-results'),
//			zipcode = $('#txt-zip').val(),
//			apiKey = 'YOUR_KEY_HERE';
//			
		
		var requestURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=05d001471f0d423d9b31aae6fdec9e86&query=martin%20scorsese';
		$.getJSON(requestURL, function(data){
			console.log(data);
			var output1 = '<ul>';
	$.each(data.results, function(key, val) {
//		console.log(key+':'+val.Title);
//		console.log( key + ": " + val.name );
		output1 += '<li>'
		output1 +=  '<h2>'+ val.headline +'</h2>';
		output1 +=  '<p><a target="_blank" href="' + val.link.url + '">'+ val.link.url +'</a></p>';
//		output1 +=  '<a target="_blank" href="http://www.imdb.com/title/'+ val.imdbID +'"><img src=' + val.Poster + '/></a>';
		output1 += '</li>';
	}); // $each()
		output1 += '</ul>';


////3. render in html
	$('#update').html(output1);
		});
		
	
});
