/*
 * Filename:    shopping.js
 * Description: Grocery List 
 * Author:      Gonzalo Garcia
 */

'use strict'
// CREATE YOUR GLOBAL GROCERY LIST ARRAY
const list = [];

// Global Object Constructor / Class Syntax
function Item(category, texts, number) {
    this.category = category;
    this.texts = texts;
    this.number = number;
}

// Event Listener to Process Form Submission
const elForm = document.getElementById('grocery_form');
elForm.addEventListener('submit', function(e) {
    e.preventDefault();

const elSelect = document.getElementById('category');
let currentValue = elSelect.options[elSelect.selectedIndex].value;
alert(currentValue);
//list.push(elSelect.value);
   
const elText = document.getElementById('texts');
alert(elText.value);
//list.push(elText.value);

const elNumber = document.getElementById('number');
alert(elNumber.value);
//list.push(elNumber.value);

list.push(new Item(currentValue, elText.value, elNumber.value));


Update();

console.log(list);          

            
elForm.reset();

return false;
});

// Event Listener to Handle Removal of First Item
const elFirst = document.getElementById('first');
elFirst.addEventListener('click', function() {
    //delete 
    console.log('trying to remove first item');
    list.shift();
    Update();
});

// Event Listener to Handle Removal of Last Item
const elSecond = document.getElementById('second');
elSecond.addEventListener('click', function() {
    console.log('trying to remove last item');
    list.pop();
    Update();
});

// Function to Update the Text of the List

function Update() {
  const elUL = document.querySelector('ul');
  let htmlString = '';
  for (let value of list) {
      htmlString += `<li>${value.category}</li>`;
      htmlString += `<li>${value.texts}</li>`;
      htmlString += `<li>${value.number}</li>`;
  } 
  elUL.innerHTML = htmlString;
}