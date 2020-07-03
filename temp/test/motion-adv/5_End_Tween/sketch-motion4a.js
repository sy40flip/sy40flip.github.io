var stopX = 300;    // Final x-coordinate
var x = 150;     // Current x-coordinate
var speed = 0.1;      // range from 0 to 1


function setup() {
  createCanvas(600, 400);
  noStroke();
  fill(255);
};

function draw() {
	background(100, 0, 255);
	x += speed * (stopX-x)
	ellipse(x, 100, 50, 50);
	
};
