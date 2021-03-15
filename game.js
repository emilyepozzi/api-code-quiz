var questions = [
    { question: 'Commonly used data types DO NOT include which of the following?', options:['Boolean', 'Strings', 'Alerts', 'Numbers'], answer:'Boolean'},
    { question: 'Arrays in JavaScript can be used to store _____?', options:['numbers and strings','other arrays', 'booleans', 'all of the above'], answer: 'all of the above'},
    { question: 'Do you love to code?', options:['No','Yes', 'Hell Yeah', 'No'], answer: 'Hell Yeah'},
    { question: 'What`s the best programming language?', options:['Javascript','C#', 'Php', 'Python'], answer: 'Javascript'},
    { question: 'Is Emily Pozzi Awesome?', options:['Yas','No', 'Maybe', 'She`s okay'], answer: 'Yas'}
 ];

// vars to keep track of
var time = questions.length * 10;
var currentQuestionIndex = 0;

//vars for Dom Elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var timer;

//start quiz page
function startQuiz() {
  var startScreen = document.getElementById("start-screen");
  startScreen.setAttribute("class", "hide"); //hides the start screen
  questionsEl.removeAttribute("class"); //brings up the questions element 
  timer = setInterval(clockTick, 1000);

  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.question; //brings up question property with .question
  choicesEl.textContent = "";
  console.log(currentQuestion);
  currentQuestion.options.forEach(function (choice, i) {
    var c = document.createElement("button");
    //c.setAttribute('class', 'choice');
    c.setAttribute("value", choice);
    c.textContent = i + 1 + "." + choice;
    c.onclick = choiceClick; //brings up choice butttons 
    choicesEl.append(c);
  });
}

function choiceClick () {

}

function quizEnd() {
  clearInterval(timer);
  var endEl = document.getElementById("end-screen");
  endEl.removeAttribute("class");

  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
}

function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighScore() {

}

startBtn.onclick = startQuiz;
submitBtn.onclick = saveHighScore;