// JavaScript Document

		function click4video(){
			$('#vidOn').on('click', function(){
				$('#bg').animate({opacity:'0.2'}, 500);
				$('#t2').animate({opacity:'0.2'}, 500);
				$('video').animate({opacity:'1'}, 500);
				playVid();
				soundfx.pause();
			});
			$('#vidOff').on('click', function(){
				$('#bg').animate({opacity:'1'}, 500);
				$('video').animate({opacity:'0'}, 500);
				stopVid();
				soundfx.play();
			});
			$('#vidPause').on('click', function(){
				$('#bg').animate({opacity:'0.2'}, 500);
				$('video').animate({opacity:'1'}, 500);
				stopVid();
				soundfx.play();
			});
		}