const defaltResult = 0;
let currentResult = defaltResult;
let logEntries = [];

/*tudo dentro disso
é um comentario
tadammm
*/
// Gets input from input field
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescripton = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescripton); // from vendor file
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult)
    {
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntry);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (calculationType !== "SOMAR" &&
    calculationType !== "SUBTRAIR" &&
    calculationType !== "MULTIPLICAR" &&
    calculationType !== "DIVIDIR" ||
    !enteredNumber){
        return
    }

//    if (calculationType === "SOMAR" ||
//    calculationType === "SUBTRAIR" ||
//    calculationType === "MULTIPLICAR" ||
//    calculationType === "DIVIDIR"){
       
        const initialResult = currentResult;
        let mathOperator;
        if (calculationType === "SOMAR") {
            currentResult += enteredNumber;
            mathOperator = "+";
        } 
        else if(calculationType === "SUBTRAIR") {
            currentResult -= enteredNumber;
            mathOperator = "-";
        }
        else if(calculationType === "MULTIPLICAR") {
            currentResult *= enteredNumber;
            mathOperator = "*";
        }
        else if(calculationType === "DIVIDIR") {
            currentResult /= enteredNumber;
            mathOperator = "/"
        }
        createAndWriteOutput(mathOperator, initialResult, enteredNumber);
        writeToLog(calculationType, initialResult, enteredNumber, currentResult);
    
    }

    
//}

function somar(){
    calculateResult("SOMAR");
}

function subtrair(){
    calculateResult("SUBTRAIR");

}

function multiplicar(){
    calculateResult("MULTIPLICAR");

}

function dividir() {
    calculateResult("DIVIDIR");

}


addBtn.addEventListener("click", somar);
subtractBtn.addEventListener("click", subtrair);
multiplyBtn.addEventListener("click", multiplicar);
divideBtn.addEventListener("click", dividir);