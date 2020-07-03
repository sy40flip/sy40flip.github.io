/**********************************************/
//1. load file
$.getJSON('dataFilms.json', function(data) {
console.log(data.pta);

//2. process data and store in variable
	var output1 = '<ul><h1>Paul Thomas Anderson</h1>';
	$.each(data.pta, function(key, val) {
	//	console.log(key+':'+val.Title);
	//	console.log( key + ": " + val.name );
		output1 += '<li>'
		output1 +=  '<h2>'+ val.Title +'</h2>';
		output1 +=  '<p>'+ val.Released +'</p>';
		output1 +=  '<a target="_blank" href="http://www.imdb.com/title/'+ val.imdbID +'"><img src=' + val.Poster + '/></a>';
		output1 += '</li>';
	}); // $each()
	output1 += '</ul>';
	
//3. render in html
	$('#update').html(output1);
	
	
//2. process data and store in variable
	var output2 =  '<ul><h1>Quentin Tarantino</h1>';
	$.each(data.qt, function(key, val) {
		output2 += '<li>'
		output2 +=  '<h2>'+ val.Title +'</h2>';
		output2 +=  '<p>'+ val.Released +'</p>';
		output2 +=  '<a target="_blank" href="http://www.imdb.com/title/'+ val.imdbID +'"><img src=' + val.Poster + '/></a>';
		//output +=  '<img src="images/'+ val.shortname +'_tn.jpg" />';
		output2 += '</li>'
		//$('#update2').css('margin-top', '50px');
	}); // $each()
	
	output2 += '</ul>'
	
//3. render in html
	$('#update2').html(output2);

}); // getJSON