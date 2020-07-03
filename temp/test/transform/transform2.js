/*var xoffset = 40;
var yoffset = 50;*/

function setup() {
  createCanvas(400, 400);
  // clear noLoop();
}

function draw() {
  background(50);
  stroke(255);
  strokeWeight(4);
  noFill();
  
  
  translate(mouseX, mouseY);
  // draw a face!
  ellipse(40, 40, 40, 40);
  ellipse(140, 40, 40, 40);
  rect(40, 80, 100, 50);
  
  // this translate follow the previous translate origin
  translate (120, 120);
  // draw a face!
  ellipse(40, 40, 40, 40);
  ellipse(140, 40, 40, 40);
  rect(40, 80, 100, 50);
  
  // this translate follow the previous translate origin
  translate (-240, 0);
  // draw a face!
  ellipse(40, 40, 40, 40);
  ellipse(140, 40, 40, 40);
  rect(40, 80, 100, 50);
  
  // this translate follow the previous translate origin
  translate (120, 120);
  // draw a face!
  ellipse(40, 40, 40, 40);
  ellipse(140, 40, 40, 40);
  rect(40, 80, 100, 50);
  
}