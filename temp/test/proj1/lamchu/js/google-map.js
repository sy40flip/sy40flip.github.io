//google map
function initMap(){
	//set map options
	var mapOptions = {
		center: new google.maps.LatLng(22.335007, 114.182228),
		zoom:16,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		//
		panControl:false,
		zoomControl:true,
		mapTypeControl:true,
		mapTypeControlOption:{
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.TOP_LEFT
		}
	}
	
	//draw the map
	var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
	var pinLocation = new google.maps.LatLng(22.335007, 114.182228);
	var marker =  new google.maps.Marker({
		position: pinLocation,
		map: venueMap,
	});
	
	
	
}

function loadScript(){
	var script = document.createElement('script');
	script.src = 'https://maps.googleapis.com/maps/api/js?&callback=initMap';
	document.body.appendChild(script);
}

window.onload = loadScript;