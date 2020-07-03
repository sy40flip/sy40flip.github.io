var button;
function setup() {
  createCanvas(400, 300);
  button = createButton("Click me!");
  button.mousePressed(randomRectangle);
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