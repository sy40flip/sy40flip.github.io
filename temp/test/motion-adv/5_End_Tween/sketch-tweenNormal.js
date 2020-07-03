var stopX = 300;    
var x = 100;     
var speed = 5;      


function setup() {
  createCanvas(600, 400);
  noStroke();
  fill(255);
};

function draw() {
	background(100, 0, 255);
	ellipse(x, 100, 50, 50);
	
	// no easing
	if (x <=300 ) {
		x += speed;
	}
	console.log(x);
};