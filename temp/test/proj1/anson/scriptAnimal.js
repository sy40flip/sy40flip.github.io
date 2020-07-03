function updateChange(){


$.getJSON('animaldata.json',function(data){
	//console.log(data.pta);
	var output = '<ul></h1>';
	$.each(data.pta, function (key, val){
		//console.log (key + ':' +val.name);
		output += '<li>';
		output += '<preview>'+'<img src=' + val.album_file + '></a>'+'</preview>';
		output += '<h2>'+"ID： " + val.animal_id+'</h2>';	
		output += '<h2>'+"種類： " + val.animal_kind+'</h2>';		
		output += '<h2>'+"性別： " + val.animal_sex+'</h2>';
		output += '<h2>'+"顏色： " + val.animal_colour+'</h2>';
		output += '<h2>'+"現位於： " + '<a href = "https://www.google.com.hk/maps/search/' + val.shelter_address + '"target="_blank">' + val.shelter_address +'</a>' + "(" + val.shelter_name +")"+ '</h2>';
		output += '<h2>'+"聯絡電話： " + val.shelter_tel+'</h2>';
		//val name.(The data name in JSON)
		//output += '<p>' + val.Release + '</p>';
		output += '<br/>';
		output += '</li>';
	});
	
	output += '</ul>';
	
	$('#update').html(output);
	
});
}

 
	function checkInput(){
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, 'i');
	// 'i' --> change to case-insensitive (Not care Upper or Lower-case)
	$.getJSON('animaldata.json',function(data){
		var output1 = '<ul>';
		$.each(data.pta, function (key, val){
			//if ((val.headline.search(searchField) != -1) || (val.display_title.search(searchField) != -1)){
				if ((val.shelter_name.search(myExp) != -1) || (val.animal_id.search(myExp) != -1) ||  (val.animal_colour.search(myExp) != -1) || (val.animal_sex.search(myExp) != -1)){
					output1 += '<li>';
					output1 += '<preview>'+'<img src=' + val.album_file + '></a>'+'</preview>';
					output1 += '<h2>'+"ID： " + val.animal_id+'</h2>';
					output1 += '<h2>'+"種類： " + val.animal_kind+'</h2>';
					output1 += '<h2>'+"性別： " + val.animal_sex+'</h2>';
					output1 += '<h2>'+"顏色： " + val.animal_colour+'</h2>';
					output1 += '<h2>'+"現位於： " + '<a href = "https://www.google.com.hk/maps/search/' + val.shelter_address + '"target="_blank">' + val.shelter_address +'</a>' + "(" + val.shelter_name +")"+ '</h2>';
					output1 += '<br/>';
					output1 += '</li>';
	}
	}); // $each()
	output1 += '<ul>';
	$('#update').html(output1);
		});
}

    function dropList(){
		var dropList = $('#newInput').val();
		var dropExp = new RegExp(dropList, 'i');
		$.getJSON('animaldata.json',function(data){
		var output2 = '<ul>';
		$.each(data.pta, function (key, val){
      	if ((val.animal_kind.search(dropExp) != -1)){
        	output2 += '<li>';
			output2 += '<preview>'+'<img src=' + val.album_file + '></a>'+'</preview>';
			output2 += '<h2>'+"ID： " + val.animal_id+'</h2>';
			output2 += '<h2>'+"種類： " + val.animal_kind+'</h2>';
			output2 += '<h2>'+"性別： " + val.animal_sex+'</h2>';
			output2 += '<h2>'+"顏色： " + val.animal_colour+'</h2>';
			output2 += '<h2>'+"現位於： " + '<a href = "https://www.google.com.hk/maps/search/' + val.shelter_address + '" target="_blank">' + val.shelter_address +'</a>' + "(" + val.shelter_name +")"+ '</h2>';
			output2 += '<br/>';
			output2 += '</li>';
		}
	  });
	  output2 += '<ul>';
      $('#update').html(output2);
    }); 
	}

	
//dropdown menu selected => load
$('#newInput').change(function(){
	dropList();
});
//initial load
updateChange();

//
$('#search').keyup(function(){
	console.log(document.getElementById('newInput').value);
	checkInput();
});


