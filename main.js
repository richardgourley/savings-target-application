function CalculatePrint(years){
	this.years = years;

	this.calculateMonthlyTargets = function(){

	}

	this.printResults = function(){
        
	}
	
} 

function Validate(inputValue){
    this.inputValue = inputValue;

	this.validateInput = function(){
        if(this.inputValue) return true; 
        else return false; 
	}
}

var input = document.getElementById("savingsTargetInput");
var button = document.getElementById("calcMonthlyTargetBtn");
var displayResultsDiv = document.getElementById("displayResults");

//array of number of years added to function constructor
var calcPrint = new CalculatePrint([0.5,1,2,3,4,5,10]);


button.onclick = function(){
	var validate = new Validate(input.value);
	console.log(validate.validateSetInput());
}











