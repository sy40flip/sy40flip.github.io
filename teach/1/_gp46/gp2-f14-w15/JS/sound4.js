

    bgmplayer4 = new Audio("");	
	function startbgm4(file){
        bgmplayer4.src = "sound/"+file;
        bgmplayer4.pause();
        bgmplayer4.load();
        bgmplayer4.play();
		bgmplayer4.loop= false;
    }
