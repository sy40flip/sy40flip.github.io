//$(document).ready(function () {		
	
function updateOutput() {
  var requestURL = 'http://api.open-notify.org/iss-now.json';
	  $.getJSON(requestURL, function(data){
	  console.log(data.iss_position.latitude);
	  var output1 = '<p>latitude value: <span>'+data.iss_position.latitude+'</span>° N</p><p>longitude value: <span>'+data.iss_position.longitude+'</span>° E</p>';
  $('#update').html(output1);
  });
}
setInterval(updateOutput, 500);

//});
