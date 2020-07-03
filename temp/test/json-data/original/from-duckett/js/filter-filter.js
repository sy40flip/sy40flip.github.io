//1. array.filter(function);
//2. "return" the expression inside function

$(function() {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  var people = [
    {name: 'Casey', rate: 60},
    {name: 'Camille', rate: 80},
    {name: 'Gordon', rate: 75},
    {name: 'Nigel', rate: 120}
  ];

  // THE FUNCTION ACTS AS A FILTER
  function priceRange(person) {                        
    return (person.rate >= 65) && (person.rate <= 90); 
  };

  // FILTER THE PEOPLE ARRAY & ADD MATCHES TO THE RESULTS ARRAY
  var results = [];                              
  results = people.filter(priceRange);

  // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
  for (var i = 0; i < results.length; i++) {       
	  var person = results[i];                    
	  $('#abc').append($('<p></p>').text(person.name));
	  $('#abc').append($('<p></p>').text(person.rate));
	}
});