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

// faq.push(new Info(elQuestion.value, elAnswer.value));

Update(new Info(elQuestion.value, elAnswer.value));
elForm.reset();

});
      //const button = document.createElement('button');
      //button.innerText = 'Toggle Answer';

function Update(value) {
  const elOL = document.querySelector('ol');
  let htmlString = '';
//   for (let value of faq) {
      htmlString += `<li>
                       <h3>${value.textone}</h3>
                       <button>Toggle Answer</button>
                       <h4 hidden="hidden">${value.answer}</h4>
                    </li>`;
//   } 
  elOL.innerHTML += htmlString;
//   let el = document.querySelector('ol li:last-child button');
//   console.log(el);
    let element = document.getElementsByTagName("button");
    for (let el of element) {
        el.addEventListener('click', function() {
        toggle(el); 
        });
    }
}

/* FAQ ends here */

/* Event listener for clicking */

let element = document.getElementsByTagName("button");


for (let el of element) {
    el.addEventListener('click', function() {
       toggle(el); 
    });
}

function toggle(el) {
    let hidden = el.nextElementSibling.getAttribute("hidden");
    
    console.log(hidden);
    if (hidden == "hidden") {
        el.nextElementSibling.removeAttribute("hidden");
    } else {
        el.nextElementSibling.setAttribute("hidden", "hidden");
    }
}

