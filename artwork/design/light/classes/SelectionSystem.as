// NO EDITING IS NEEDED WHEN USED

// FUNCTION 1: MAINTAIN THE STATE OF SELECTION SYSTEM
// FUNCTION 2: ATTACH BUTTONS TO THE STAGE
// FUNCTION 3: PASS DATA TO OBJECT

/*
  Manages a set of UI Buttons and controls selection state
*/
class SelectionSystem extends MovieClip {
	//----------------------------------------------------------------------------------
	// Data array passed in at instantiation
	private var systemData:Array;
	// Linkage name of button clip
	private var exportName:String;
	// Store our current state as a number
	private var currentSelection:Number;
	// Store references to our items
	private var listItems:Array;
	//----------------------------------------------------------------------------------
	public function SelectionSystem() {
	}
	//----------------------------------------------------------------------------------
	public function doInit(_systemData:Array, _exportName:String):Void {
		systemData = _systemData;
		exportName = _exportName;
		listItems = new Array();
		attachButtonItems();
	}
	//----------------------------------------------------------------------------------
	/*
	  Attach a button clip for each data item in our systemData array
	  call init() on the new clip passing it an ID and data item (for title, etc.)
	*/
	private function attachButtonItems():Void {
		for (var i:Number = 0; i<systemData.length; i++) {
			var item:MovieClip = this.attachMovie(exportName, "Item_"+i, i);
			item.init(this, i, systemData[i]);
			listItems.push(item);
		}
	}
	//----------------------------------------------------------------------------------
	/*
	  Called by button items to switch selections. 
	  ID is passed from button item	calling the method.
	*/
	public function setSelection(_id:Number):Void {
		if (currentSelection != _id) {
			listItems[currentSelection].setUnselected();
			currentSelection = _id;
			listItems[currentSelection].setSelected();
			doAction();
		}
	}
	//----------------------------------------------------------------------------------
	/*
	  Take some action in response to the new selection;
	  this is overridden by extending class
	*/
	private function doAction():Void {
		//override
	}
	//----------------------------------------------------------------------------------
	// Getter/setters
	public function getSystemData():Array {
		return systemData;
	}
	public function getCurrentSelection():Number {
		return currentSelection;
	}
	public function setCurrentSelection(_val:Number):Void {
		currentSelection = _val;
	}
	//----------------------------------------------------------------------------------
}
