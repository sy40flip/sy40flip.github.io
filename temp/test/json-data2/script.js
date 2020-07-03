/********QT SET UNORDERED LIST**********/
//1. load file
$.getJSON('dataQT.json', function(data) {

//2. process data and store in variable
	var output = '<ul>';
	$.each(data, function(key, val) {
		output += '<li>'
		output +=  '<h2>'+ val.Title +'</h2>';
		output +=  '<p>'+ val.Released +'</p>';
		output +=  '<a target="_blank" href="http://www.imdb.com/title/'+ val.imdbID +'"><img src=' + val.Poster + '/></a>';
		output += '</li>'
	}); // $each()
	output += '</ul>'
	
//3. render in html
	$('#update').html(output);
}); // getJSON