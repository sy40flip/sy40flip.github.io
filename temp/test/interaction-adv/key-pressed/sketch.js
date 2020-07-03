function setup() {
	createCanvas(600, 400);
	background(125);
};

function draw() {
	//
};

function keyPressed() {
	console.log(keyCode);
	  var y = map(keyCode, 65, 90, 0, 400);
	  rect(0, y, 600, height/26);
}
