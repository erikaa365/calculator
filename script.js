

//Display elements
let inputDisplay = document.getElementById('currentInput');
let resultDisplay = document.getElementById('currentResult');

//Input buttons (numbers and operands)
const inputBtns = document.querySelectorAll('.input');
inputBtns.forEach(button => button.addEventListener('click', () =>  append(button.textContent)));

//Get input values and display them
function append(number){
    if(tempResult){
        inputDisplay.textContent = result + number;
        tempResult = undefined;
    }
    else{
        if(inputDisplay.textContent == '' && number == '0'){
            inputDisplay.textContent += '0.';
        }
        else{
            inputDisplay.textContent += number;
        }
    }
}

//Equation
let result;
let tempResult;

const equal = document.getElementById('equal');
equal.onclick = () => equation();

function equation(){
    result = eval(inputDisplay.textContent);
    tempResult = result;
    resultDisplay.textContent = result;
}

//Delete
const del = document.getElementById('delete');
del.onclick = () => deleteBtn();

function deleteBtn(){
    const currentDisplay = inputDisplay.textContent;
    const newDisplay = currentDisplay.substring(0, (currentDisplay.length - 1));
    inputDisplay.textContent = newDisplay;
}

//Clear
const clear = document.getElementById('clear');
clear.onclick = () => clearBtn();

function clearBtn(){
    inputDisplay.textContent = '';
    resultDisplay.textContent = '';
    result = 0;
}
