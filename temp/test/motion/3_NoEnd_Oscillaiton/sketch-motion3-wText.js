var x = 0;
var velocity = 2;

function setup() {
  createCanvas(400, 400);
  noStroke();
  textSize(90);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(50);
  fill(175);
  
  x += velocity;
  if ((x > width) || (x < 0)) {
    velocity = velocity * -1;
  }
  textSize(x);
  text("!", x, height/2);

}