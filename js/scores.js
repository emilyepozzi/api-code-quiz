function showHighscore() {
    // getting high score in local storage or array
    var highscore = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores by score property in descending order
    highscore.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscore.forEach(function(score) {
      // create li tag for each high score
      var listTg = document.createElement("li");
      listTg.textContent = score.initials + " - " + score.score;
  
      // display on page
      var orderedEl = document.getElementById("highscore");
      orderedEl.appendChild(listTg);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscore");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighscores;
  
  // run function when page loads
  showHighscore();