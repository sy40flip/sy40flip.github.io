function setup() {
  createCanvas(600, 400);
  background(0);
  fill(175);
};


function draw() {
	setTimeOut(makeShapes, 2000);
	console.log(setTimeOut());
}

function makeShapes() {
	ellipse (500, 300, 100, 100);
	rect(100, 100, 100, 100);
}

