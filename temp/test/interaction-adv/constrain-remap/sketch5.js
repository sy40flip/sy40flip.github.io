function setup() {
	createCanvas(600, 400);
	strokeWeight(2);

};

function draw() {
		background(125);
	var density = map(mouseX, 0, width, 20, 50);
  for(var x = 50; x <= width-50; x += density){
    for (var y = 50; y <= height-50; y += density){
      ellipse(x, y, 20, 20);
    }
  }
 };