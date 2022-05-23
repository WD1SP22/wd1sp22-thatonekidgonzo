/*
 * Filename:    script.js
 * Description: FAQ
 * Author:      Gonzalo Garcia
 */

'use strict'

const faq = [];


function Info(textone, answer) {
    this.textone = textone;
    this.answer = answer;
}


const elForm = document.getElementById('faq');
elForm.addEventListener('submit', function(e) {
e.preventDefault();

const elQuestion = document.getElementById('textone');
   
const elAnswer = document.getElementById('answer');

faq.push(new Info(elQuestion.value, elAnswer.value));

Update();

});
      const button = document.createElement('button');
      button.innerText = 'Toggle Answer';

function Update() {
  const elOL = document.querySelector('ol');
  let htmlString = '';
  for (let value of faq) {
      htmlString += `<li><h3>${value.textone}</h3></li>`;
      document.body.appendChild(button);
      //figure out how to add a button
      htmlString += `<h4>${value.answer}</h4>`;
  } 
  elOL.innerHTML += htmlString;
}