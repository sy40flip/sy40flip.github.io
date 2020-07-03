var rectY = [];

function setup() {
  createCanvas(windowWidth, 400);
};

function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectY.length; i++) {
    rect((i+1)*100, rectY[i], 50, 25);
    rectY[i] += 1;
  }
};

function mousePressed() {
  // put value 0 to the yPos of the rect (push = push to the last item in the array)
  rectY.push(0);
}