$(function() {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  var people = [
    {name: 'Casey', rate: 60},
    {name: 'Camille', rate: 80},
    {name: 'Gordon', rate: 75},
    {name: 'Nigel', rate: 120}
  ];


  // CHECKS EACH PERSON AND ADDS THOSE IN RANGE TO ARRAY
  var results = [];                                // Array for people in range
  people.forEach(function(person) {                // For each person
    if (person.rate >= 65 && person.rate <= 90) {  // Is rate in range
      results.push(person);                        // If yes add to array
    }
  });
//console.log(results[0].name);
	var msg ='';
	for (i=0; i<2; i++) {
		//$('#temp').html('<p>'+results[i].name+'</p>');
		msg += results[i].name + '<br />';
		console.log(results[i].name);
	}

	document.getElementById('temp').innerHTML = msg;
});




/*
results.each(function(index, val){
	$('#temp').html('<p>'+val.name+'</p>');
});
*/


/*
$('li').hide().each(function(index) {          // Hide list items
    $(this).delay(450 * index).fadeIn(1600);     // Then fade them in
});


var output='<p>';
$.each(data, function(index, val){
	output+= '<p>'+val.name+'</p>';
});
output+='</p>';
$('#temp').html(output);
*/

//  // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
//  var $tableBody = $('<tbody></tbody>');           // New table body
//  for (var i = 0; i < results.length; i++) {       // Loop through matches
//    var person = results[i];                       // Store current person
//    var $row = $('<tr></tr>');                     // Create a row for them
//    $row.append($('<td></td>').text(person.name)); // Add their name
//    $row.append($('<td></td>').text(person.rate)); // Add their rate
//    $tableBody.append( $row );                     // Add row to new content
//  }
//
//  $('thead').after($tableBody);                    // Add tbody after thead
