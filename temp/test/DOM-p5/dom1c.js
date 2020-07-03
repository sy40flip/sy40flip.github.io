var button;
var buttonTwo;
function setup() {
  createCanvas(400, 300);
  button = createButton("Create");
  button.mousePressed(randomRectangle);
  buttonTwo = createButton("Clear");
  buttonTwo.mousePressed(clearCanvas);
  background(50);
  noStroke();
}
function draw() {
}
function randomRectangle() {
    fill(random(255));
    rect(random()*width, random()*height,
      random(400), random(300));
}

function clearCanvas() {
	background(50);
}