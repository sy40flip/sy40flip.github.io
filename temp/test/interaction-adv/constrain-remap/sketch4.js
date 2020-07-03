function setup() {
	createCanvas(600, 400);
	strokeWeight(8);
	background(125);
};

function draw() {
	var length = map(mouseX, 0, width, 10, 600);
	line(0, 50,length,50);
};