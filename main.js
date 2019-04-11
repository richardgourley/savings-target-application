function CalculatePrint(years){
	this.years = years;

	this.calculateOutput = function(inputValue){
		let outputString = "";
		outputString += `<h3>To save $${inputValue} you would need to save:</h3>`;
		for(i=0; i<years.length; i++){
			mths = years[i] * 12;
			mthTarget = (inputValue/mths).toFixed(2);
			outputString += `<p>$${mthTarget} per month for ${mths} months.</p>`;
		}
        this.printResults(outputString);
	}

	this.printErrorMessage = function(message){
		displayResultsDiv.innerHTML = "<h1>" + message + "</h1>";
	}

	this.printResults = function(outputString){
		displayResultsDiv.innerHTML = "<h1>" + outputString + "</h1>";
	}
	
} 

function Validate(inputValue){
    this.inputValue = inputValue;

	this.validateInput = function(){
        if(isNaN(this.inputValue)) return "Your input is not a valid number"; 
        if(this.inputValue <= 0) return "Your input must be greater than 0";
        return "valid";
	}
}

var input = document.getElementById("savingsTargetInput");
var button = document.getElementById("calcMonthlyTargetBtn");
var displayResultsDiv = document.getElementById("displayResults");

//array of number of years added to function constructor
var calcPrint = new CalculatePrint([0.5,1,2,3,4,5,10]);

button.onclick = function(){
	var validate = new Validate(input.value);
	if(validate.validateInput() == "valid"){
        calcPrint.calculateOutput(input.value);
	}else{
        calcPrint.printErrorMessage(validate.validateInput());
	}
}











