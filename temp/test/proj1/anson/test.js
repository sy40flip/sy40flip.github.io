/*document.getElementById('cart-hplus').addEventListener('submit',estimateTotal);

function estimateTotal(event){
	event.preventDefault();
	//prevent auto refresh
	console.log('u submit a form');


document.getElementById('cart-hplus').addEventListener('submit',estimateTotal);

function estimateTotal(event){
	event.preventDefault();
	if (document.getElementById('s-state').value===' '){
		document.getElementById('s-state').focus();
}
}*/

document.addEventListener('DOMContentLoaded', stateInit);
var btnEstimate = document.getElementById('btn-estimate');


function stateInit(){
	document.getElementById('cart-hplus').addEventListener('submit',estimateTotal);
	
}

function estimateTotal(event){
event.preventDefault();
	
	var food = parseInt(document.getElementById('txt-q-food').value) ||0;
	var JP = parseInt(document.getElementById('txt-q-JP').value) ||0;
	var CUT_DOG_MALE = parseInt(document.getElementById('txt-q-Cut_Dog_M').value) ||0;
	var CUT_DOG_Fe = parseInt(document.getElementById('txt-q-Cut_Dog_F').value) ||0;
	var CUT_CAT_MALE = parseInt(document.getElementById('txt-q-Cut_Cat_M').value) ||0;
	var CUT_CAT_FE = parseInt(document.getElementById('txt-q-Cut_Cat_F').value) ||0;
	var Niddle = parseInt(document.getElementById('txt-q-Niddle').value) ||0;
	var Worms = parseInt(document.getElementById('txt-q-worms').value) ||0;
	var CarryOut = parseInt(document.getElementById('txt-q-carry').value) ||0;
	var pi = parseInt(document.getElementById('txt-q-pi').value) ||0;
	var pisand = parseInt(document.getElementById('txt-q-pisand').value) ||0;
	var hair = parseInt(document.getElementById('txt-q-hair').value) ||0;
	var totalQty = food + JP + CUT_DOG_MALE +CUT_DOG_Fe + CUT_CAT_MALE + CUT_CAT_FE + Niddle + Worms + CarryOut + pi+ pisand;
	
	var totalItemPrice = (650*food) + (1000*JP) + (2000*CUT_DOG_MALE) + (2500*CUT_DOG_Fe)+ (1200*CUT_CAT_MALE)+ (3000*CUT_CAT_FE)+ (750*Niddle) + (100*Worms) + (700*CarryOut) +(700*pi) + (350*pisand) + (1000*hair);
	
	var estimate = '$' + (totalItemPrice);
	document.getElementById('txt-estimate').value = estimate;
	
	
	var result = document.getElementById('results');

}