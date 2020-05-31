var numW=[]
var numH=[]
var r=0;


function setup() {
  createCanvas(625,350);
  background(255);
  frameRate(60);
  
  
  
}


function draw() {

  for (var i=0;i<625;i+=25) {
	  
    for(var j=0; j<375;j+=25){
      numW[i] = i;
      numH[j] = j;
      fill(r);
      strokeWeight(2);
      stroke(255);
      var a=random(-2,2);
      var b=random(-2,2);
      
      rect(numW[i]+a,numH[j]+b,25,25);
	  
	
	  
	  noLoop();
    
      
    }
  }
  

}

function keyTyped() {
  if(key==='i'){
    
    fill(255,200,255);
	stroke(0);
	 var a=random(-2,2);
     var b=random(-2,2);
	 rect(numW[50]+a,numH[50]+b,25,25);
	 rect(numW[25]+a,numH[125]+b,25,25);
	 rect(numW[125]+a,numH[225]+b,25,25);
	 rect(numW[25]+a,numH[100]+b,25,25);
	 rect(numW[75]+a,numH[275]+b,25,25);
	 rect(numW[25]+a,numH[225]+b,25,25);
	 rect(numW[325]+a,numH[275]+b,25,25);
	 rect(numW[275]+a,numH[250]+b,25,25);
	 rect(numW[350]+a,numH[200]+b,25,25);
	 rect(numW[575]+a,numH[200]+b,25,25);
	 rect(numW[575]+a,numH[275]+b,25,25);
	 
	
	 
	 
}
  if(key==='l'){
    
    fill(125,255,255);
	stroke(0);
	 var a=random(-2,2);
     var b=random(-2,2);
	 rect(numW[125]+a,numH[75]+b,25,25);
	 rect(numW[500]+a,numH[200]+b,25,25);
	 rect(numW[225]+a,numH[250]+b,25,25);
	 rect(numW[175]+a,numH[250]+b,25,25);
	 rect(numW[50]+a,numH[150]+b,25,25);
	 rect(numW[550]+a,numH[175]+b,25,25);
	 rect(numW[500]+a,numH[250]+b,25,25);
	 rect(numW[450]+a,numH[175]+b,25,25);
	 rect(numW[350]+a,numH[275]+b,25,25);
  }
  if(key==='o'){
    
    fill(125,200,255);
	stroke(0);
	 var a=random(-2,2);
     var b=random(-2,2);
	rect(numW[25]+a,numH[75]+b,25,25);
	rect(numW[275]+a,numH[200]+b,25,25);
	rect(numW[400]+a,numH[225]+b,25,25);
	 rect(numW[500]+a,numH[225]+b,25,25);
	 rect(numW[100]+a,numH[250]+b,25,25);
	 rect(numW[400]+a,numH[250]+b,25,25);
	 rect(numW[175]+a,numH[175]+b,25,25);
	 rect(numW[325]+a,numH[175]+b,25,25);
	 rect(numW[300]+a,numH[225]+b,25,25);
  }
  if(key==='v'){
    
    fill(255,255,125);
	stroke(0);
	 var a=random(-2,2);
     var b=random(-2,2);
	 rect(numW[450]+a,numH[250]+b,25,25);
	 rect(numW[200]+a,numH[175]+b,25,25);
	rect(numW[400]+a,numH[175]+b,25,25);
	 rect(numW[425]+a,numH[275]+b,25,25);
	rect(numW[100]+a,numH[50]+b,25,25);
	rect(numW[525]+a,numH[225]+b,25,25);
	rect(numW[125]+a,numH[175]+b,25,25);
	 rect(numW[75]+a,numH[150]+b,25,25);
	 rect(numW[450]+a,numH[225]+b,25,25);
	 rect(numW[275]+a,numH[225]+b,25,25);
  }
  if(key==='e'){
	  
    
    fill(200,200,255);
	stroke(0);
	 var a=random(-2,2);
     var b=random(-2,2);
	  rect(numW[125]+a,numH[200]+b,25,25);
	  rect(numW[50]+a,numH[250]+b,25,25);
	  rect(numW[525]+a,numH[175]+b,25,25);
	  rect(numW[100]+a,numH[150]+b,25,25);
      rect(numW[300]+a,numH[275]+b,25,25);
	  rect(numW[75]+a,numH[25]+b,25,25);
	  rect(numW[400]+a,numH[200]+b,25,25);
	 rect(numW[300]+a,numH[175]+b,25,25);
	  rect(numW[175]+a,numH[225]+b,25,25);
	 
	
  }
  if(key==='y'){
    
    fill(255,200,200);
	stroke(0);
	 var a=random(-2,2);
     var b=random(-2,2);
	 rect(numW[325]+a,numH[225]+b,25,25);
	 rect(numW[550]+a,numH[225]+b,25,25);
	 rect(numW[175]+a,numH[200]+b,25,25);
	 rect(numW[450]+a,numH[200]+b,25,25);
	 rect(numW[550]+a,numH[275]+b,25,25);
	 rect(numW[175]+a,numH[250]+b,25,25);
	 rect(numW[175]+a,numH[150]+b,25,25);
	 rect(numW[525]+a,numH[275]+b,25,25);
	 rect(numW[200]+a,numH[275]+b,25,25);
  }
 if(key==='u'){
	 fill(255,0,0);
	 stroke(0);
	 var a=random(-2,2);
     var b=random(-2,2);
	 rect(numW[500]+a,numH[50]+b,25,25);
	 rect(numW[475]+a,numH[50]+b,25,25);
	 rect(numW[525]+a,numH[50]+b,25,25);
	 rect(numW[550]+a,numH[50]+b,25,25);
	 rect(numW[450]+a,numH[50]+b,25,25);
	 rect(numW[475]+a,numH[25]+b,25,25);
	 rect(numW[525]+a,numH[25]+b,25,25);
	 rect(numW[550]+a,numH[25]+b,25,25);
	 rect(numW[450]+a,numH[25]+b,25,25);
	 rect(numW[500]+a,numH[75]+b,25,25);
	 rect(numW[500]+a,numH[100]+b,25,25);
	 rect(numW[475]+a,numH[75]+b,25,25);
	 rect(numW[525]+a,numH[75]+b,25,25);
	 
    
    
  }
   
  
  if(key=== '1'){
	  loop();
  }
   
 return false;
}