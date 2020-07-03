/*var xoffset = 40;
var yoffset = 50;*/

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(50);
  stroke(255);
  strokeWeight(4);
  noFill();
  
  
  translate(140, 50);
  
  // draw a face!
  ellipse(40, 40, 40, 40);
  ellipse(140, 40, 40, 40);
  rect(40, 80, 100, 50);
  
}