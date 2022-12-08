document
  .getElementById("players-div")
  .addEventListener("click", function (event) {
    function getPlayerName() {
      const playerNames = event.target.parentNode;
      const playerNameId = playerNames.childNodes[1];
      const playerName = playerNameId.innerText;
      console.log(playerName);
    }
    getPlayerName() 
  });
