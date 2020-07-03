var canvas, text;

function setup() {
  canvas = createCanvas(600, 400);
  canvas.position(300, 50);
  text = createDiv("html text element created by p5 js");
//  text = createDiv("html text element" + "<br/>" + "created by p5 js");
  text.position(50, 50);
};


function draw() {
  background(255, 125, 50);
  noStroke();
  rectMode(CENTER);
  fill(255, 255, 0);
  rect(width/2, height/2, 500, 300);
  fill(200);
  ellipse(width/2, height/2, 50, 50);

};