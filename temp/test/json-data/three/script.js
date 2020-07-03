//$(document).ready(function () {

//1. setup variable
var api = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';
var apikey = 'api-key=05d001471f0d423d9b31aae6fdec9e86';

function updateChange() {
	var requestURL = api + apikey + document.getElementById('newInput').value;
	$.getJSON(requestURL, function(data){
	//	console.log(data);
		var output1 = '<ul>';
$.each(data.results, function(key, val) {
	output1 += '<li>'
	output1 +=  '<h2>'+ val.headline +'</h2>';
	output1 +=  '<a target="_blank" href="' + val.link.url + '">'+ val.link.url +'</a>';
	output1 += '</li>';
}); // $each()
	output1 += '</ul>';
$('#update').html(output1);
	});	
}

// 2. execute:
updateChange();
document.getElementById('newInput').addEventListener('change', function() {
	updateChange();
	console.log(document.getElementById('newInput').value); 	
}); // end of change event listener
	
//});