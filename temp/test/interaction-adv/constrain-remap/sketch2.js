var col = 0;
var r = 0;
var b = 225;


function setup() {
	createCanvas(600, 400);
};

function draw() {
// background
  /* mouseX goes beyond 255 will have no effect */
  //col = mouseX;
  
  /* mouseX (0 to 600) <-> color (0 to 255)*/
  //col = map(mouseX, 0, 600, 0, 255);
  
  
  //background(col);
  /*********************/
  
  /* mouse X affects individual channel */
  r = map(mouseX, 0, 600,  0, 255);
  b = map(mouseX, 0, 600, 255, 0);
   
  background(r, 0, b);
  
// ellipse
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
};


