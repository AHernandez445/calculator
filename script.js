const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const point = document.getElementById("point");
const del = document.getElementById("del");

const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const equals = document.getElementById("equals");

const output = document.getElementById("output");
const newParagraph = document.createElement("p");

let displayArr = ["", " ", " "];
let arr = [];


function checkIfArrHasTwoNums(){
    numOne = arr[0];
    numTwo = arr[1];
    if (arr.length > 2){
        return true;
    }
    else{
        return false;
    }
}

function divideOperator(arr){
    numOne = arr[0];
    numTwo = arr[1];
    displayArr.push('÷');
    return numOne / numTwo;
}

function multiplyOperator(arr){
    numOne = arr[0];
    numTwo = arr[1];
    displayArr.push('x');
    return numOne * numTwo;
}

function minusOperator(arr){
    numOne = arr[0];
    numTwo = arr[1];
    displayArr.push('-');
    return numOne - numTwo;
}

function addOperator(arr){
    numOne = arr[0];
    numTwo = arr[1];
    displayArr.push('+');
    return numOne + numTwo;
}

function checkWhatOperator(){
    if(displayArr[1] = " "){
        return 'ERROR';
    }
}
function equalsOperator(){
    if(displayArr[1])
}



newParagraph.textContent = `${displayArr[0]} ${displayArr[1]} ${displayArr[2]}`;
output.appendChild(newParagraph);

