//student profiles
$.getJSON('data17.json', function(data){
	//console.log(data);
	var output = '<ul>';
	$.each(data,function(key, val){
		//console.log(key+ ':' + val.language);
		output += '<li>';
		output += '<img src="img/' + val.shortname + '.gif"/>';
		output += '<h3>' +'<b>'+ val.title + '</b>' +' / '+ val.name +'</h3>';
		output += '<h3>' + val.plot +'</h3>';
		output += '<h3>' + 'Language/ ' + val.language +'</h3>';
		output += '</li>';
		
		
	});
	
	
	
	
	output +='</ul>';
	
	$('#event').html(output);
	
	
	
});