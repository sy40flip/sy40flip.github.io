var stopX = 300;    // Final x-coordinate
var x = 600;     // Current x-coordinate
var speed = 10;      


function setup() {
  createCanvas(600, 400);
  noStroke();
  fill(255);
};

function draw() {
	background(100, 0, 255);
	if (x > stopX){
	x -= speed;
	}
	else if (x < stopX){
	x += speed;
	}
	else if (x == stopX){
	x -= 0;
	}
	ellipse(x, 100, 50, 50);
	console.log(x);
};

/*
var $speed = 10;

	this._x += $speed;
	if (this._x>Stage.width) {
		$speed *= -1;
	} else if (this._x<0) {
		$speed *= -1;
	}
	*/