var numberarray = [0,0,0,0,0,0,0,0];
var chararray = ["Werewolf", "Fortune Teller", "Witch", "Hunter", "Townsfolk", "Cupido", "Little Girl","Thief" ]
var resultarray = [];

var w = 500;
var mybox = document.querySelector('.allbox');
var mything = document.querySelector('.thing');
var mywrap = document.querySelector('.wrap');
//window.addEventListener('onload', function(){
//			if (window.innerWidth < 1000) {
//				w = 1000;
//			}
//			myvar.style.width = w + 'px';
//	} ); 
//		

//var allbox = document.querySelector('.box');
//myvar.addEventListener('load', function(){
//			
//			allbox.style.height = allbox.width + 'px';
//	} ); 		






mybox.addEventListener('click', function(e)  {
if(e.target.tagName = 'img') {


	var imagesrc = e.target.src;
	var c = parseInt(imagesrc.substr(imagesrc.length-5, 1));

	
if(c<8){

//	var myform = document.createElement('div');
//	myform.id = 'form';
//	mywrap.appendChild(myform);
//	myform.style.position = 'absolute';
//	myform.style.width =  w + 'px';
//	myform.style.height = window.innerHeight +'px';
//		
//	var myxx = (window.innerWidth - w)/2;
//	myform.style.left = myxx + 'px';
//	myform.style.top = window.pageYOffset + 'px';
	
	var mylay = document.createElement('div');
	mylay.className = 'lay';
	mything.appendChild(mylay);
	mylay.style.backgroundColor = 'rgba(159,28,59,0.8)';
	
	var trueform = document.createElement('div');
	trueform.id = 'realform';
	mything.appendChild(trueform);
	trueform.style.position = 'absolute';
	trueform.style.top = '160px';
	trueform.style.left = '65px';
	trueform.style.width = '400px';
	
	
	var nametext = document.createElement('div');
	nametext.className ="nametext";
	nametext.textContent = chararray[c];
	mylay.appendChild(nametext);
	
	
	var numberimage = document.createElement("img");
    numberimage.id = 'numberimage';
	numberimage.src = 'number.png';
	numberimage.style.width = "227px";
    trueform.appendChild(numberimage);
	
	
    var thatnumber = document.createElement("input");
    thatnumber.id = "thatnumber";
    thatnumber.type = "number";
	thatnumber.value = numberarray[c];
    thatnumber.min = "0";
	thatnumber.max = "10";
	trueform.appendChild(thatnumber);
	
	var linebreak = document.createElement("br");
    trueform.appendChild(linebreak);
	
	
	var butimage = document.createElement('img');
	butimage.id = 'butimage';
	butimage.src = 'submit.png';
	butimage.style.width = "104px";
	butimage.style.position = "absolute";
	butimage.style.bottom = "55px";
	butimage.style.left = "40px";
	mylay.appendChild(butimage);
		
	var result = document.createElement("p");
	result.id = "result";
	trueform.appendChild(result);
	
    butimage.addEventListener('click', function() {
	var thenumber = document.getElementById('thatnumber').value;
	numberarray[c] = thenumber;
	var result1 = document.getElementById('result');
	result1.textContent = numberarray[c];
	mylay.parentElement.removeChild(mylay);
	trueform.parentElement.removeChild(trueform);
		}, false); 
	

	
		//window.addEventListener('scroll', function() {
//		if (myform) {
//		myform.style.top = window.pageYOffset + 'px';
//		}
//		}, false); //move with scroll
//		
//		window.addEventListener('resize', function() {
//		if (myform) {
//		myform.style.top = window.pageYOffset + 'px';
//		myform.style.height = window.innerHeight +'px'; }
//		var myxx = (window.innerWidth - w*0.5)/2;
//		myform.style.left = myxx + 'px';
		//}, false); 
	
	mylay.addEventListener('click', function(){
		mylay.parentElement.removeChild(mylay);
	trueform.parentElement.removeChild(trueform);
	}, false);
	
}
	

	
	
else if(c === 8) {


var i = 0;
var j = 0;	
var k = 0;
	
for (i = 0; i < 8; i++) { 
	for (j = 0; j < numberarray[i]; j++){
		resultarray[k] = i;
		k = k+1;
	}
}

	

//var result2 = document.createElement("p");
//	result2.id = "testresult";
//	result2.style.position = "absolute";
//	result2.style.backgroundColor = "rgba(225,225,2,0.5)";
//	result2.textContent = i + " " + j + " "+k + resultarray[4];
//	document.body.appendChild(result2);

if (k<2)  {
	
var mylay4 = document.createElement('div');
	mylay4.className = 'lay';
	mything.appendChild(mylay4);
	mylay4.style.backgroundColor = 'rgba(159,28,59,0.8)';
	

var text3 = document.createElement("div");
	text3.className = "resulttext";
	text3.style.fontSize = "50px";
	text3.textContent = "You haven't chosen enough characters!";
	mylay4.appendChild(text3);
	
	
	mylay4.addEventListener('click', function(){
		mylay4.parentElement.removeChild(mylay4);
	}, false);
	
	
	
}		
	
	
else	{



	
	
	
var mylay3 = document.createElement('div');
	mylay3.className = 'lay';
	mything.appendChild(mylay3);
	mylay3.style.backgroundColor = 'rgba(159,28,59,0.8)';
	
var ready = document.createElement('div');
	ready.id = 'ready';
	mything.appendChild(ready);
	ready.style.position = 'absolute';
	ready.style.top = '160px';
	ready.style.left = '65px';
	ready.style.width = '400px';
	
	
	var readyimage = document.createElement("img");
    readyimage.id = 'readyimage';
	readyimage.src = 'ready.png';
	readyimage.style.width = "200px";
    ready.appendChild(readyimage);
	
	var linebreak = document.createElement("br");
    ready.appendChild(linebreak);
	
	var goimage = document.createElement('img');
	goimage.id = 'goimage';
	goimage.src = 'go.png';
	goimage.style.width = "52px";
	goimage.style.position= "relative";
	goimage.style.top = "-8px";
	ready.appendChild(goimage);
	
/*LOOPPPPPPPP*/
var k2 = k;
var z = -1;
	
	goimage.addEventListener('click', function(){
			ready.style.display ='none';

		do
		{z = Math.floor((Math.random() * k2 ) );}
		while (resultarray[z] === "done");
		
var newlay = document.createElement('div');
	newlay.className = 'lay';
	newlay.style.backgroundColor = 'rgba(158,27,58,1)';
	mything.appendChild(newlay);		
	
	
var bigimage = document.createElement('img');
		bigimage.id = "bigimg";
		if (resultarray[z] === 1||resultarray[z] === 3||resultarray[z] === 5||resultarray[z] === 7) 
		{bigimage.src = imagesrc.substr(0, imagesrc.length-5) + resultarray[z] + 'white.png';}
		else
		{bigimage.src = imagesrc.substr(0, imagesrc.length-5) + resultarray[z] + '.png';}
		newlay.appendChild(bigimage);

var newlay2 = document.createElement('div');
	newlay2.className = 'lay';
	newlay2.style.backgroundColor = 'rgba(159,28,59,0.8)';
	mything.appendChild(newlay2);
	
var text1 = document.createElement("div");
	text1.className = "resulttext";
	text1.textContent = "You are " + chararray[resultarray[z]];
	newlay2.appendChild(text1);
	
	var okimage = document.createElement('img');
	okimage.id = 'okimage';
	okimage.src = 'ok.png';
	okimage.style.width = "52px";
	okimage.style.position= "absolute";
	okimage.style.bottom = "20px";
	okimage.style.left = "40px";
	newlay2.appendChild(okimage);
	
	okimage.addEventListener('click', function(){
	if (k>1){
	{ready.style.display ='inline';
	newlay.parentElement.removeChild(newlay);
	newlay2.parentElement.removeChild(newlay2);
		resultarray[z] = "done";
		k = k-1;}
	}
	else if (k===1) {
	newlay.parentElement.removeChild(newlay);
	newlay2.parentElement.removeChild(newlay2);
	
	var text3 = document.createElement("div");
	text3.className = "resulttext";
	text3.style.fontSize = "50px";
	text3.textContent = "You can start the game! Enjoy!";
	mylay3.appendChild(text3);
	
	
	mylay3.addEventListener('click', function(){
		mylay3.parentElement.removeChild(mylay3);
	}, false);	
		
		
		
		
	}
	}, false);	

		
		

		
}, false);

/*LOOPPPPPPPP*/	

	

}


	
	
	
	
	
}	

	
}	
	
	

}, false);
//
//
//
//function getthenumber(a) {
//    var thenumber = document.getElementById('thatnumber').value;
//	numberarray[a] = thenumber;
//	var result = document.getElementById('result');
//	result.textContent = thenumber;
//}
    