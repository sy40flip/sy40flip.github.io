
var setup = function() {
    createCanvas(600, 600);
  noStroke();


};

var draw = function() {
    background(0);
  	fill(255, 0, 0);
 	if ((mouseX >= 100) && (mouseX <= 300) && (mouseY >= 200) && (mouseY <= 400)) {
   	rect(100, 200, 200, 200);
	}
};