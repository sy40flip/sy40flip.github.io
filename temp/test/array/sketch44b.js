var myValues = [];


function setup() {
  createCanvas(windowWidth, 400);
};

function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < myValues.length; i++) {
    fill(myValues[i][2]);
    rect(myValues[i][0], myValues[i][1], 50, 25);
    //myValues[i][1] += 1;
  	//change speed too
	myValues[i][1] += myValues[i][3];
  }
};

function mousePressed() {
	
// add to the end of the array
  myValues.push([mouseX, mouseY, random(50, 255), random(1,5)]);


// add to the specific index number of the array
/*  myValues[0] = mouseX;
  myValues[1] = mouseY;
  myValues[2] = random(255);*/

//add and remove items in the array
myValues. splice(i, 1);

}