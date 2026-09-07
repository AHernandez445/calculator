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

const calculator = document.getElementById("calculator");

const output = document.getElementById("output");
const newParagraph = document.createElement("p");

let displayArr = ["", "", ""];


function checkIfArrHasTwoNums(){
    numOne = displayArr[0];
    numTwo = displayArr[2];
    if (arr.length > 2){
        return true;
    }
    else{
        return false;
    }
}

function divideOperator(){
    numOne = displayArr[0];
    numTwo = displayArr[2];
    return numOne / numTwo;
}

function multiplyOperator(){
    numOne = displayArr[0];
    numTwo = displayArr[2];
    return numOne * numTwo;
}

function minusOperator(){
    numOne = displayArr[0];
    numTwo = displayArr[2];
    return numOne - numTwo;
}

function addOperator(){
    numOne = displayArr[0];
    numTwo = displayArr[2];
    return parseFloat(numOne) + parseFloat(numTwo);
}

function equalsOperator(){
    let result;
    if(displayArr[1] === "÷"){
        result = divideOperator();
        displayArr = [result, " ", " "];
        return newParagraph.textContent = displayArr.join(" ");
    }
    else if(displayArr[1] === "x"){
        result = multiplyOperator();
        displayArr = [result, " ", " "];
        return newParagraph.textContent = displayArr.join(" ");
    }
    else if(displayArr[1] === "-"){
        result = minusOperator();
        displayArr = [result, " ", " "];
        return newParagraph.textContent = displayArr.join(" ");
    }
    else if(displayArr[1] === "+"){
        result = addOperator();
        console.log(result);
        displayArr = [result, " ", " "];
        return newParagraph.textContent = displayArr.join(" ");
    }
}
// event listener for whole calc so that i dont have to put one for each num and opp
calculator.addEventListener("click", (event) => {
// checks and assigns to button whatever was just clicked
    const button = event.target.closest(".numClass, .operatorClass");
// stops the process if a button wasn't clicked because it will still activate if the container was clicked
    if (!button) return;
    //makes the delete button work
    if(button.id === "del"){
        displayArr = ["", "", ""];
        arr = [];
        newParagraph.textContent = "";
        return;
    }
    //makes the equals button work
    else if(button.id === "equals"){
        equalsOperator();
        return;
    }

//removes any extra spacing the it may have accidentally assigned to the button var
    const value = button.textContent.trim();
// if it is an operator that was clicked it will make sure that it gets assigned correctly
    if(button.classList.contains("operatorClass")){
        displayArr[1] = value;
        console.log(displayArr);
    }
    else{
        if(displayArr[1])
        {
            displayArr[2] += value;
        }
        else{
            displayArr[0] += value;
        }
        console.log(value);
    }

newParagraph.textContent = displayArr.join(" ");
if (!output.contains(newParagraph)) output.appendChild(newParagraph);
})
console.log(1.5 + 2.5);