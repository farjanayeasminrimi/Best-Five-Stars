// Set first five clicked player name to the selected list
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
    if (playerCount < 5) {
      addPlayerNameByNumber();
    }
    else{
      alert('You have already selected five star players. You cannot select more than that. Thank You for being with.')
    }
});
// Get total player Expenses
function getInputValueById(inputId){
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  return inputValue;
 }
document
  .getElementById("calculate-btn")
  .addEventListener("click", function () {
     const playerExpenses = document.getElementById('player-expenses');
     const perPlayerExpenses =  getInputValueById('per-player-input'); 
     const allLi = document.querySelectorAll('li');
     const totalLi = allLi.length;
     playerExpenses.innerText = perPlayerExpenses * totalLi;
  });