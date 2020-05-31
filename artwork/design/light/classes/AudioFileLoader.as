class AudioFileLoader {
	private var mySound:Sound;
	private var view:AudioPlayer;
	private var percentLoaded:Number;
	private var percentPlayed:Number;
	private var secondsOffSet:Number;
	private var isBuffered:Boolean;
	private var isPlaying:Boolean;
	private var isStopped:Boolean;
	private var loadIvl:Number;
	//--------------------------------------------------------------------------------
	public function get getSecondsOffSet():Number {
		return secondsOffSet;
	}
	public function set setSecondsOffSet(_sec:Number):Void {
		secondsOffSet = _sec;
	}
	public function set setView(_view:AudioPlayer):Void {
		view = _view;
	}
	public function get getPercentLoaded():Number {
		return percentLoaded;
	}
	public function get getPercentPlayed():Number {
		return percentPlayed;
	}
	public function get getDuration():Number {
		return mySound.duration;
	}
	public function get getPosition():Number {
		return mySound.position;
	}
	public function get getAlbum():String {
		return mySound.id3.album;
	}
	public function get getArtist():String {
		return mySound.id3.artist;
	}
	public function get getVolume():Number {
		return mySound.getVolume();
	}
	//--------------------------------------------------------------------------------
	function AudioFileLoader() {
		init();
	}
	//--------------------------------------------------------------------------------
	private function init():Void {
		mySound = new Sound();
		mySound.setVolume(50);
		isPlaying = false;
		isBuffered = false;
		isStopped = false;
		secondsOffSet = new Number();
	}
	//--------------------------------------------------------------------------------
	private function checkLoadStatus():Void {
		percentLoaded = mySound.getBytesLoaded()/mySound.getBytesTotal();
		if (isStopped) {
			percentPlayed = 0;
			secondsOffSet = 0;
		} else {
			percentPlayed = mySound.position/mySound.duration;
			secondsOffSet = mySound.position/1000;
		}
		if (!isBuffered && mySound.position != 0 && mySound.duration != 0) {
			isBuffered = true;
			isPlaying = true;
		}
		view.updateAssets();
	}
	//--------------------------------------------------------------------------------
	public function load(_mp3File:String):Void {
		mySound.loadSound(_mp3File, true);
		if (!loadIvl) {
			loadIvl = setInterval(this, "checkLoadStatus", 100);
		}
		mySound.onSoundComplete = function () {
			this.loadSound(_mp3File, true);
		}
	}
	//--------------------------------------------------------------------------------
	public function start(_secondsOffSet:Number):Void {
		secondsOffSet = _secondsOffSet;
		mySound.start(secondsOffSet);
	}
	//--------------------------------------------------------------------------------
	public function play():Void {
		isStopped = false;
		if (!isPlaying) {
			isPlaying = true;
			mySound.start(secondsOffSet);
			if (!loadIvl) {
				loadIvl = setInterval(this, "checkLoadStatus", 100);
			}
		}
	}
	//--------------------------------------------------------------------------------
	public function pause():Void {
		isStopped = false;
		if (isPlaying) {
			isPlaying = false;
			mySound.stop();
		}
	}
	//--------------------------------------------------------------------------------
	public function stop():Void {
		mySound.stop();
		isStopped = true;
		isPlaying = false;
		percentPlayed = 0;
		secondsOffSet = 0;
		checkLoadStatus();
		clearInterval(loadIvl);
		loadIvl = undefined;
	}
	//--------------------------------------------------------------------------------
	public function setVolume(_vol:Number):Void {
		mySound.setVolume(_vol);
	}
	//--------------------------------------------------------------------------------
}
