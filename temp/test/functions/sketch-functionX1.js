var xPos = 0;
var yPos = 100;

function setup() {
  createCanvas(600, 400);
};

function draw() {
	background(0);
	stroke(0);
	fill(175);
	
	ellipse(xPos, yPos, 50, 50);
	rect (xPos, yPos+100, 50, 50);
	
	move();
};

function move(){
	if (xPos > width) {
		xPos = 0;
	}
	xPos += 1;
}