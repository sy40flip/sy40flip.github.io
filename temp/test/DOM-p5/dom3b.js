var field;
var button;
var letters = [];
function setup() {
  createCanvas(400, 300);
  field = createInput("your text");
  button = createButton("Explode!!");
  button.mousePressed(explodeText);
}
function draw() {
  background(50);
  fill(255);
  noStroke();
  textSize(24);
  for (var i = 0; i < letters.length; i++) {
    text(letters[i].letter, letters[i].xpos, 
      letters[i].ypos);
    letters[i].xpos += letters[i].xdir;
    letters[i].ypos += letters[i].ydir;
  }
}
function explodeText() {
  textSize(24);
  var text = field.value();
  var currentPos = random(width/2);
  for (var i = 0; i < text.length; i++) {
    var letterObj = {
      letter: text.charAt(i),
      ypos: 50,
      xpos: currentPos,
      xdir: random(-1, 1),
      ydir: random(-0.5, 2)
    };
    letters.push(letterObj);
    currentPos += textWidth(text.charAt(i));
  }
}