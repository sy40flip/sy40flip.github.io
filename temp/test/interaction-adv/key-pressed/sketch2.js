var x = 150;

function setup() {
	createCanvas(600, 600);
	smooth();
	fill(255);
	noStroke();
};


function draw() {
	background(200);
	 if (keyIsPressed == true) { // If the key is pressed
		x= x+1;
	 }
	 ellipse(x, 150, 100, 100);
};