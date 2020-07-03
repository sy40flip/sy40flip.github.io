function setup() {
  createCanvas(400, 400);
  frameRate(10);
}
function draw() {
  background(50);
  noFill();
  stroke(255);
  strokeWeight(4);
  // loop animation
  ellipse(200, 200, (frameCount % 300), 300);
  console.log(frameCount % 300);
}