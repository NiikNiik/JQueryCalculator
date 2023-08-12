$(document).ready(function(){
    let result = 0;
    let prevEntry = 0;
    let operation = null;
    let currentEntry = '0';
    updateScreen(result);

    $('.button').on('click',function(evt){
        let buttonPressed = $(this).html();
        console.log(buttonPressed)
    

    if(buttonPressed === "C"){
        result = 0;
        currentEntry = '0';
    }else if(buttonPressed === "CE"){
        currentEntry = '0';
    }else if (buttonPressed === "back"){
        currentEntry = currentEntry.substring(0, currentEntry.length -1)
    } else if(buttonPressed === "+/-"){
        currentEntry *= -1;
    } else if(buttonPressed === '.'){
        currentEntry += '.';
    }else if (isNumber(buttonPressed)){
        if (currentEntry === '0')currentEntry = buttonPressed;
        else currentEntry = currentEntry.buttonPressed;
    } else if(isOpertor(buttonPressed)){
        prevEntry = parseFloat(currentEntry)
        operation = buttonPressed;
        currentEntry = '';
    } else if (buttonPressed === "%"){
        currentEntry = currentEntry/100;
    } else if (buttonPressed === "sqrt"){
        currentEntry = Math.sqrt(currentEntry)
    } else if (buttonPressed === "1/x"){
        currentEntry = 1/currentEntry
    } else if (buttonPressed === "pi"){
        currentEntry = Math.PI;
    } else if (buttonPressed === "="){
        currentEntry = operate(prevEntry, currentEntry, operation)
        operation = null;
    }
    updateScreen(currentEntry)
});

});

let updateScreen = function(displayValue){
    displayValue = displayValue?.toString();
    $('.screen').html(displayValue?.substring(0,10));
};

let isNumber = function(value){
    return !isNaN(value)
}

let isOpertor = function(value){
    return value === '/' || value === '*' || value === '+' || value === '-';
}

let operate = function(a,b, operation){
    a = parseFloat(a)
    b = pareseFloat(b)
    console.log(a,b, operation)
    if (operation === '+') return a+b;
    if (operation === '-') return a-b;
    if (operation === '*') return a*b;
    if (operation === '/') return a/b;
}