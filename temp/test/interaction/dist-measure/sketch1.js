function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
};

function draw() {
	background(0, 150, 255);
	  fill(255);
	  // ellipseMode(CORNER);
	  ellipse(width/2, height/2, 200, 200);

	  var d = dist(width/2, height/2, mouseX, mouseY);

	   if (d < 125) {
	  // if (d < 75) {
	  //if (d < 100) {
	   fill(0);
	  } else {
	   fill(200);
	  }

	  ellipse(mouseX, mouseY, 50, 50);
};


