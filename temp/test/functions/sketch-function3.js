function setup() {
  createCanvas(600, 400);
  noStroke();
};

function draw() {
  background(0);
  fill (255,255,0);
  ellipse(100, 100, funkySize(100), funkySize(100));
  ellipse(200, 200, funkySize(200), funkySize(200));
  ellipse(300, 300, funkySize(300), funkySize(300));
};

function funkySize(n) {
  var jitter = random(0, 20);
  var size = n + jitter;
  return size;
};