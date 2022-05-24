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
      //const button = document.createElement('button');
      //button.innerText = 'Toggle Answer';

function Update() {
  const elOL = document.querySelector('ol');
  let htmlString = '';
  for (let value of faq) {
      htmlString += `<li>
                       <h3>${value.textone}</h3>
                       <button onclick="toggle();">Toggle Answer</button>
                       <h4 hidden>${value.answer}</h4>
                    </li>`;
  } 
  elOL.innerHTML += htmlString;
}

/* FAQ ends here */

/* Event listener for clicking */

let element = document.getElementById("button");
let hidden = element.getAttribute("hidden");


for (let el of element) {
    element.addEventListener('click', function() {
       toggle(); 
    });
}

function toggle() {
    if (hidden) {
        element.removeAttribute("hidden");
    } else {
        element.setAttribute("hidden", "hidden");
    }
}

