var x = 100;
var velocity = 2;

function setup() {
  createCanvas(400, 400);
  noStroke();
}
function draw() {
  background(50);
  fill(175);
  x += velocity;
  if ((x > 120) || (x < 80)) {
    velocity = velocity * -1;
  }
  ellipse(100,100, x, x);
}