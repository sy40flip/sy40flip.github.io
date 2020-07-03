// Draw three targets, using a function to avoid repeitition and help with modularity

var setup = function() {
  createCanvas(600, 400);
  background(71);
  noStroke();
  noLoop();
};


var draw = function() {
	drawTarget(100, 200, 150, 10);
	drawTarget(300, 200, 150, 3);	
	drawTarget(500, 200, 150, 6);	
};

function drawTarget(x, y, size, num) {
	
	// smaller value difference when more circles
	grayvalues = 255/num;
	
	// smaller size differene when more circles
	steps = size/num;
  	
	for(var i = 0; i < num; i++) {
    	fill(i*grayvalues);
	    ellipse(x, y, size-i*steps, size-i*steps);
  };
  
};