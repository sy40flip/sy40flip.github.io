var b = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
};

function draw() {
	background(75,150,b);
};

function mousePressed() {
	b+=20;
	console.log(b);
}