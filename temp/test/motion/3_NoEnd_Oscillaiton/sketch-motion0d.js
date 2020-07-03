function setup() {
  createCanvas(400, 400);
  frameRate(10);
}
function draw() {
  background(50);
  noFill();
  stroke(255);
  strokeWeight(4);
	// sin(frameCount/frequency) *amplitude  (of the sine curve)
  ellipse(200,200,100+(sin(frameCount/10)*50),100);
  //ellipse(200,200, 200+sin(frameCount)*50, 100);

}