// Using a for loop to initialize values.

var sizes = [];

function setup() {

  createCanvas(600, 400);
  noStroke();
  fill(255);


};

function draw() {
  
  for (var i=0; i<3; i++) {
    sizes[i] = random(10, 200);
  }
  
  background(71);

  ellipse(100, 100, sizes[0], sizes[0]);
  ellipse(300, 100, sizes[1], sizes[1]);
  ellipse(500, 100, sizes[2], sizes[2]);



};