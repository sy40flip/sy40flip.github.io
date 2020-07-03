// Check which mouse button is pressed
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(0);
};


function draw() {
    background(204);
    // mouseButton - black, white, gray
    if (mouseIsPressed == true) {
        if (mouseButton == LEFT) {
            fill(0); // Black
        } else if (mouseButton == RIGHT) {
            fill(255); // White
        }
    } else {
        fill(126); // Gray
    }
	rectMode(CENTER);
	rect(width/2, height/2, 300, 300);
};