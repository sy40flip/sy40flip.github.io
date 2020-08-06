// JavaScript Document

	var x, y, Px, Py, v0;
	var time;
	var n;
	var r0=2.5, d0=15, v0=1;
	// size of planets relative to Earth (modified)
	var rSun=1090*r0*0.03, rMercury=3.8*r0, rVenus=9.5*r0, rEarth=10*r0, rMoon=2.7*r0, rMars=5.3*r0, rJupiter=112*r0*0.4, rSaturn=95*r0*0.4, rUranus=40*r0*0.4, rNeptune=38*r0*0.4;
	// distance of planets relative to Earth-Sun (0.1 AU, modified)
	var dMercury=4*d0, dVenus=7*d0, dEarth=10*d0, dMoon=0.024*d0, dMars=15*d0, dJupiter=52*d0*0.45, dSaturn=96*d0*0.4, dUranus=192*d0*0.25, dNeptune=300*d0*0.2;
	// speed of planets relative to Earth(1 yr, modified)
	var vMercury=365/88, vVenus=1/0.61, vEarth=1, vMoon=365/30, vMars=1/2.1, vJupiter=1/11.8, vSaturn=1/29.6, vUranus=1/84.3, vNeptune=1/165;
	var sMercury, sVenus, sEarth, sMars, sJupiter, sSaturn, sUranus, sNeptune;
	var cPlanet;
	var seed;

function setup() {
	createCanvas(windowWidth, windowHeight);
	sMercury=1, sVenus=2, sEarth=3, sMars=4, sJupiter=5, sSaturn=6, sUranus=7, sNeptune=8;
	seed=random(0, 99);
};

function draw() {
	background(12, 12, 24);
	var Cx=width/2, Cy=height/2;
	drawBackground();
	drawStars();
	time=millis();
	n=radians(time/10);
	strokeWeight(0);

	push();
	translate(Cx, Cy);
	for (s=-8; s<=8; s++) {
		runPlanet(s);
	}
	pop();
};

function runPlanet(s) { //set sequence of planets
	switch (s) {
		case -8:
			if (sNeptune==-8) {
				cPlanet=color(86, 111, 180);
				sNeptune=drawPlanet(rNeptune, dNeptune, vNeptune, sNeptune);
			}
			break;
		case -7:
			if (sUranus==-7) {
				cPlanet=color(93, 173, 209);
				sUranus=drawPlanet(rUranus, dUranus, vUranus, sUranus);
			}
			break;
		case -6:
			if (sSaturn==-6) {
				cPlanet=color(242, 235, 211);
				sSaturn=drawPlanet(rSaturn, dSaturn, vSaturn, sSaturn);
			}
			break;
		case -5:
			if (sJupiter==-5) {
				cPlanet=color(229, 178, 121);
				sJupiter=drawPlanet(rJupiter, dJupiter, vJupiter, sJupiter);
			}
			break;
		case -4:
			if (sMars==-4) {
				cPlanet=color(208, 96, 21);
				sMars=drawPlanet(rMars, dMars, vMars, sMars);
			}
			break;
		case -3:
			if (sEarth==-3) {
				cPlanet=color(36, 94, 169);
				sEarth=drawPlanet(rEarth, dEarth, vEarth, sEarth);
			}
			break;
		case -2:
			if (sVenus==-2) {
				cPlanet=color(196, 115, 17);
				sVenus=drawPlanet(rVenus, dVenus, vVenus, sVenus);
			}
			break;
		case -1:
			if (sMercury==-1) {
				cPlanet=color(179, 148, 126);
				sMercury=drawPlanet(rMercury, dMercury, vMercury, sMercury);
			}
			break;
		case 0: //draw the Sun
			fill(255, 224, 112);
			ellipse(0, 0, rSun, rSun);
			break;
		case 1:
			if (sMercury==1) {
				cPlanet=color(179, 148, 126);
				sMercury=drawPlanet(rMercury, dMercury, vMercury, sMercury);
			}
			break;
		case 2:
			if (sVenus==2) {
				cPlanet=color(196, 115, 17);
				sVenus=drawPlanet(rVenus, dVenus, vVenus, sVenus);
			}
			break;
		case 3:
			if (sEarth==3) {
				cPlanet=color(36, 94, 169);
				sEarth=drawPlanet(rEarth, dEarth, vEarth, sEarth);
			}
			break;
		case 4:
			if (sMars==4) {
				cPlanet=color(208, 96, 21);
				sMars=drawPlanet(rMars, dMars, vMars, sMars);
			}
			break;
		case 5:
			if (sJupiter==5) {
				cPlanet=color(229, 178, 121);
				sJupiter=drawPlanet(rJupiter, dJupiter, vJupiter, sJupiter);
			}
			break;
		case 6:
			if (sSaturn==6) {
				cPlanet=color(242, 235, 211);
				sSaturn=drawPlanet(rSaturn, dSaturn, vSaturn, sSaturn);
			}
			break;
		case 7:
			if (sUranus==7) {
				cPlanet=color(93, 173, 209);
				sUranus=drawPlanet(rUranus, dUranus, vUranus, sUranus);
			}
			break;
		case 8:
			if (sNeptune==8) {
				cPlanet=color(86, 111, 180);
				sNeptune=drawPlanet(rNeptune, dNeptune, vNeptune, sNeptune);
			}
			break;
	}
}

function drawPlanet(r, d, v, s) {
	v1=sqrt(v);
	var x=cos(v1*n), y=0.1*sin(v1*n);
	var Px=d*x, Py=d*y;
	fill(cPlanet);
	ellipse(Px, Py, r, r);
	
	//draw shadows here
	var shadow=color(12, 12, 12); //the lerpColor() got problems here when applying the shadow color
	if ((v1*n)%TWO_PI<PI) {
		push();
			fill(shadow);
			if  ((v1*n)%TWO_PI<HALF_PI) {
				ellipse(Px, Py, sin(v1*n)*r, r);
				arc(Px, Py, r, r, -HALF_PI, HALF_PI);
			}else{
				ellipse(Px, Py, sin(v1*n)*r, r);
				arc(Px, Py, r, r, HALF_PI, PI+HALF_PI);
			}
		pop();
	}else{
		push();
			fill(shadow);
			ellipse(Px, Py, r, r);
		pop();
		if  ((v1*n)%TWO_PI<(PI+HALF_PI)) {
			ellipse(Px, Py, -sin(v1*n)*r, r);
			arc(Px, Py, r, r, -HALF_PI, HALF_PI);
		}else{
			ellipse(Px, Py, -sin(v1*n)*r, r);
			arc(Px, Py, r, r, HALF_PI, PI+HALF_PI);
		}
	}
	
	if (Py<=0) { //change the planet's sequence when it goes to the back or the front
		return -1*abs(s);
	}else{
		return abs(s);
	}
}

function drawBackground() { //draw a gradient background
	var r=12, g=12, b=24, d=30;
	for (i=0; i<10; i++) {
		fill(r, g, b);
		noStroke();
		ellipse(width/2, height/2, width-i*d, height-i*d);
		r+=1, g+=1, b+=2;
	}
}
function drawStars() { //draw static stars that change every time the page reloads
	randomSeed(seed);
	fill(255, 255, 255);
	for(i=0; i<100; i++) {
		dStars=random(1, 4);
		ellipse(random(0, width), random(0, height), dStars, dStars);
	}
}