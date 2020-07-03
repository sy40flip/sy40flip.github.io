var field;
function setup() {
  createCanvas(400, 300);
  field = createInput("type something here");
}
function draw() {
  background(50);
  fill(255);
  noStroke();
  textSize(24);
  text(field.value(), 10, 10, width, height);
}