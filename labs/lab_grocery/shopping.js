/*
 * Filename:    shopping.js
 * Description: Grocery List 
 * Author:      Gonzalo Garcia
 */

'use strict'
// CREATE YOUR GLOBAL GROCERY LIST ARRAY
const list = [];

// Global Object Constructor / Class Syntax


// Event Listener to Process Form Submission
const elForm = document.getElementById('grocery_form');
elForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
const elText = document.getElementById('texts');
alert(elText.value);
list.push(elText.value);

const elNumber = document.getElementById('number');
alert(elNumber.value);
list.push(elNumber.value);

const elSelect = document.getElementById('category');
let currentValue = elSelect.options[elSelect.selectedIndex].value;
alert(currentValue);
list.push(elSelect.value);

Update(list);

elForm.reset();
});

// Event Listener to Handle Removal of First Item


// Event Listener to Handle Removal of Last Item


// Function to Update the Text of the List

function Update(list) {
  const elUL = document.querySelector('ul');
  let htmlString = '';
  for (let value of list) {
      htmlString += '<li>${value}</li>';
  } 
  elUL.innerHTML = htmlString;
}