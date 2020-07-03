function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(200, 200, frameCount, frameCount);
}