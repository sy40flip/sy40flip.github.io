//// the barebone of jquery calling json
///*
//$.getJSON()('data.json', function(data) {
//	$each(data, function() {
//	});
//	$('#update').html(output);
//});
//*/
//
//$('#search').keyup(function() {
//	var searchField = $('#search').val();
//	var myExp = new RegExp(searchField, "i");  // i means case insensitive // g means match all
//    $.getJSON('data.json', function(data) {
//	  var output = '<ul class="searchresults">';
//	  $.each(data, function(key, val) {   // loop through json data
//		if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
//			  output += '<li>';
//			  output += '<h2>'+ val.name +'</h2>';
//			  output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
//			  output += '<p>'+ val.bio +'</p>';
//			  output += '</li>';
//			}
//	  });
//	  output += '</ul>';
//	  $('#update').html(output);
//  }); //get JSON
//});

// A. setup variable

// B. setup function
function checkInput(){
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");  // i means case insensitive // g means match all
    $.getJSON('data.json', function(data) {
	  var output = '<ul class="searchresults">';
	  $.each(data, function(key, val) {   // loop through json data
		if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
			  output += '<li>';
			  output += '<h2>'+ val.name +'</h2>';
			  output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
			  output += '<p>'+ val.bio +'</p>';
			  output += '</li>';
			}
	  });
	  output += '</ul>';
	  $('#update').html(output);
  }); //get JSON
};


// C. display when keyup
$('#search').keyup(function() {
	checkInput();
});