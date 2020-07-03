/* Audio Player Module */
/* Initialise Audio Player */
	bgmplayer = new Audio("");	
	sfxplayer = new Audio("");
/* Play File Base Code */
	function startbgmplayer(file){
        bgmplayer.src = "BGM/"+file;
        bgmplayer.pause();
        bgmplayer.load();
        bgmplayer.play();
    }
	function startsfxtplayer(file){
        sfxplayer.src = "SFX/"+file;
        sfxplayer.pause();
        sfxplayer.load();
        sfxplayer.play();
    }
	function stopbgm(){
        bgmplayer.pause();
    }
	function stopsfx(){
        sfxplayer.pause();
    }
/* Individual Play File Functions */

	function bgm1a(){
		startbgmplayer("bgm01a.mp3");
	}
	function bgm1b(){
		startbgmplayer("bgm01b.mp3");
	}
	function bgm2(){
		startbgmplayer("bgm02.mp3");
	}
	function bgm3(){
		startbgmplayer("bgm03.mp3");
		
	}function bgm4(){
		startbgmplayer("bgm04.mp3");
	}
	
	function sfx1(){
		startsfxtplayer("ManyCrow.mp3");
	}
	function sfx2(){
		startsfxtplayer("Slash10.ogg");
	}
	function sfx3(){
		startsfxtplayer("hit.mp3");
	}
	function sfx4(){
		startsfxtplayer("u_hit.mp3");
	}
	function sfx5(){
		startsfxtplayer("knock.mp3");
	}
	function sfx6(){
		startsfxtplayer("crystalshine.mp3");
	}

/* Jarallax Usage:  event:{start:bgm1}, event:{start:stopbgm}, event:{start:sfx1}, event:{start:stopsfx}*/
	
/* End of Audio Codes */