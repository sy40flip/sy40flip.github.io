import mx.transitions.easing.*;
import mx.transitions.Tween;
class FullSizeViewer extends MovieClip {
	//----------------------------------------------------------------------------------
	private var border_mc:MovieClip;
	private var preloader_mc:MovieClip;
	private var picHolder_mc:MovieClip;
	private var bg_mc:MovieClip;
	private var fadeTween:Tween;
	private var audioPlayer_mc:MovieClip;	
	//----------------------------------------------------------------------------------
	public function FullSizeViewer() {
		border_mc._visible = false;
	}
	//----------------------------------------------------------------------------------
	public function loadImage(_image:String):Void {
		border_mc._visible = false; // no use
		this.createEmptyMovieClip("picHolder_mc", 1);
		picHolder_mc._alpha = 0; // no use
		this.attachMovie("MC MovieClipLoaderUI", "preloader_mc", 2); //preloader for loaded full image
		centerClip(preloader_mc); // position of loaded full image
		preloader_mc.init(_image, picHolder_mc, this, imageLoaded); // start loading movie with preloader first

	}
	//----------------------------------------------------------------------------------
	public function imageLoaded():Void {
		border_mc._visible = true;
		border_mc.swapDepths(101);
		border_mc._width = picHolder_mc._width;
		border_mc._height = picHolder_mc._height;
		centerClip(border_mc);
		centerClip(picHolder_mc);
		var fadeTween = new Tween(picHolder_mc, "_alpha", Regular.easeOut, picHolder_mc._alpha, 100, .5, true);
	}
	//----------------------------------------------------------------------------------
	private function centerClip(_clip:MovieClip):Void {
		_clip._x = 82
		_clip._y = 88
		_clip._rotation = -5
		//_clip._xscale =85;
		//_clip._yscale =85;		
		/*
		Stage.scaleMode = "noScale";
		this.onResize = function() {
	//-- Called when browser is resized.
		_clip._x = (_root.Stage.width/2)-313
		_clip._y = (_root.Stage.height/2)-180	
		}
		this.onResize();
		*/
	}
	//----------------------------------------------------------------------------------
}
