
function setup() {
  createCanvas(400, 400);
  fill(0, 255, 255);
  noStroke();

}
function draw() {
  background(50);
var x = width/2;
var y = height/2;
  x+=random(-2,2);
  y+=random(-2,2);
  ellipse(x,y, 50, 50);
 
 }
