// JavaScript Document

/* create new audio object */
	bgmplayer = new Audio("");	
	
/* create functions for sound control*/
	function startbgm(file){
        bgmplayer.src = "sound/"+file;
        bgmplayer.pause();
        bgmplayer.load();
        bgmplayer.play();
		bgmplayer.loop= false;
    }
	function stopbgm(){
        bgmplayer.pause();
	}
	
	bgmplayer2 = new Audio("");
	function startbgm2(file){
        bgmplayer.src = "sound/"+file;
        bgmplayer.pause();
        bgmplayer.load();
        bgmplayer.play();
		bgmplayer.loop= false;
    }
	function stopbgm(){
        bgmplayer.pause();
	}