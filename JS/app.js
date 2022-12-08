let playerCount = 0;
document
  .getElementById("players-div")
  .addEventListener("click", function (event) {
    function getPlayerName() {
      const playerNames = event.target.parentNode;
      const playerNameId = playerNames.childNodes[1];
      const playerName = playerNameId.innerText;
      return playerName;
    }
    function getPlayerButton(){
      const playerNames = event.target.parentNode;
      const playerButton = playerNames.children[2];
      return playerButton;
    }
    function addPlayerNameByNumber() {
      let ol = document.getElementById("playerList");
      let selectedPlayerName = getPlayerName();
      let button = getPlayerButton();
      ol.children[playerCount].innerText = selectedPlayerName;
      button.setAttribute('disabled', true);
      button.classList.add('disabled');
      playerCount = playerCount + 1;
    }
    addPlayerNameByNumber(); 
});
 
