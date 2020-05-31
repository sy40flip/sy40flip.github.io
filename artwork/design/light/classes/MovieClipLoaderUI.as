class MovieClipLoaderUI extends MovieClip {
	private var mLoader:MovieClipLoader;
	private var owner:Object;
	private var callBack:Function;
	private var targetClip:MovieClip;
	private var loadUrl:String;
	private var progressBar_mc:MovieClip;
	private var progress_txt:TextField;
	//--------------------------------------------------------------------------------
	function MovieClipLoaderUI() {
	}
	//--------------------------------------------------------------------------------
	public function init(_loadUrl:String, _targetClip:MovieClip, _owner:Object, _callBack:Function):Void {
		loadUrl = _loadUrl;
		targetClip = _targetClip;
		owner = _owner;
		callBack = _callBack;
		initLoad();
	}
	//--------------------------------------------------------------------------------
	private function initLoad():Void {
		mLoader = new MovieClipLoader();
		mLoader.addListener(this);
		mLoader.loadClip(loadUrl, targetClip);
	}
	//--------------------------------------------------------------------------------
	public function onLoadStart(_targetClip:MovieClip):Void {
		progressBar_mc.dest = 0;
		progressBar_mc.onEnterFrame = function() {
			_xscale += (this.dest-this._xscale)*.5;
		};
	}
	//--------------------------------------------------------------------------------
	public function onLoadProgress(_targetClip:MovieClip, _loadedBytes:Number, _totalBytes:Number):Void {
		var percent:Number = Math.ceil((_loadedBytes/_totalBytes)*100);
		progressBar_mc.dest = percent;
		progress_txt.text = "Loading ... "+percent+"%";
	}
	//--------------------------------------------------------------------------------
	public function onLoadInit(_targetClip:MovieClip):Void {
		callBack.apply(owner);
		removePreloader();
	}
	//--------------------------------------------------------------------------------
	public function removePreloader():Void {
		progressBar_mc.onEnterFrame = undefined;
		mLoader.removeListener(this);
		_visible = false;
		delete mLoader;
		this.removeMovieClip();
	}
	//--------------------------------------------------------------------------------
	public function onLoadError(_targetClip:MovieClip, _errorCode:String) {
		progress_txt.text = "file not found";
	}
	//--------------------------------------------------------------------------------
}
