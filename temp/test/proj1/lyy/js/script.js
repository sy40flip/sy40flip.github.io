$('nav a').on('click', function(e){
	updateContent();

	});
 
$.getJSON('data.json', function (data){
	var output = '<ul>';
	
	//first time define use =, add thing use +=
	$.each(data, function(key,val){
		output += '<li>';
		output += '<h4>' + val.title + '</h4>';
		output += '<p>'+ val.student + '</p>';
		output += '<p>'+ val.type + '</p>';
	output += '<img src="img/' + val.shortname + '.jpg"/>';
		output += '</li>';


	});
	output +='</ul>';
	$('.artwork').html(output);
updateContent();
	});






//iphone reminder
//fade in list item one by one
$(function(){
	var $newItemForm = $('#newItemForm');
	var $newItemButton = $('#newItemButton');
	var $list = $('.comment ul');
	var item = '';
	
	$('.comment li')
	.hide()
	.each(function(index){
		$(this).delay(450*index).fadeIn(1600);
		});
	
	//setup the initial UI
	$newItemButton.show();
	$newItemForm.hide();
	$('#showForm').on('click',function(){
		$newItemButton.hide();
		$newItemForm.show();
		});
		
	//add the item to the list
	$newItemForm.on('submit',function(e){
		e.preventDefault();
		var text = $('input:text').val();
		$list.append('<li>' + text +'</li>');
		$('input:text').val('');
		updateCount();
		
		});
		
	
	//update the counter
	function updateCount(){
	var items = $('li').length;
	$('#counter').text(items);
	}
	updateCount();
});

function updateContent(){
	e.preventDefault();
	$('#container').remove();
	$('#content').load(this.href +' #container')
	.hide()
	.fadeIn('slow');
}

//countdown
var today = new Date();
var theExpiryDate = new Date(2017,05,10,00,00,00);

function daysToGo(){
	var howManyDays = theExpiryDate.getTime() - today.getTime();
	howManyDays = howManyDays /24/60/60/1000;
	return howManyDays;
}
console.log(daysToGo());

document.getElementById('releaseDate').innerHTML = '<p>' +  Math.ceil(daysToGo())+ ' Days to go'+'</p>';

var myNode = document.querySelector('.artworks ul'); //pixgrid ul
myNode.addEventListener('click', function(e){
	if(e.target.tagName === 'IMG'){
		// add black overlay
		var myOverlay = document.createElement('div');
		myOverlay.id = 'overlay';
		document.body.appendChild(myOverlay);
		myOverlay.style.position = 'absolute';
		myOverlay.style.top = 0;
		myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
		myOverlay.style.width = window.innerWidth + 'px';
		myOverlay.style.height = window.innerHeight +'px';
		//set the position for top left in relation to current scroll position
		myOverlay.style.top = window.pageYOffset +'px';
		myOverlay.style.left = window.pageXOffset +'px';
		//console.log(e);
		
		//add the big image
		var imageSrc = e.target.src;
		var largeImage = document.createElement('img');
		largeImage.id = 'largeImage';
		largeImage.src = imageSrc.substr(0, imageSrc.length-7) +'.jpg';
		largeImage.style.display = 'block';
		largeImage.style.position = 'absolute';
		
		largeImage.addEventListener('load',function(){
			//resize the image if it is taller
			if (this.height > window.innerHeight){
				this.ratio = window.innerHeight / this.height;
				this.height = this.ratio*this.height;
				this.width = this.ratio*this.width;
			}
			//resize the image if it is wider
			if (this.width > window.innerWidth){
				this.ratio = window.innerWidth / this.width;
				this.height = this.ratio*this.height;
				this.width = this.ratio*this.width;
			}
			
			// centre the image
			centerImage(this);
			/*var myDifX = (window.innerWidth - this.width)/2;
			var myDifY = (window.innerHeight - this.height)/2;
			this.style.top = myDifY + 'px';
			this.style.left = myDifX + 'px';*/
			myOverlay.appendChild(largeImage);
		
		//remove the image when click the image itself
		myOverlay.addEventListener('click', function(){
			if(myOverlay){
				window.removeEventListener('resize',window,false);
				window.removeEventListener('scroll',window,false);
				myOverlay.parentNode.removeChild(myOverlay);
			}
		},false)

		}