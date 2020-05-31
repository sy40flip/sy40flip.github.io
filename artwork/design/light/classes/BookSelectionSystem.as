// INHERIT FUNCTION FROM SELECTIONSYSTEM.AS 
// EDITING IS REQUIRED IF WANNA CHANGE

// FUNCTION 1: WHEN BUTTON SELECTED --> WHAT YOU WANNA EXECUTE (E.G. LOADMOVIE())

/*
  Inherits the functionality of SelectionSystem and extends by defining doAction()
*/
import SelectionSystem;
class BookSelectionSystem extends SelectionSystem {
	//--------------------------------------------------------------------------------------------
	public function BookSelectionSystem() {
	}
	//--------------------------------------------------------------------------------
	private function doAction():Void {
		_parent.createEmptyMovieClip("image_mc", 100);
		_parent.image_mc._x = 315;
		_parent.image_mc._y = 52;
		// define in _root first frame
		_parent.image_mc.loadMovie(systemData[currentSelection].image);
	}
	//--------------------------------------------------------------------------------
}
