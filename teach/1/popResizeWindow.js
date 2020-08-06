// JavaScript Document

/* resize and reposition the browser */
function openWin(theWin, width, height) {
	/*var width = 1024;
    var height = 820;*/
	myWindow = window.open(theWin, "myWindow",  "location=no", "menubar=no", "status=no", "titlebar=no", "toolbar=no",  "resizable=no", "scrollbars=yes");
	myWindow.resizeTo(width, height);
	myWindow.moveTo(((screen.width - width) / 2), ((screen.height - height) / 2));   
	
}
