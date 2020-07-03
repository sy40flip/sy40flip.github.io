var canvas, heading, link;

function setup() {
  canvas = createCanvas(600, 400);
  canvas.position(300, 50);
  // the earlier the element, the lower the stacking order
  heading = createElement("h1", "heading created" + "<br>" + "by p5 js")
  link = createA("http://www.hkbu.edu.hk", "html text element created by p5 js", "_blank");
//  text = createDiv("html text element" + "<br/>" + "created by p5 js");
  heading.position(50, 50);
  link.position(50, 200);
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