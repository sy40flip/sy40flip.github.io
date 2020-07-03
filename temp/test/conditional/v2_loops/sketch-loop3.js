function setup() {

    createCanvas(600, 400);
	background(125);
	noStroke();

};

function draw() {
    	for (var i=0; i<=width; i+= 20) {
    	  for (var j=0; j<=height; j+= 20) {
    	    ellipse(i, j, 10, 10);
    	  }
    	}
    // Try changing the < sign to <= sign.
};