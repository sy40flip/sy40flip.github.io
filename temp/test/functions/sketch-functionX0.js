var xPos = 0;
var yPos = 100;

function setup() {
  createCanvas(600, 400);
};

function draw() {
	background(0);
	stroke(0);
	fill(175);
	
	if (xPos > width) {
		xPos= 0;
	}
	xPos = xPos + 1;
	ellipse(xPos, yPos, 50, 50);

	
};