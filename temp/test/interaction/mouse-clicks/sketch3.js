var dragX, dragY, moveX, moveY;
/*var dragY;
var moveX;
var moveY;
*/
function setup() {
	createCanvas(windowWidth, windowHeight);
	smooth();
	noStroke();
	fill(255);

};

function draw() {
	background(125, 125, 10);
	fill(0);
	  ellipse(dragX, dragY, 100, 100); // Black circle
	  fill(153);
	  ellipse(moveX, moveY, 100, 100); // Gray circle
};

function mouseMoved() {
	moveX = mouseX;
	moveY = mouseY;
}

function mouseDragged() {
	dragX= mouseX;
	dragY = mouseY;
}
