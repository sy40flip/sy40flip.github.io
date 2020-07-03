// Using a for loop to initialize values.

var weight = [];
var sizes = [];

function setup() {
  createCanvas(600, 400);
  stroke(255);
  strokeWeight(3);

// set the values
  for (var i=0; i<100; i++) {
    weight[i] = random(0, 10);
  }

};

function draw() {
  background(71);

// 
for (var i=0; i<weight.length; i++) {
    strokeWeight(weight[i]);
    line(i*10, 0, i*10, height);
console.log(weight.length);
  }


};