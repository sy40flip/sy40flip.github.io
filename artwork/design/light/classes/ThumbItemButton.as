// INHERIT FUNCTION FROM UIBUTTON.AS 
// EDITING IS REQUIRED IF WANNA CHANGE

import UIButton;
import mx.transitions.easing.*;
import mx.transitions.Tween;
class ThumbItemButton extends UIButton {
	//----------------------------------------------------------------------------------
	private var fadeTween:Tween;
	private var thumbHolder_mc:MovieClip;
	private var preloader_mc:MovieClip;
	//----------------------------------------------------------------------------------
	public function ThumbItemButton() {
		super();
	}
	///----------------------------------------------------------------------------------
	private function onLoad():Void {
		loadThumb();
	}
	//----------------------------------------------------------------------------------
	
	// tell loader clip to load the image specified
	private function loadThumb():Void {
		thumbHolder_mc._alpha = 0;
		preloader_mc.init(itemData.thumb, thumbHolder_mc, this, thumbImageLoaded);
	}
	//----------------------------------------------------------------------------------
	
	// what's next when image already loaded (i.e. fade in)
	public function thumbImageLoaded():Void {
		fadeTween = new Tween(thumbHolder_mc, "_alpha", Regular.easeOut, thumbHolder_mc._alpha, 100, .5, true);
	}
	//----------------------------------------------------------------------------------
	/*
	  calculate where we place this clip by
	  multiplying its id (minus 1) by its height
	  we subtract one to make sure that the first
	  clip's _y position is 0
	*/
	private function setPosition():Void {
		// id starts from 0
		_y = 139+(id)*(_height+3.5);
		_x = 515;
	}
	//----------------------------------------------------------------------------------
	/*
	  fade bg_mc's alpha to 70 percent
	  ease title_mc 10 pixels to the right
	*/
	private function handleRollOver():Void {
		fadeTween = new Tween(thumbHolder_mc, "_alpha", Regular.easeOut, thumbHolder_mc._alpha, 50, .5, true);
	}
	//----------------------------------------------------------------------------------
	/*
	  fade bg_mc's alpha to 100 percent
	  ease title_mc 10 pixels to the left
	*/
	private function handleRollOut():Void {
		fadeTween = new Tween(thumbHolder_mc, "_alpha", Regular.easeOut, thumbHolder_mc._alpha, 100, .5, true);
	}
	//----------------------------------------------------------------------------------
	/*
	  unselect this clip, and reflect visually
	  by calling getRollOut()
	*/
	public function setUnselected():Void {
		super.setUnselected();
		handleRollOut();
	}
	//----------------------------------------------------------------------------------
}
