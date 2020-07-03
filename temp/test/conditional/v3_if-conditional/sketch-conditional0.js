
var setup = function() {
    createCanvas(600, 600);

};

var draw = function() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    if (mouseX > 300) {
        fill(255, 200, 0);
    }
    ellipse(300, 200, 100, 100);
};