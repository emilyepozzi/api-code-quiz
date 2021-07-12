var qsEl = document.querySelector("#questions");
var timeEl = document.querySelector("#time");
var choices = document.querySelector("#choices");
var submit = document.querySelector("#submit");
var start = document.querySelector("#start");
var highscoreIn = document.querySelector("#initials");
var feedbackToMe = document.querySelector("#feedback");
var currentQsInd = 0;
var time = questions.length * 6;
var timer;

function startingQuizTime() {
  //start quiz hide till start
  var startScr = document.getElementById("start-screen");
  startScr.setAttribute("class", "hide");
  qsEl.removeAttribute("class");
  timer = setInterval(clockTick, 1000);
  timeEl.textContent = time;
  getQs();
}

function getQs() {
  var currentQs = questions[currentQsInd];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQs.title;
  choices.innerHTML = "";

  //going over the choices
  currentQs.choices.forEach(function (choice, i) {
    //making a new button for every choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    //having clicks for each choices
    choiceNode.onclick = questionClick;
    choices.appendChild(choiceNode);
  });
}

function questionClick() {
  //checking if the user quessed wrong
  if (this.value !== questions[currentQsInd].answer) {
    //time penalization
    time -= 5;

    if (time < 0) {
      time = 0;
    }
    // display new time on page
    timeEl.textContent = time;
    feedbackToMe.textContent = "Wrong Answer!";
    feedbackToMe.style.color = "red";
    feedbackToMe.style.fontSize = "400%";
  } else {
    feedbackToMe.textContent = "Correct Answer!";
    feedbackToMe.style.color = "green";
    feedbackToMe.style.fontSize = "400%";
  }

  // showing right and wrong feedback
  feedbackToMe.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackToMe.setAttribute("class", "feedback hide");
  }, 2000);

  //going to next question
  currentQsInd++;

  //checking the time
  if (currentQsInd === questions.length) {
    quizzesEndTime();
  } else {
    getQs();
  }
}

function quizzesEndTime() {
  //stopping timer event
  clearInterval(timer);
  var endScrn = document.getElementById("end-screen");
  endScrn.removeAttribute("class");

  //showing the final score in end
  var finalScr = document.getElementById("final-score");
  finalScr.textContent = time;

  // hiding qs sections after complete
  qsEl.setAttribute("class", "hide");
}

function clockTick() {
  //updating timer
  time--;
  timeEl.textContent = time;

  //checking time if it goes out
  if (time <= 0) {
    quizzesEndTime();
  }
}

function saveHighscore() {
  //getting value of score
  var initials = highscoreIn.value.trim();

  if (initials !== "") {
    //getting info saved from local storage
    var hs = JSON.parse(window.localStorage.getItem("hs")) || [];
    var newScores = {
      score: time,
      initials: initials,
    };

    //saving to local storages
    hs.push(newScores);
    window.localStorage.setItem("hs", JSON.stringify(hs));

    // redirect to next page
    window.location.href = "score.html";
  }
}

function checkForEnter(event) {
  //using the enter key for events
  if (event.key === "Enter") {
    saveHighscore();
  }
}
submit.onclick = saveHighscore;

// start quiz
start.onclick = startingQuizTime;

highscoreIn.onkeyup = checkForEnter;
