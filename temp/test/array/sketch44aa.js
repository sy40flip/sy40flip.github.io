var rectX = [];
var rectY = [];

var myValues[];

function setup() {
  createCanvas(windowWidth, 400);
};

function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectY.length; i++) {
    rect(myValues[0], myValues[1], 50, 25);
	myValues[1] += 1;
  }
};

function mousePressed() {
	myValues.push([mouseX, mouseY]);
/*  rectX.push(mouseX);
  rectY.push(mouseY);
*/}