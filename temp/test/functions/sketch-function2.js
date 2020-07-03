// Draw three targets, using a function to avoid repeitition and help with modularity

var setup = function() {
  createCanvas(600, 400);
  background(71);
  noStroke();
  noLoop();
};

var draw = function() {
	drawTarget(100, 200);
  drawTarget(300, 200);
  drawTarget(500, 200);
};

function drawTarget(x, y) {
  for(var i = 0; i < 10; i++) {
    fill(i*20, i*20, i*20);
    ellipse(x, y, 150-(i*20), 150-(i*20));
  };
};