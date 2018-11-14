//input box
var input = document.getElementById('savingsInput');
//button
var btn = document.getElementById('savingsBtn');
//event listener added to btn variable.
btn.addEventListener("click", startApp);
//displayResults Div
var displayRes = document.getElementById('displayResults');

//startApp called when button is clicked.
function startApp(){
    let inputText = input.value;
    //data validation - checking if data is a number and higher than 0.
    if(isNaN(inputText) || inputText<0){
        displayRes.innerHTML = "<h3>The data you have entered is either a) not a number or b)less than zero.  Please check and try again!";
    }else{
        //if data is valid, we pass data to print results function.
        printResults(inputText);
    }
}

function printResults(input){
    
    let printStr = "";
    printStr += "<h3>To hit your target of $" + input;
    printStr += ", you would need to save: </h3>";
    //array storing month values
    let arrMonths = [6,12,24,36,48,60];
    //loop throught the array and concatenate the string for each value in array.
    for(i=0; i<arrMonths.length; i++){
        
        //Calculate month length in weeks
        weeks = (arrMonths[i] / 6) * 26;
        /*printStr += "<h3>To hit your target of $" + input;
        printStr += " in " + $months + " MONTHS";
        printStr += ", you would need to save: ";
        printStr += "$" + (input/months).toFixed(2);
        printStr += " every month </h3>";
        //printStr += "<p>" + "Testing" + "</p>";
        */
        printStr += "<h4><strong>$";
        printStr +=  (input/arrMonths[i]).toFixed(2);
        printStr += " per month, for " + arrMonths[i] + " months</strong>";
        printStr += ". Or $";
        printStr += (input/weeks).toFixed(2);
        printStr += " per week, for " + weeks + " weeks</h4>";
    } 
    displayRes.innerHTML = printStr;
}

//Extra challenges:
//Allow users to change currency!
//Allow users to add, remove month lengths for longer or shorter saving periods.


