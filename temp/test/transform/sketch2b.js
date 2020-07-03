var angle=0;
function setup() {
	createCanvas(600, 600);
	fill(0);
};

function draw() {
	background(125);
	
	/* start transforming the coordinating system*/
	push(); 
	// translate the system to the mouse
	translate(mouseX, mouseY);
	//ellipse (0, 0, 50, 50);
	// using rotate transformations, must use translate first
	rotate(radians(angle));
	scale(2);
	line(-50, -50, +50, +50);
	line(+50, -50, -50, +50);
	angle++;
	pop();
	
	/* coordination system transformation not affecting rect below */
	noFill();
	rect(10, 10, width-20, height-20);
};