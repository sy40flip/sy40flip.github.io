var x = 150;

function setup() {
	createCanvas(600, 600);
	smooth();
	fill(255);
	noStroke();
	rectMode(CENTER);
};


function draw() {
	background(20);
	 if (keyIsPressed == true) { // If the key is pressed
		 ellipse(width/2, height/2, 100, 100);
	 }else{
	 	rect(width/2, height/2,  100, 100);
	 }	
};