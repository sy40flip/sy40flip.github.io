

$( ".overimg g" ).mouseenter(function() {
    $(this).animate({
		opacity: 0.5,
    }, 300);
});


$( ".overimg g" ).mouseleave(function() {
	$(this).animate({
		opacity: 1,
    }, 300);
});




$( "#fansitetext" ).mouseenter(function() {
		$( "#fansite" ).animate({
		width: '150px',
		bottom: '168px',
        right: '176px'
    }, 200);
	
	});


$( "#fansitetext" ).mouseleave(function() {
		$( "#fansite" ).animate({
		width: '110px',
		bottom: '187px',
        right: '193px'
    }, 200);
	
	});



$( "#fansitetext" ).mouseenter(function() {
    $(this).animate({
		'text-shadow': '2px 2px'
    }, 200);
});


$( "#fansitetext" ).mouseleave(function() {
	$(this).animate({
		'text-shadow': '0px 0px'
    }, 200);
});




	$('.overimg').addClass('run');

$( ".overimg g" ).mouseenter(function() {
	$('.overimg').removeClass('run');
	
});

$( ".overimg g" ).mouseleave(function() {
	$('.overimg').addClass('run');
	
});




$('#team #teamtext').css("display", 'none');

$( "#team" ).mouseenter(function() {
	$('#team #teamtext').css("display", 'auto');
 $({y:$('#team #teamtext').attr('y')})
    .animate(
    {y: 40},
    {duration:400,step:function(now){$('#team #teamtext').attr('y', now);}});
});

$( "#team" ).mouseleave(function() {
	$('#team #teamtext').css("display", 'none');
 $({y:$('#team #teamtext').attr('y')})
    .animate(
    {y: 200},
    {duration:400,step:function(now){$('#team #teamtext').attr('y', now);}});
});


	
$('#table #tabletext').css("display", 'none');

$( "#table" ).mouseenter(function() {
	$('#table #tabletext').css("display", 'auto');
	
 $({y:$('#table #tabletext').attr('y')})
    .animate(
    {y: 40},
    {duration:400,step:function(now){$('#table #tabletext').attr('y', now);}});
});

$( "#table" ).mouseleave(function() {
	$('#table #tabletext').css("display", 'none');
 $({y:$('#table #tabletext').attr('y')})
    .animate(
    {y: 200},
    {duration:400,step:function(now){$('#table #tabletext').attr('y', now);}});
});


$('#teamweek #teamweek1').css("display", 'none');
$('#teamweek #teamweek2').css("display", 'none');

$( "#teamweek" ).mouseenter(function() {
	$('#teamweek #teamweek1').css("display", 'auto');
	$('#teamweek #teamweek2').css("display", 'auto');
	
	$({y:$('#teamweek #teamweek1').attr('y')})
    .animate(
    {y: 30},
    {duration:400,step:function(now){$('#teamweek #teamweek1').attr('y', now);}});
 
 $({y:$('#teamweek #teamweek2').attr('y')})
    .animate(
    {y: 55},
    {duration:400,step:function(now){$('#teamweek #teamweek2').attr('y', now);}})
 
;
});

$( "#teamweek" ).mouseleave(function() {
	
	$('#teamweek #teamweek1').css("display", 'none');
	$('#teamweek #teamweek2').css("display", 'none');

	$({y:$('#teamweek #teamweek1').attr('y')})
    .animate(
    {y: 200},
    {duration:400,step:function(now){$('#teamweek #teamweek1').attr('y', now);}});
 
 $({y:$('#teamweek #teamweek2').attr('y')})
    .animate(
    {y: 225},
    {duration:400,step:function(now){$('#teamweek #teamweek2').attr('y', now);}})
 
;
});


var theshown = "";

$( "#team" ).click(function(){
	removething (theshown,'.theteam');
	showthing('.theteam',1616);
});

$( "#table" ).click(function(){
	removething (theshown,'.thetable');
	showthing('.thetable',1199);
});

$( "#teamweek" ).click(function(){
	removething (theshown,'.theteamweek');
	showthing('.theteamweek',1199);
	
});

$( "#fansitetext" ).click(function(){
	removething2 (theshown);
});


function showthing (show,www){
if ($(show).css("display") === "none"){
	
if (theshown !== ""){	
		setTimeout(function(){
			$('.wrap').animate(
			{width: www},
			{duration:600,step:function(now){$('.wrap').css('width', now);},
			complete: function() {
					$(show).css({
					opacity: 0,
					display: 'inline-block'     
					}).animate({opacity:1},800);
					}
			});

			theshown = show;
		}, 900);
} else{
	
$('.wrap').animate(
    {width: www},
    {duration:600,step:function(now){$('.wrap').css('width', now);},
	complete: function() {
			$(show).css({
			opacity: 0,
        	display: 'inline-block'     
    		}).animate({opacity:1},600);
	}
	
	
	});
	
	theshown = show;	
	
	
	
}
	
	
	
	
	
	
}
}

function removething2 (shown){
if (shown != "" ) {
	$(shown).css({
		opacity: 1,     
		}).animate({opacity:0},
		{duration:800, 
		complete: function() {
			$(shown).css('display', 'none');     
    		$('.wrap').animate(
    		{width: 500},
    		{duration:600,step:function(now){$('.wrap').css('width', now);}})
	
		;} });	
theshown = "";	
}
	

}

function removething (shown,fff){
if (shown != "" && shown != fff  ) {
	$(shown).css({
		opacity: 1,     
		}).animate({opacity:0},
		{duration:800, 
		complete: function() {
			$(shown).css({
			opacity: 0,
        	display: 'none'     
    		}).animate({opacity:1},800);
	}
		} );	
	
}
	

}


//complete: function() {
//			$(shown).css("display","none");
//			$('.wrap').animate(
//			{width: www},
//			600); }


/*
cant use this because chrome does not allow cross-origin :(


var myJSON;

$.getJSON( "teams.json")
});
*/

var myJSON = JSON.parse('{ "currentseason": "2016-2017", "week": "34", "teams": [{ "num": 1, "name": "Arsenal", "rank": 6, "points": 57 }, { "num": 2, "name": "Bournemouth", "rank": 16, "points": 35 }, { "num": 3, "name": "Burnley", "rank": 14, "points": 36 }, { "num": 4, "name": "Chelsea", "rank": 1, "points": 75 }, { "num": 5, "name": "Crystal Palace", "rank": 15, "points": 35 }, { "num": 6, "name": "Everton", "rank": 7, "points": 57 }, { "num": 7, "name": "Hull", "rank": 17, "points": 30 }, { "num": 8, "name": "Leicester", "rank": 12, "points": 37 }, { "num": 9, "name": "Liverpool", "rank": 3, "points": 66 }, { "num": 10, "name": "Manchester City", "rank": 4, "points": 64 }, { "num": 11, "name": "Manchester United", "rank": 5, "points": 60 }, { "num": 12, "name": "Middlesbrough", "rank": 19, "points": 24 }, { "num": 13, "name": "Southampton", "rank": 9, "points": 40 }, { "num": 14, "name": "Stoke City", "rank": 11, "points": 39 }, { "num": 15, "name": "Sunderland", "rank": 20, "points": 21 }, { "num": 16, "name": "Swansea", "rank": 18, "points": 28 }, { "num": 17, "name": "Tottenham", "rank": 2, "points": 71 }, { "num": 18, "name": "Watford", "rank": 10, "points": 40 }, { "num": 19, "name": "West Brom", "rank": 8, "points": 44 }, { "num": 20, "name": "West Ham", "rank": 13, "points": 37 } ], "bestxi": [{ "playername": "Pickford", "club": "Sunderland" }, { "playername": "Walker", "club": "Tottenham" }, { "playername": "Otamendi", "club": "Manchester City" }, { "playername": "van Dijk", "club": "Southampton" }, { "playername": "Rose", "club": "Tottenham" }, { "playername": "Mane", "club": "Liverpool" }, { "playername": "Pogba", "club": "Manchester United" },  { "playername": "Eriksen", "club": "Tottenham" }, { "playername": "Hazard", "club": "Chelsea" }, { "playername": "Lukaku", "club": "Everton" }, { "playername": "Sanchez", "club": "Arsenal" } ] }');






//Table!!!! finally:) :))))


$('.thetable').append('<li class="tabletop"><div class="tablebox1"><p>Pos</p></div><div class="tablebox2"><p>Club</p></div><div class="tablebox3"><p>Pts</p></div></li>');

for (var ii = 0; ii < 21; ii++) { 
	
	for (var jj = 0; jj < 20; jj++) { 
		
		if (myJSON.teams[jj].rank === ii){
		$('.thetable').append('<li class="tablething"><div class="tablebox1"><p>'+myJSON.teams[jj].rank+'</p></div><div class="tablebox2"><p>'+myJSON.teams[jj].name+'</p></div><div class="tablebox3"><p>'+myJSON.teams[jj].points+'</p></div></li>');	
		}

	}
}

$('.thetable li').filter('.tablething:even').addClass("tableeven");

$( ".thetable li div" ).mouseenter(function() {
    $(this).animate({
		opacity: 0.3,
    }, 150);
});


$( ".thetable li div" ).mouseleave(function() {
	$(this).animate({
		opacity: 1,
    }, 150);
});


//teamxiiiii:))))


for (var ij = 1; ij < 5; ij++) { $('.theteamweek').append('<div class="row row'+ij+'"></div>');	}

$('.row1').append('<div class="player"></div>');
for (var ij = 1; ij < 5; ij++) { $('.row2').append('<div class="player"></div>'); }
for (var ij = 1; ij < 5; ij++) { $('.row3').append('<div class="player"></div>'); }	
for (var ij = 1; ij < 3; ij++) { $('.row4').append('<div class="player"></div>'); }	
	
var wtf ;
var ijj = 0;
	
		$('.player').each( function() {
		
		$(this).append('<svg viewBox="0 0 223.86 260.94"><style>.cll-2{fill:#fff;opacity: 0.73;}</style></defs><g><polygon class="cll-2" points="223.86 196.21 223.86 66.75 112.06 2.28 0 66.75 0 196.21 112.06 260.94 223.86 196.21"/></g></svg><div class="pthing"><div class="pname">'+myJSON.bestxi[ijj].playername+'</div><div class="pclub">'+myJSON.bestxi[ijj].club+'</div></div>');
			
		ijj = ijj + 1;
		});



$( "polygon" ).mouseenter(function() {
	var the = $(this).closest('.player');

	$('.pname',the).css("color","#FFFFFF");
	$('.pclub',the).css("color","#3C235A");
    $({k:1}).animate(
    {k: 1.7},
	{duration:200,step:function(now){$(the).css("transform","scale("+now+")");}});
	$('polygon',the).animate({
		opacity: 0.4,
    }, 100);
	
	
			
});


$( "polygon" ).mouseleave(function() {
	var thee = $(this).closest('.player');
	
	$('.pname',thee).css("color","#3C235A");
	$('.pclub',thee).css("color","#FFFFFF");
	$({kk:1.7}).animate(
    {kk: 1.1},
	{duration:200,step:function(now){$(thee).css("transform","scale("+now+")");}});
	$('polygon',thee).animate({
		opacity: 0.73,
    }, 100);
	
	

});


 



//team:))))


//
//var $opv = 0;

$( "#box g" ).each(function () {
	var bbb = $(this).attr("class");
	$(this).attr("class",bbb+" tr");
	
});

$( "#box g" ).not('.mid').mouseenter(function() {
    $('polygon',this).animate({
		opacity: 0.2,
    }, 300);
	
	
	
	//$opv = $(this).css('opacity');
});


$( "#box g" ).not('.mid').mouseleave(function() {
	
	var $opv = 1;
	
	if($('polygon',this).is('.sst3')){
		$opv = 0.83;
	}
	else if($('polygon',this).is('.sst4')){
		$opv = 0.75;
	}
	else if($('polygon',this).is('.sst5')){
		$opv = 0.87;
	}
	else if($('polygon',this).is('.sst6')){
		$opv = 0.80;
	}
	
	$('polygon',this).animate({
		opacity: $opv,
    }, 300);
	
});

$( "#box g" ).filter('.mid').mouseenter(function() {
	var thisss = this;
	$({k:1}).animate(
    {k: 1.3},
	{duration:150,step:function(now){$(thisss).css("transform","scale("+now+")");},
	complete: function() {
		$({kk:1.3}).animate(
		{kk: 1},
		{duration:100,step:function(now){$(thisss).css("transform","scale("+now+")");}});
		}
	});
	
	$(thisss).children().each(function () {
			if ($(this).attr("class") === "sst25"){
		$(this).attr("class","sst2");
		}
		});
	
	 $('polygon:first',thisss).animate({
		opacity: 0.2,
    }, 300);
	
});





$( "#box g" ).filter('.mid').mouseleave(function() {
	var tthisss = this;
	
	
	$(tthisss).children().each(function () {
			if ($(this).attr("class") === "sst2"){
		$(this).attr("class","sst25");
		}
		});
	
	 $('polygon:first',tthisss).animate({
		opacity: 1,
    }, 300);
});


$( "#box g" ).mouseenter(function() {
	$('text', this).attr("display", 'auto');
	
	 var thethis = this;
		$({y:$('text tspan:first',this).attr('y')})
    	.animate(
    	{y: 0},
    	{duration:300,step:function(now){$('text tspan:first',thethis).attr('y', now);}});
		
	var thethis2 = this;
		$({z:$('text tspan:last',this).attr('y')})
    	.animate(
    	{z: 15},
    	{duration:300,step:function(now){$('text tspan:last',thethis2).attr('y', now);}});
		
});

$( "#box g" ).mouseleave(function() {
	$('text', this).attr("display", 'none');
	
	var thethis = this;
		$({y:$('text tspan:first',this).attr('y')})
    	.animate(
    	{y: 26},
    	{duration:300,step:function(now){$('text tspan:first',thethis).attr('y', now);}});
		
	var thethis2 = this;
		$({z:$('text tspan:last',this).attr('y')})
    	.animate(
    	{z: 41},
    	{duration:300,step:function(now){$('text tspan:last',thethis2).attr('y', now);}});
		
});


var hhh = 0;
$( "#box g" ).not('.mid').each(function() {
	var attrstr = $("text",this ).attr('transform');
	$("text",this ).attr('transform', attrstr+'translate(40,-4)');
	
	$('text', this).attr("display", 'none');
	$('text tspan:first',this).attr('y', "26");
	$('text tspan:last',this).attr('y', "41");
	
	var namestr = myJSON.teams[hhh].name;
	var a = namestr.indexOf(" ");
	if (a > -1 && namestr.length > 9){
	var upper = namestr.substring(0,a);
	var lower = namestr.substring(a,namestr.length);
	$("text tspan:first",this ).html(upper);
	$("text tspan:last",this ).html(lower);	
	}
	else{
	$("text tspan:first",this ).html(namestr);	
	}

	hhh = hhh+1;
});






	
	
	
	
	
	
	
	
	
	
	
	
