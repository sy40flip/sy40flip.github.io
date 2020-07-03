var posSlider;
var sizeSlider;

function setup() {
  createCanvas(400, 300);
  posSlider = createSlider(0, width, width/2);
  sizeSlider = createSlider(0, 100, 50);
}

function draw() {
  background(50);
  fill(255);
  noStroke();
  ellipse(posSlider.value(), height/2, sizeSlider.value(), 50);
}