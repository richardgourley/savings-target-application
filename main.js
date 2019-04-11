function CalculatePrint(years){
	this.years = years;

    this.validateSetInput = function(inputValue){

    }

	this.calculateMonthlyTargets = function(){

	}

	this.printResults = function(){
        
	}
	
} 

var input = document.getElementById("savingsTargetInput");
var button = document.getElementById("calcMonthlyTargetBtn");

var calcPrint = new CalculatePrint([0.5,1,2,3,4,5,10]);

button.onclick = function(){
	myClass.validateSetInput(input.value);
}











