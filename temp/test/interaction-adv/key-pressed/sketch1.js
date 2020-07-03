function setup() {
	createCanvas(600, 400);
	
};

function draw() {
	background(0);
	ellipse(width/2, height/2, 100, 100);

};

function keyPressed() {
	if (key == 'A') {
    	fill(255,0,0); 
	} else if (key == 'B') {
		  fill(0,255,0); 
	  } else if (key == 'C') {
		  fill(0,0,255); 
  	}
}
