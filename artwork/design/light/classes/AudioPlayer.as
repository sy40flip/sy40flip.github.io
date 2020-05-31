import mx.transitions.easing.*;
import mx.transitions.Tween;
class AudioPlayer extends MovieClip {
	private var play_mc:MovieClip;
	private var pause_mc:MovieClip;
	private var stop_mc:MovieClip;
	private var timeIndicator_mc:MovieClip;
	private var volumeDragger_mc:MovieClip;
	private var progressBar_mc:MovieClip;
	private var seeker_mc:MovieClip;
	private var artist_txt:TextField;
	private var songTitle_txt:TextField;
	private var duration_txt:TextField;
	private var position_txt:TextField;
	private var isSeeking:Boolean;
	private var initSeekerX:Number;
	private var initVolDraggerX:Number;
	private var seekerIvl:Number;
	private var volIvl:Number;
	
	// the line refers back to AudioFileLoader class
	private var audioFileLoader:AudioFileLoader;
	
	//--------------------------------------------------------------------------------
	function AudioPlayer() {
		initSeekerX = seeker_mc._x;
		initVolDraggerX = volumeDragger_mc._x;
		init();
	}
	//--------------------------------------------------------------------------------
	private function init():Void {
		timeIndicator_mc._alpha = 0;
		audioFileLoader = new AudioFileLoader();
		audioFileLoader.setView = this;
		isSeeking = false;
		setStates();
		setVolumeDragger();
	}
	//--------------------------------------------------------------------------------
	private function setStates():Void {
		play_mc.onPress = function() {
			_parent.audioFileLoader.play();
		};
		pause_mc.onPress = function() {
			_parent.audioFileLoader.pause();
		};
		stop_mc.onPress = function() {
			_parent.audioFileLoader.stop();
		};
		seeker_mc.onPress = function() {
			var myTween = new Tween(_parent.timeIndicator_mc, "_alpha", Regular.easeOut, _parent.timeIndicator_mc._alpha, 100, .5, true);
			this.startDrag(false, _parent.initSeekerX, _y, _parent.initSeekerX+_parent.progressBar_mc._width-_parent.seeker_mc._width, _y);
			if (!_parent.seekerIvl) {
				_parent.seekerIvl = setInterval(_parent, "doSeekerCheck", 41);
			}
			_parent.isSeeking = true;
		};
		seeker_mc.onReleaseOutside = seeker_mc.onRelease=function () {
			var myTween = new Tween(_parent.timeIndicator_mc, "_alpha", Regular.easeOut, _parent.timeIndicator_mc._alpha, 0, .5, true);
			clearInterval(_parent.seekerIvl);
			_parent.seekerIvl = undefined;
			_parent.isSeeking = false;
			_parent.doStreamChange();
			this.stopDrag();
		};
		volumeDragger_mc.onPress = function() {
			if (!_parent.volIvl) {
				_parent.volIvl = setInterval(_parent, "doVolumeChange", 41);
			}
			this.startDrag(false, _parent.initVolDraggerX, _y, _parent.initVolDraggerX+30, _y);
		};
		volumeDragger_mc.onRelease = function() {
			clearInterval(_parent.volIvl);
			_parent.volIvl = undefined;
			this.stopDrag();
		};
	}
	//--------------------------------------------------------------------------------
	private function doSeekerCheck():Void {
		timeIndicator_mc._x = seeker_mc._x;
		timeIndicator_mc.time_txt.text = getTimeFromMsecs(((seeker_mc._x-initSeekerX)/(progressBar_mc._width-seeker_mc._width))*(audioFileLoader.getDuration));
	}
	//--------------------------------------------------------------------------------
	private function doStreamChange():Void {
		var secondsOffSet:Number = ((seeker_mc._x-initSeekerX)/(progressBar_mc._width-seeker_mc._width))*(audioFileLoader.getDuration/1000);
		audioFileLoader.start(secondsOffSet);
	}
	//--------------------------------------------------------------------------------
	private function getTimeFromMsecs(_msec:Number):String {
		var seconds_num:Number = _msec/1000;
		var min_num:Number = Math.floor(seconds_num/60);
		seconds_num = Math.floor(seconds_num-(min_num*60));
		if (seconds_num<10) {
			return min_num+":0"+seconds_num;
		} else {
			return min_num+":"+seconds_num;
		}
	}
	//--------------------------------------------------------------------------------
	private function setVolumeDragger():Void {
		volumeDragger_mc._x = initVolDraggerX+(30*(audioFileLoader.getVolume/100));
	}
	//--------------------------------------------------------------------------------
	private function doVolumeChange():Void {
		audioFileLoader.setVolume(((volumeDragger_mc._x-initVolDraggerX)/30)*100);
	}
	//--------------------------------------------------------------------------------
	public function load(_mp3File:String):Void {
		audioFileLoader.load(_mp3File);
	}
	//--------------------------------------------------------------------------------
	public function updateAssets():Void {
		artist_txt.text = audioFileLoader.getArtist;
		songTitle_txt.text = audioFileLoader.getAlbum;
		var myTween = new Tween(progressBar_mc, "_xscale", Regular.easeOut, progressBar_mc._xscale, audioFileLoader.getPercentLoaded*100, .1, true);
		if (!isSeeking) {
			var myTween2 = new Tween(seeker_mc, "_x", Regular.easeOut, seeker_mc._x, initSeekerX+audioFileLoader.getPercentPlayed*(progressBar_mc._width-seeker_mc._width), .1, true);
			duration_txt.text = getTimeFromMsecs(audioFileLoader.getDuration);
			position_txt.text = getTimeFromMsecs(audioFileLoader.getPosition);
		}
	}
	//--------------------------------------------------------------------------------
}
