// Assign variables to the HTML elements we want to target //

var nums = document.getElementsByClassName('num');
var clear = document.querySelector('#clear');
var calculationField = document.querySelector('#calculation_field');
var equal = document.querySelector('#equal');

// Add event listeners to each button to run function when clicked //

for (var num of nums) {
  num.addEventListener('click', addToEquation);
}
clear.addEventListener('click', clearField);
equal.addEventListener('click', computeEquation);

// Create an empty array to hold the values put in the calc field //

let storedEquation = "";

// function adds the value of the pressed button to the calcuation field as well as the stored equation //

function addToEquation (e){
  if (this.textContent === "x") {
    storedEquation += "*";
    calculationField.textContent += "*";
  } else {
    storedEquation += this.textContent;
    calculationField.textContent += this.textContent;
  }
}

//Function clears the content in the calculationField and the stored equation //

function clearField () {
  calculationField.textContent = "";
  storedEquation = [];
}

// Upon pressing equal, run the stored equation, but first make sure that the string is evaluated as an equation //

function computeEquation () {
  storedEquation = eval(storedEquation);
  calculationField.textContent  = storedEquation;
}
