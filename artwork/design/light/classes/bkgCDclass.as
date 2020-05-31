//import the tween classes
import mx.transitions.easing.*;
import mx.transitions.Tween;

//create Holder for loaded picture
this.createEmptyMovieClip("picHolder_mc", 2);
this.createEmptyMovieClip("picHolder_mc2", 1);

picHolder_mc._alpha = 0;
picHolder_mc._x = 17;
picHolder_mc._y = 68;
picHolder_mc._rotation = -5;

picHolder_mc2._alpha = 0;
picHolder_mc2._x = 220;
picHolder_mc2._y = 50;
//picHolder_mc2._rotation = -3;

// transition effects  for loaded picture after finish loading
this.loadFinished = function() {
	var fadeTween = new Tween(picHolder_mc, "_alpha", Regular.easeOut, picHolder_mc._alpha, 100, .5, true);
	var fadeTween = new Tween(picHolder_mc2, "_alpha", Regular.easeOut, picHolder_mc2._alpha, 100, .5, true);
};

// preloader position and level
//this.attachMovie("MC MovieClipLoaderUI", "preload_mc", 11, {_x:122, _y:218});
this.attachMovie("MC MovieClipLoaderUI", "preload_mc", 10, {_x:222, _y:218});

// run preloader action in external class (as)
//preload_mc.init("pics/c1.jpg", picHolder_mc, this, loadFinished);
preload_mc.init("pics/c2.jpg", picHolder_mc2, this, loadFinished);


stop();
