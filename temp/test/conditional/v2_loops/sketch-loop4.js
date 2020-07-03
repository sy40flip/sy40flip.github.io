function setup() {

    createCanvas(600, 400);
	background(125);
	noStroke();
};

function draw() {
// just the selected area
  for (var i = 180; i < 350; i += 20) {
        for (var j = 50; j < 100; j += 20) {
            ellipse(i, j, 10, 10);
        }
    }
};