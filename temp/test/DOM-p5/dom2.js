var slider;


function setup() {
  createCanvas(400, 300);
//  slider = createSlider(0, width, width/2, 35);
  slider = createSlider(0, width, width/2);
}

function draw() {
  background(50);
  fill(255);
  noStroke();
  ellipse(slider.value(), height/2, 50, 50);
}