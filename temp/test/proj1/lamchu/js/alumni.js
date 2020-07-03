function updateChange(){
	$.getJSON('data.json', function(data){
		var output1 = '<ul>';
		$.each(data,function(key,val){
			output1 += '<li>';
			output1 += '<h3>' + '<b>' + val.year +" Graduates' Work" + '</b>' + '</h3>';
			output1 += '<h3>' + '<a target="_blank" href="http://heritage.lib.hkbu.edu.hk/view.php?id=' + val.id + '"><img src="img/' + val.id + '.png"/></a>' + '</h3>';
			output1 += '<h3>' + '<b>' + val.title + '</b>' + ' / ' + val.name + '</h3>';
			output1 += '<h3>' + val.plot + '</h3>';
			output1 += '</li>';
		
		}); // $each()
	output1+='</ul>';
	$('#update').html(output1);
});
}

function updateChange1(){
	var requestURL =  document.getElementById('newInput').value  ;
	$.getJSON(requestURL,function(data){
		var output2 = '<ul>';
		$.each(data,function(key,val){
			output2 += '<li>';
			output2 += '<h3>' + '<b>' + val.year +" Graduates' Work" + '</b>' + '</h3>';
			output2 += '<h3>' + '<a target="_blank" href="http://heritage.lib.hkbu.edu.hk/view.php?id=' + val.id + '"><img src="img/' + val.id + '.png"/></a>' + '</h3>';
			output2 += '<h3>' + '<b>' + val.title + '</b>' + ' / ' + val.name + '</h3>';
			output2 += '<h3>' + val.plot + '</h3>';
			output2 += '</li>';
		
		}); // $each()
	output2+='</ul>';
	$('#update').html(output2);
});
}

function checkInput(){
	var searchField = $('#search').val();
	var myExp = new  RegExp(searchField, 'i');
	
	$.getJSON('data.json', function(data){
		var output1 = '<ul>';
		$.each(data,function(key,val){
		if ((val.name.search(myExp) != -1) || (val.title.search(myExp) != -1) || (val.year.search(myExp) != -1)){  //not equal to -1
			output1 += '<li>';
			output1 += '<h3>' + '<b>' + val.year +" Graduates' Work" + '</b>' + '</h3>';
			output1 += '<h3>' + '<a target="_blank" href="http://heritage.lib.hkbu.edu.hk/view.php?id=' + val.id + '"><img src="img/' + val.id + '.png"/></a>' + '</h3>';
			output1 += '<h3>' + '<b>' + val.title + '</b>' + ' / ' + val.name + '</h3>';
			output1 += '<h3>' + val.plot + '</h3>';
			output1 += '</li>';
		}
	}); // $each()
	output1+='</ul>';
	$('#update').html(output1);
		
			
			
		}); //get JSON
} // function checkInput()


//drop down menu selected - >load
$('#newInput').change(function(){
	updateChange1();

});


// initial load
$(document).ready(function(){
updateChange();
});


//
$('#search').keyup(function(){
	console.log(document.getElementById('container').value);
	checkInput();
	
	
});