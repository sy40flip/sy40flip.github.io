var x =0;
var targetX = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
};

function draw() {
	background(125);
	line(x, 0, x, height);
	
	var easing = 0.2;
	var diff = targetX - x;
	
	x += easing *diff ;
};

function keyPressed() {
	if (key == '1') {
	    targetX = 250;
	} else if (key == '2') {
		  targetX = 550; 
	  } else if (key == '3') {
		  targetX = 850; 
  	}
}