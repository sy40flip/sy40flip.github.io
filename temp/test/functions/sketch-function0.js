// Draw three targets, using a function to avoid repeitition and help with modularity

var setup = function() {
  createCanvas(600, 400);
  background(71);
  noStroke();
  noLoop();
};

var draw = function() {
  var x;
  var y;
  
// the later drawn circles are the smaller ones
// the later drawn circles are the brighter ones
  x = random(0, width);
  y = random(0, height);
  for(var i = 0; i < 10; i++) {
    fill(i*20, i*20, i*20);
    ellipse(x, y, 150-(i*20), 150-(i*20));
  };

  // draw a target
  x = random(0, width);
  y = random(0, height);
  for(var i = 0; i < 10; i++) {
    fill(i*20, i*20, i*20);
    ellipse(x, y, 150-(i*20), 150-(i*20));
  };

  // draw a target
  x = random(0, width);
  y = random(0, height);
  for(var i = 0; i < 10; i++) {
    fill(i*20, i*20, i*20);
    ellipse(x, y, 150-(i*20), 150-(i*20));
  };

};