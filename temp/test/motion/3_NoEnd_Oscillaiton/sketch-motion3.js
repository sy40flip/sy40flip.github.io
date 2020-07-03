var x = 0;
var velocity = 2;

function setup() {
  createCanvas(400, 400);
  noStroke();
}
function draw() {
  background(50);
  fill(175);
  x += velocity;
  if ((x > width) || (x < 0)) {
    velocity = velocity * -1;
  }
  ellipse(x,100,80,80);
}