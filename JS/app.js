document
  .getElementById("players-div")
  .addEventListener("click", function (event) {
    function getPlayerName() {
      const playerNames = event.target.parentNode;
      const playerNameId = playerNames.childNodes[1];
      const playerName = playerNameId.innerText;
      console.log(playerName);
    }
    getPlayerName();
    function getPlayerButton(){
      const playerNames = event.target.parentNode;
      const playerButton = playerNames.children[2];
      console.log(playerButton);
    }
    getPlayerButton();
  });
 
