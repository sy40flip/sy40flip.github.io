function setup() {
    createCanvas(600, 600);
  noStroke();


};

function draw() {
    background(0);
  	fill(255, 0, 0);
	if ((mouseX < 300) || (mouseY < 300)) { // either or
		ellipse(300,300,50,50);
	}
};