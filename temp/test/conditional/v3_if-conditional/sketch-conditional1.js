var setup = function() {
  createCanvas(600, 600);
  noStroke();
};

var draw = function() {
  background(0);
  fill(255,0,0);
  if (mouseX < 300) {
    rect(0, 0, 300, 600); // Left
  } else {
    rect(300, 0, 300, 600); // Right
  }

};