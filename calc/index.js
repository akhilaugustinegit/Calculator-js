const display = document.getElementById("display");

function appendToDisplay(input){

    display.value += input;  // Adds the new character to
}

function clearDisplay(){
    display.value ="";
}

function calculate(){

    try{
    display.value =eval(display.value);
    }
    catch(err) {
        display.value ="Error";
    }
}