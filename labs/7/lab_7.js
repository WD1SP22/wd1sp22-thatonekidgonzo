/*
 * Filename:    lab_7.js
 * Description: A simple quiz that uses arrays and functions
 * Author:      Luke Sathrum / Gonzalo Garcia
 */
"use strict";

// Create a score variable and set to 0
  let score = 0;
  

/* Create a function that outputs the questions/answers in your object
 * You will probably want to write this function AFTER you write the rest of the code
 * Has a single parameter which is a question/answer object
 * In the function
 * -Use a prompt() to ask the question to the user
 * -To compare: if(result_of_prompt == question_answer)
 * -- If they get the question right increment the count and inform the user.
 *    Use the alert() function to inform the user
 * -- If they get the question wrong inform the user using alert()
 * -Use HTML to output the question, the user's answer, and the correct answer
 */

function askAnswer(questionObject) {
  
  // 1) use prompt() to ask the questionObject.question and store the result
  
  // 2) if (result_of prompt == questionObject.answer)
  //    use alert() to inform user they are correct
  //    Increment your score variable

  // 3) else
  //    use alert() to inform the user that they are incorrect

  // 4) document.write the question, user's answer, and correct answer.
   
   let input = prompt(questionObject.question);
   
   document.write(`<p>${questionObject.question}</p>`);
   if (input === questionObject.answer) {
   	document.write("<p>CORRECT!! Good Job smarty pants</p>");
   	score++;
   } else {
   	document.write("<p>INCORRECT!! Sorry thats wrong, you awake?</p>");
   }
 
   document.write("You answered: " + " " + input);
   document.write(" Correct answer is: " + questionObject.answer);
}
// Create an array to store at least 5 questions. Each question should have a
// numeric answer.
// Since every question has also has an answer each item of the array will be 
// an object with the first key being the question and the second key being the
// answer
var questions = [ {
					question: 'How many inches in a foot?',
					answer: '12'
				  },
				  {
					question: 'What year are we in currently?',
					answer: '2022'
				  },
				  {
					question: 'How many ninja turtles are there?',
					answer: '4'
				  },
				  {
					question: 'How old is the person that programmed this?',
					answer: '31'
				  },
				  {
					question: 'How many moons does Saturn have?',
					answer: '82'
				  }
				];

// Use the following loop to loop through each question
for (let questionObject of questions) {
   askAnswer(questionObject);
  
  // Call your askAnswer function and pass in an item (the questionObject) of
  // the array 
}

// Output to the user via HTML the number of questions they got right out of the
// total.
// Get the total using the .length property of the array
  document.write("<p>WOW you got " + score + " out of 5 AMAZING!</p>");
// USE document.write()
