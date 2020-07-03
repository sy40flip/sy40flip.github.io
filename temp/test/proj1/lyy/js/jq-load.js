$.getJSON('data.json', function(data){
	var output = '<ul>';
	
	//first time define use =, add thing use +=
	$.each(data, function(key,val){
		output += '<li>';
		output += '<h4>' + val.title + '</h4>';
		output += '<p>'+ val.student + '</p>';
		output += '<p>'+ val.type + '</p>';
	output += '<img src="img/' + val.shortname + '.jpg"/>';
		output += '</li>';


	});
	output +='</ul>';
	$('#artwork').html(output);

	});


