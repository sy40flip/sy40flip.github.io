var vid;

function setup() {
	createCanvas(640, 360);
  	vid = createVideo("video/bv1.mp4");
  	vid.loop();
	// hide the dom video
  	vid.hide();
	noStroke();
	fill(0);
}

function draw() {
	background(150);
	//not using image() but using loadPixels() //image(vid, 50, 50); 
	vid.loadPixels();
	
	// pixel-drawing 1
	/*
	for (var y = 0; y < height; y += 28) {
    for (var x = 0; x < width; x += 28) {
      var offset = ((y*width)+x)*4;
      fill(vid.pixels[offset],
        vid.pixels[offset+1],
        vid.pixels[offset+2]);
      rect(x, y, 28, 28); 
    }
  }
	*/
	
  // pixel-drawing 2
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - fingers.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }

}