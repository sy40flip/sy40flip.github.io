var timer = 1000;
var bgColor = 0;
var nextTime = 500;

function setup() {
	createCanvas(900,600);
	fill(0);
};

function draw() {
	background(bgColor);
	if (millis()  > nextTime) {
		bgColor += 20;
		// update nextTime, so it waits another 1000 miniseconds to run this if statement
		nextTime = millis() + timer;
	}
	console.log(nextTime);
};