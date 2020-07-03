

    bgmplayer2 = new Audio("");	
	function startbgm2(file){
        bgmplayer2.src = "sound/"+file;
        bgmplayer2.pause();
        bgmplayer2.load();
        bgmplayer2.play();
		bgmplayer2.loop= false;
    }
