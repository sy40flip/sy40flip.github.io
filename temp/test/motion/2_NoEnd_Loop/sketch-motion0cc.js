var scaleX = 0;

function setup() {
  createCanvas(400, 400);
  //frameRate(10);
}
function draw() {
  background(50);
  noFill();
  stroke(255);
  strokeWeight(4);
  // loop animation
  scaleX = scaleX + 1;
  ellipse(200, 200, (scaleX % 300), 300);
  console.log(scaleX % 300);
}