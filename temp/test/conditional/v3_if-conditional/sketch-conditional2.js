var setup = function() {
  createCanvas(600, 600);
  noStroke();
};

var draw = function() {
  background(0);
  fill(255,0,0);
	if (mouseX < 200) {
		rect(0, 0, 200, 600); // Left
	} 
	else if (mouseX < 400) {
		rect(200, 0, 200, 600); // Middle
	} 
	else  {
		rect(400, 0, 200, 600); // Right
	}

};