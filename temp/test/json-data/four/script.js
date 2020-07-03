// 1. setup variable
var api = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';
var apikey = 'api-key=05d001471f0d423d9b31aae6fdec9e86';

// 2A. setup updateChange function
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

// 2B. setup checkInput function
function checkInput() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");  // i means case insensitive // g means match all
	var requestURL = api + apikey + document.getElementById('newInput').value;
	$.getJSON(requestURL, function(data){
			var output1 = '<ul>';
			$.each(data.results, function(key, val) {
				if ((val.headline.search(myExp) != -1) || (val.display_title.search(myExp) != -1)){
	output1 += '<li>'
	output1 +=  '<h2>'+ val.headline +'</h2>';
	output1 +=  '<a target="_blank" href="' + val.link.url + '">'+ val.link.url +'</a>';
	output1 += '</li>';
				}
			}); // $each()
			output1 += '</ul>';
			$('#update').html(output1);
	});	
}

//3A. when page load 
$(document).ready(function () {		
	//document.getElementById('newInput').value = "&query=martin%20scorsese";
	updateChange();
	console.log(document.getElementById('newInput').value); 	
});

// 3B. listen to drop down menu ui
document.getElementById('newInput').addEventListener('change', function() {
	updateChange();
	console.log(document.getElementById('newInput').value); 	
}); // end of change event listener


// 3C. listen to search ui
$('#search').keyup(function() {
	checkInput();
	console.log(document.getElementById('newInput').value); 	

});
