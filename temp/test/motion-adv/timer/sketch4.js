var timer = 2000;

function setup() {
	createCanvas(900,600);
	fill(0);
};

function draw() {
	background(125);
	if (millis()  > timer) {
		background(0);
	}
};