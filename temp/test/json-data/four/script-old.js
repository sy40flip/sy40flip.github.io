// A. setup function
function checkInput() {
	
	var api = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';
	var apikey = 'api-key=05d001471f0d423d9b31aae6fdec9e86';
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");  // i means case insensitive // g means match all
	var requestURL = api + apikey + document.getElementById('newInput').value;
	
	$.getJSON(requestURL, function(data){
			var output1 = '<ul>';
	
			$.each(data.results, function(key, val) {
				if ((val.headline.search(myExp) != -1) || (val.display_title.search(myExp) != -1)){
					output1 += '<li>'
					output1 +=  '<h2>'+ val.headline +'</h2>';
					output1 +=  '<p><a target="_blank" href="' + val.link.url + '">'+ val.link.url +'</a></p>';
					output1 += '</li>';
				}
			}); // $each()
			output1 += '</ul>';
			$('#update').html(output1);
	
	});	

}


// B. display when keyup
$('#search').keyup(function() {
	checkInput();
		console.log(document.getElementById('newInput').value); 	

});

//C. init load scorsese
$(document).ready(function () {		
	document.getElementById('newInput').value = "&query=martin%20scorsese";
	checkInput();
		console.log(document.getElementById('newInput').value); 	

});

