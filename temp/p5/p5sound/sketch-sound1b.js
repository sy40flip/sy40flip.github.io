var sound;
var es = 50;

function preload() {
    sound = loadSound('sound/pop.mp3');
}


function setup() {
    createCanvas(400, 400);
    background(150);
    noStroke();
}

function draw() {
    background(150);
    ellipse(width / 2, height / 2, es, es);
    if (es > 50) {
        es -= 5;
    }
    console.log(es);
}

function keyTyped() {
    es = 200;
    sound.play();
}