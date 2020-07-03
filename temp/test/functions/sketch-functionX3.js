function setup() {
  createCanvas(600, 400);
};

function draw() {
	var r = distance(width/2,height/2,mouseX,mouseY)
	fill(r,0,0);
	//fill(distance(width/2,height/2,mouseX,mouseY),0,0);
	rect(0,0,width,height);
	fill(255);
	ellipse(width/2, height/2, distance(width/2,height/2,mouseX,mouseY), distance(width/2,height/2,mouseX,mouseY));
}

function distance(x1, y1, x2, y2) {
	var dx = x1 - x2;
	var dy = y1 - y2;
	var d = sqrt(dx*dx + dy*dy);
	return d;
	
}