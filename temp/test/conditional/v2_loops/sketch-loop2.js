function setup() {

    createCanvas(600, 400);
	background(125);
	noStroke();
};

function draw() {
	for (var i=0; i<=width; i+= 20) {
    	    ellipse(i, 130, 10, 10);
	}
	for (var j=0; j<=height; j+= 20) {
    	    ellipse(300, j, 10, 10);
	}
};