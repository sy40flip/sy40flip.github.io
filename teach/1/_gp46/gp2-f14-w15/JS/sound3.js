

    bgmplayer3 = new Audio("");	
	function startbgm3(file){
        bgmplayer3.src = "sound/"+file;
        bgmplayer3.pause();
        bgmplayer3.load();
        bgmplayer3.play();
		bgmplayer3.loop= false;
    }
