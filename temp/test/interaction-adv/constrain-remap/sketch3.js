function setup() {
	createCanvas(600, 400);
	background(125);
};

function draw() {
	var mx = constrain(mouseX, 200, 400);
	var my = constrain(mouseY, 100, 300);
	ellipse(mx, my, 50, 50);
};