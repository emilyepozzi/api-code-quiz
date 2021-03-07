var score = 0;
var timer = 75;
var questionsAndAnswers = [
   { question: 'Commonly used data types DO NOT include which of the following?', options:['Boolean', 'Strings', 'Alerts', 'Numbers'], answer:'Boolean'},
   { question: 'Arrays in JavaScript can be used to store _____?', options:['numbers and strings','other arrays', 'booleans', 'all of the above'], answer: 'all of the above'},
   { question: 'Do you love to code?', ['No','Yes', 'Hell Yeah', 'No'], answer: 'Hell Yeah'},
   { question: 'What`s the best programming language?', ['Javascript','C#', 'Php', 'Python'], answer: 'Javascript'},
   { question: 'Is Emily Pozzi Awesome?', ['Yas','No', 'Maybe', 'She`s okay'], answer: 'Yas'}
];

for (let index = 0; index < questionsAndAnswers.length; index++) {
  newFunction();
}

var questionTest = document.createElement('button')
questionTest.innerHTML = questionsAndAnswers