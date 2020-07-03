function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(0);
};

function draw() {
	background(150);
	  if (mouseIsPressed == true) {
		    fill(255); // White
	  } else {
		    fill(0); // Black
	  }
	  rectMode(CENTER);
	rect(width/2,height/2,300,300);
	
};

