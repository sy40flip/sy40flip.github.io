var counter = 0;
var velocity = 1;
function setup() {
  createCanvas(400, 400);
  fill(0, 255, 255);
  noStroke();
 frameRate(15);

}
function draw() {
  background(50);
  counter+=velocity;
  if (counter >=10) {
  ellipse(100,100, 50, 50);
  }
  if (counter >=20) {
  ellipse(200,200, 50, 50);
  }
  if (counter >=30){
	  ellipse(300,300, 50, 50);
  }
  if (counter >= 40){
	clear();
	background(50);
	velocity=0;
  }
  console.log(counter);
 }
