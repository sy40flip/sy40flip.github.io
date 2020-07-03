import SelectionSystem;
class SimpleImageGallery extends SelectionSystem {
	//--------------------------------------------------------------------------------
	public function SimpleImageGallery() {
	}
	//--------------------------------------------------------------------------------
	private function doAction():Void {
		_parent.fullSizeViewer_mc.loadImage(systemData[currentSelection].fullsize);
	}
	//--------------------------------------------------------------------------------
}
