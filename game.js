// vars to keep track of 
var time = questions.length * 10;
var currentQuestionIndex = 0;

//vars for Dom Elements


function startQuiz () {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    questionsEl.removeAttribute('class');

    timer = setInterval(clockTick, 1000)

    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
var titleEl = document.getElementById("question-title");
titleEl.textContent = currentQuestion.title;
choicesEl.textContent = "";
currentQuestion.choices.forEach(function(choice, i) {
    vat c = document.createElement("button");
    //c.setAttribute('class', 'choice');
    c.setAttribute('value', choice);
    c.textContent = i + 1 + "." + choice;
    c.onclick = choiceClick;
    choiceEl.append(c);
});
}

function quizEnd() {
clearInterval(timer);
var endEl = document.getElementById("end-screen");
endEl.removeAttribute("class");

var finalScoreEl.textContent = document.getElementById("final-score");
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