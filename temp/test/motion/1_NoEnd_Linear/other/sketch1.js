var x =0;
function setup() {
	createCanvas(windowWidth, windowHeight);
};

function draw() {
	background(125);
	line(x, 0, x, height);
	//x++;
	x+=5;
};