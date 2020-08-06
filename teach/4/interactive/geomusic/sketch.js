var song;
var button; 
var amp;
var lel;
var diam;
var curT;
var diamhistory = [];
var jumpButton;
function setup() {
  createCanvas(800,600);
  song = loadSound("songs/m.mp3",loaded);
  amp = new p5.Amplitude();
  frameRate(44);
}

function draw() {
  background(0);
  lel = amp.getLevel();
  curT = song.currentTime();
  
  //phase1
  if(curT > 0 && curT < 21){
 for (var p = 0 ; p < width; p+=50 ){
   for(var q = 0 ; q < height; q+=50){
   var h = map(lel, 0, 1, 0, 600);
   fill(255,100);
   noStroke();
   rectMode(CORNER);
   rect(p, q, h, h);
    }
   }
 }
  //phase2
  if (curT > 21 && curT < 31){
    for(var i = 10; i > 0; i-=1){
      diam = map(lel,0,1,0,500);
      noStroke();
      fill(i*26,100);
      ellipse(400, 300, 800, diam-(i*60));
      ellipse(400, 300, diam-(i*60), 600);
    }
  }
  if (curT >=27.7 && curT <= 28.8){
   text("YES!",120,200);
   text("YES!",450,200);
   text("YES!",120,470);
   text("YES!",500,470);
   textSize(100);
   fill(255,0,0);
  }
  if (curT >= 30.3 && curT <= 31){
   text("YES!",40,400);
   textSize(400);
   fill(255,0,0);
  }
  
 
  
  //phase3
  if (curT > 31.3 && curT < 42){
    diam = map(lel,0,1,0,1700);
    rectMode(CENTER);
    noStroke();
    fill(255,100);
    //rect(width/2,height/2,width,diam);
    
    noStroke();
    
    for (var e = 0; e < width; e+=50){
      fill(50+e,100);
      triangle(e,(height-diam)/2,e+50,(height+diam-50)/2,e+100,(height-diam)/2);
    }
    for (var f = 0; f < width; f+= 50){
      fill(255-f,100);
      triangle(f,(height+diam)/2,f+50,(height-diam+100)/2,f+100,(height+diam)/2);
    }
  }
  
  
  if (curT >= 38.3 && curT <= 39){
   fill(255,100,100);
   text("YES!",40,250);
   fill(255,255,100);
   text("YES!",300,250);
   fill(100,255,255);
   text("YES!",560,250);
   fill(255,100,255);
   text("YES!",40,450);
   fill(255,200,100);
   text("YES!",300,450);
   fill(100,100,255);
   text("YES!",560,450);
   textSize(72);
   
  }
   if (curT >= 40.7 && curT <= 41.5){
   fill(255,0,0);
   text("YES!",40,400);
   textSize(320);
   
  }
  
  if(curT>=42){
    song.stop();
    button.html('play');
  }
  console.log(amp);
  console.log(song.currentTime());
  
}


 
 function loaded() {
   console.log('loaded');
   button = createButton('play');
   button.position(10,10);
   button.mousePressed(togglePlaying);
   
    var len = song.duration();
    var t = map(len,0,219,0,219);
    jumpButton = createButton('jump');
    jumpButton.position(80,10);
    jumpButton.mousePressed(jump);
    
    jump3 = createButton('JUMP');
    jump3.position(150,10);
    jump3.mousePressed(JUMP);
 }
 
 function jump() {
   song.jump(27);
  
 }
 function JUMP() {
   song.jump(37);
 }
 
function togglePlaying() {
  if (!song.isPlaying()){
    song.play();
    button.html('pause');
  } else {
    song.pause();
    button.html('play');
  }
}





