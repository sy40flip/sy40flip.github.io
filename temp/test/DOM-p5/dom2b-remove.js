var posSlider;
var sizeSlider;
var bbtn;
var ell;
var ccanvas;



function setup() {
	//background(50);

  ccanvas = createCanvas(400, 300);
  posSlider = createSlider(0, width, width/2);
  sizeSlider = createSlider(0, 100, 50);
	bbtn = createButton("hey"); 
	
}

function draw() {
	background(50);
	ellipse(width/2, height/2, 50, 50);
   bbtn.mousePressed(removeIt);
	noLoop();
}

function removeIt() {
	//remove static html 
	select("#thisP").remove();
	background(50);
	
	//select("canvas").remove();
	
	// remove ellipse
	//fill(50);
	//noStroke();
}