// NO EDITING IS NEEDED WHEN USED

// FUNCTION 1: EACH CLIP HAS ID, ONCE CLICK, VALUE SENT TO SELECTION SYSTEM.AS
// FUNCTION 2: VISUALLY SELECT AND UN-SELECT WHEN SELECTION SYSTEM.AS COMMANDS
// FUNCTION 3: STRUCTURE FOR DEFINE MOUSE EVENTS

/*
  Reusable architecture for interface button
*/
import SelectionSystem;
class UIButton extends MovieClip {
	//--------------------------------------------------------------------------------------------
	// Stores a reference to a SelectionSystem instance
	private var selectionSystem:Object;
	// Numeric id passed in by SelectionSystem when attached
	private var id:Number;
	// Title holder clip (holds a text field)
	private var title_mc:MovieClip;
	// Background clip
	private var bg_mc:MovieClip;
	// Keeps track of the selection status of this clip
	private var selected:Boolean;
	// Holds any custom visual information (such as title)
	private var itemData:Object;
	// stores the history of this item
	private var visited:Boolean;
	//--------------------------------------------------------------------------------------------
	// constructor
	//--------------------------------------------------------------------------------------------
	public function UIButton() {
	}
	//--------------------------------------------------------------------------------------------
	/*
	  Set up our reference, ID, and item data
	  then take care of the clip's ui
	*/
	public function init(_selectionSystem:SelectionSystem, _id:Number, _itemData:Object):Void {
		selectionSystem = _selectionSystem;
		itemData = _itemData;
		id = _id;
		_focusrect = false;
		setTitle(itemData.title);
		setPosition();
		initMouseEvents();
	}
	//--------------------------------------------------------------------------------------------
	/*
	  Select this clip. It will stay visually selected
	  because the mouse is rolled over it
	*/
	public function setSelected():Void {
		selected = visited=true;
		killMouseEvents();
	}
	//--------------------------------------------------------------------------------------------
	/*
	  Unselect this clip
	*/
	public function setUnselected():Void {
		selected = false;
		initMouseEvents();
	}
	//--------------------------------------------------------------------------------------------
	private function setTitle(_val:String):Void {
		title_mc.title_txt.text = _val;
	}
	//--------------------------------------------------------------------------------------------
	private function setPosition():Void {
		//override
	}
	//--------------------------------------------------------------------------------------------
	/*
	  Tell selectionSystem about the click and pass this clips ID with it
	*/
	private function handleRelease():Void {
		selectionSystem.setSelection(id);
		_root.audioPlayer_mc.load("sound/solo"+(id+1)+".mp3"); 				
	}
	//--------------------------------------------------------------------------------------------
	private function handlePress():Void {
		//override
	}
	//--------------------------------------------------------------------------------------------
	private function handleRollOver():Void {
		//override
	}
	//--------------------------------------------------------------------------------------------
	private function handleRollOut():Void {
		//override
	}
	//--------------------------------------------------------------------------------------------
	/*
	  Capture all of our mouse events and pass them 
	  to the internal hander methods
	*/
	private function initMouseEvents():Void {
		useHandCursor = true;
		onRollOver = handleRollOver;
		onRollOut = handleRollOut;
		onReleaseOutside = handleRollOut;
		onPress = handlePress;
		onRelease = handleRelease;
	}
	//--------------------------------------------------------------------------------------------
	/*
	  Remove all mouse events while the clip is selected
	*/
	private function killMouseEvents():Void {
		useHandCursor = false;
		delete onRollOver;
		delete onRollOut;
		delete onReleaseOutside;
		delete this.onPress;
		delete this.onRelease;
	}
	//--------------------------------------------------------------------------------------------
	// Getter/Setters
	//--------------------------------------------------------------------------------------------
	public function getId():Number {
		return id;
	}
	//--------------------------------------------------------------------------------------------
	public function setId(_val:Number):Void {
		id = _val;
	}
	//--------------------------------------------------------------------------------------------
}
