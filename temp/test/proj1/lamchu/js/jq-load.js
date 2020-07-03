$('nav a').on('click', function(e) {
	//e.preventDefault();
	
	/*$('#container').remove();
	$('#content').load(this.href+ ' #container')
	.hide()
	.fadeIn('slow');*/
	
	//change the look of button
	$('nav a.current').removeClass('current');
	$(this).addClass('current');
});