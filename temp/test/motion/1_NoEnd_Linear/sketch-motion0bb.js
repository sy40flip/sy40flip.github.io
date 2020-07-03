var x = 0;
var velocity = 10;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noFill();
  stroke(255);
  strokeWeight(4);

  x = x + velocity;
  if (x > width) {
     x = 0;
  }
  
   ellipse(x,100,80, 80);
}
