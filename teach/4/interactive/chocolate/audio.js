// JavaScript Document
		
	/* create new audio object */
	soundfx = new Audio("");	
	
	/* create audio plyaback functions */
	function startsoundfx(file){
        soundfx.src = "sound/"+file;
        soundfx.pause();
        soundfx.load();
        soundfx.play();
		soundfx.loop= false;
    }
	function stopsoundfx(){
       soundfx.pause();
    }
	
	/* create loading audio file functions */
	function soundfxBGM(){
		startsoundfx("BGM.mp3");
	}
	function soundfxMachine(){
		startsoundfx("Machine.mp3");
	}
	function soundfxBelt(){
		startsoundfx("Belt.mp3");
	}
	function soundfxDrop(){
		startsoundfx("Drop.mp3");
	}