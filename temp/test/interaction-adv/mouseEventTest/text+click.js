function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(255);
	background(50);
	//noLoop();
};

function draw() {
	textSize(120); // sets the font size
	fill(200,100,200);
    textStyle(BOLD); 
	textAlign(CENTER, CENTER);
	text("FRIDAY MORNING", width/2, height/4);
	fill (0, 200, 0);
	
};

function mouseReleased() {
	fill(255);
	ellipse(mouseX, mouseY, 20, 20);
}