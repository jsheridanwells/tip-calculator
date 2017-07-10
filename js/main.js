var billBox = document.getElementById('bill-amount');
var buttons = document.getElementsByTagName('li');
var tipBox = document.getElementById('tip-amount');
var totalBox = document.getElementById('total');

var tipPercent = 0;
var bill = 0;
var tip = 0;
var total = 0; 

function calculate() {
	bill = parseInt(billBox.value);  //  capture bill amount entered by user
	tipPercent = this.id;	//  capture tip amount user clicks on
	tip = bill * tipPercent;//  multiply bill by tip percent
	total = tip + bill; //  add tip to bill amount for total
	showTotals();
}

function showTotals() {
	tipBox.innerText = tip.toFixed(2);  //  show tip amount
	totalBox.innerText = total.toFixed(2);  //  show total amount
}

//user clicks on tip amount
for(var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', calculate);
}