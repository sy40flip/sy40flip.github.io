function setup() {

    createCanvas(600, 400);
	background(125);
	noStroke();
	//noLoop();
};

function draw() {
  var x = random(0, width);
  var y = random(0, height);
  for(var i = 0; i < 10; i++) {
    fill(i*20, i*20, i*20);
    ellipse(x, y, 150-(i*20), 150-(i*20));
  }
 };