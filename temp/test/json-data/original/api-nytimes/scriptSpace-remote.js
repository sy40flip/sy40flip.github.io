$(document).ready(function () {		
	
	function updateOutput() {
		var requestURL = 'http://api.open-notify.org/iss-now.json';
			$.getJSON(requestURL, function(data){
			console.log(data.iss_position.latitude);
			var output1 = '<p>'+data.iss_position.latitude+'</p><p>'+data.iss_position.longitude+'</p>';
		$('#update').html(output1);
		});
	}
	
	setInterval(updateOutput, 500);	
});
