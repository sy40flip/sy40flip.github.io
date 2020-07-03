var slider;
function setup() {
  createCanvas(400, 300);
  slider = createSlider(-100, 100, 0);
}
function draw() {
  background(50);
  fill(255);
  noStroke();
  
  // ellipase scale oscillates
  var sinVal = sin(frameCount * 0.05);
  ellipse(width/2, height/2,
    (1+sinVal)*100, (1+sinVal)*100);
  	
	// slider position oscillates
	slider.value(sinVal*100);
}