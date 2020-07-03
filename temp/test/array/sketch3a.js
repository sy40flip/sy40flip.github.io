// Using a for loop to initialize values.

var y = [];
var sizes = [];

function setup() {
  createCanvas(600, 400);
  stroke(255);
  strokeWeight(3);

// set the values
for (var i=0; i<20; i++) {
    y[i] = random(0, height);
  }

};

function draw() {
  background(71);

	// execute
  for (var i=0; i<20; i++) {
	  // x1, y1, x2, y2
    line(i*10, 0, i*10, y[i]);
  }



};