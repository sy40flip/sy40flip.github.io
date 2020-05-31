// INHERIT FUNCTION FROM UIBUTTON.AS 
// EDITING IS REQUIRED IF WANNA CHANGE

/*
  Interface button subclass (UIButton) for selection system
*/
import UIButton;
// when you wanna use tween and easing, import those class first
import mx.transitions.easing.*;
import mx.transitions.Tween;
class BookItemButton extends UIButton {
	//--------------------------------------------------------------------------------------------
	private var bgTween:Tween;
	private var titleTween:Tween;
	//--------------------------------------------------------------------------------------------
	// Constructor
	//--------------------------------------------------------------------------------------------
	public function BookItemButton() {
	}
	//--------------------------------------------------------------------------------------------
	// Private methods
	//--------------------------------------------------------------------------------------------
	/*
	  Calculate where we place this clip by
	  multiplying its ID by its height
	*/
	private function setPosition():Void {
		_y = id*(_height+10);

		
	}
	//--------------------------------------------------------------------------------------------
	/*
	  Fade bg_mc's alpha to 50 percent
	  ease title_mc 10 pixels to the right
	*/
	private function handleRollOver():Void {
		bgTween = new Tween(bg_mc, "_alpha", Regular.easeOut, bg_mc._alpha, 50, .5, true);
		titleTween = new Tween(title_mc, "_x", Regular.easeOut, title_mc._x, 15, .2, true);
	}
	//--------------------------------------------------------------------------------------------
	/*
	  If clip has been visited before, fade bg_mc's alpha 
	  to 80 percent, otherwise fade to 100, then ease title_mc 
	  10 pixels to the left
	*/
	private function handleRollOut():Void {
		if (visited) {
			var fadeVal:Number = 80;
		} else {
			var fadeVal:Number = 100;
		}
		bgTween = new Tween(bg_mc, "_alpha", Regular.easeOut, bg_mc._alpha, fadeVal, .5, true);
		titleTween = new Tween(title_mc, "_x", Regular.easeOut, title_mc._x, 5, .2, true);
	}
	//--------------------------------------------------------------------------------------------
	// Public methods
	//--------------------------------------------------------------------------------------------
	/*
	  Unselect this clip, and reflect visually by calling doRollOut()
	*/
	public function setUnselected():Void {
		super.setUnselected();
		handleRollOut();
	}
	//--------------------------------------------------------------------------------------------
}
