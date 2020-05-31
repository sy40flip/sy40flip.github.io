/**********************************************/
//1. load file
$.getJSON('data-nytimes.json', function(data) {
	console.log(data.results);
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



}); // getJSON