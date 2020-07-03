var sound;
 
function preload() {
  sound = loadSound('sound/pop.mp3');
}
 
 
function setup() {
  createCanvas(200, 200);
  background(150);
}

function draw() {
  
}


function mousePressed() {
  sound.play();
  background(random(255), random(255), random(255));
  
}