/*var xoffset = 40;
var yoffset = 50;*/

function setup() {
  createCanvas(400, 400);
  // clear noLoop();
}

function draw() {
  background(50);
  stroke(255);
  strokeWeight(4);
  noFill();
  
  function drawFace() {
  	ellipse(40, 40, 40, 40);
  	ellipse(140, 40, 40, 40);
  	rect(40, 80, 100, 50);
  }
  
  for (var i=0; i<4; i++) {
  	translate(20*i+20, 20*i+20);
 	drawFace();
/*  translate (120, 120);
drawFace(); 
  translate (-240, 0);
drawFace();
  translate (120, 120);  
  drawFace();*/
  }
}