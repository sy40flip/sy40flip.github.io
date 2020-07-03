// Using a for loop to initialize values.

//var x0 = 0;
// var x1 = 0; // Second ellipse
 var x = []; // USING ARRAYS


function setup() {
  createCanvas(600, 400);
  noStroke();
  fill(255);

   //USING ARRAYS
   
   // setup array with 100 different random x position
   for (var i=0; i<100; i++) {
     x.push(random(0, width));
   }

};

function draw() {
  background(71);

/*
  x0 = x0 + 5;
  if (x0 > width + 5) {
    x0 = -5;
  }

  ellipse(x0, 50, 10, 10);
*/ 

  // Second ellipse
  // x1 = x1 + 5;
  // if (x1 > width + 5) {
  //   x1 = -5;
  // }

  // ellipse(x1, 100, 10, 10);


  // USING ARRAYS
   for (var i=0; i<100; i++) {
	
	// if x > width , go back to left edge start again
     x[i] = x[i] + 1;
     if (x[i] > width + 5) {
       x[i] = -5;
     }

	// make 100 ellipse of different random x pos
     ellipse (x[i], i*5, 10, 10);
   }
};