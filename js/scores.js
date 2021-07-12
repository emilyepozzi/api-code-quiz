function showHs() {
    //getting stores from local storeage
    var hs = JSON.parse(window.localStorage.getItem("hs")) || [];
    hs.sort(function(a, b) {
      return b.score - a.score;
    });
  
    hs.forEach(function(score) {
      //creating list tags
      var listTag = document.createElement("li");
      listTag.textContent = score.initials + " - " + score.score;
  
   //items on page displaying
      var orderedList = document.getElementById("hs");
      orderedList.appendChild(listTag);
    });
  }
  //clearing high scores
  function clearHs() {
    window.localStorage.removeItem("hs");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHs;
  
  showHs();
  