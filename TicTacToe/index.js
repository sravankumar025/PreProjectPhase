let info = document.getElementById("info");
let arr = ["", "", "", "", "", "", "", "", ""];
let tiles = document.querySelectorAll(".tile");
let restart = document.getElementById("restart");
let result = document.getElementById("result");

let player1 = "X", player2 = "O";
let currentPlayer = player1;

tiles.forEach((tile) => {
    tile.addEventListener('click', handleTileClick);
  });

function handleMove(tile, index) {
    arr[index] = currentPlayer;
    tile.innerHTML = currentPlayer;
    tile.classList.add(currentPlayer);
    gameCheck();
    tieCheck();
    currentPlayer = currentPlayer == player1 ? player2 : player1;
    info.innerHTML = `Its ${currentPlayer}'s turn`;
}

function tieCheck() {
  let istie = !arr.includes("");
  if (istie) {
    tiles.forEach((tile) => {
        tile.removeEventListener("click", handleTileClick);
      });
  }
}

function handleTileClick(event) {
    const tile = event.target;
    const index = Array.from(tile.parentNode.children).indexOf(tile);
  
    if (arr[index] === '') {
      handleMove(tile, index);
    }
  }

restart.addEventListener("click", function () {
  if(confirm('Press Ok to restart the game')){
    tiles.forEach((tile,index) => {
      tile.innerHTML = "";
      tile.classList.remove(player1);
      tile.classList.remove(player2);
      tile.addEventListener("click", handleTileClick);
    });
    arr = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = player1;
    result.innerHTML = "";
    info.innerHTML = "Start the game";
  }
});

function gameCheck() {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] == arr[1] && arr[1] == arr[2]) {
      res = arr[0];
      break;
    }
    if (arr[3] == arr[4] && arr[4] == arr[5]) {
      res = arr[3];
      break;
    }
    if (arr[6] == arr[7] && arr[7] == arr[8]) {
      res = arr[6];
      break;
    }
    if (arr[0] == arr[3] && arr[3] == arr[6]) {
      res = arr[0];
      break;
    }
    if (arr[1] == arr[4] && arr[4] == arr[7]) {
      res = arr[1];
      break;
    }
    if (arr[2] == arr[5] && arr[5] == arr[8]) {
      res = arr[2];
      break;
    }
    if (arr[0] == arr[4] && arr[4] == arr[8]) {
      res = arr[0];
      break;
    }
    if (arr[2] == arr[4] && arr[4] == arr[6]) {
      res = arr[2];
      break;
    }
  }
  if (res == "X" || res=="O") {
    result.innerHTML = ` GAME OVER ${res} wins Please restart the game!`;
    tiles.forEach((tile) => {
      tile.removeEventListener("click", handleTileClick);
    });
  }
  else  if (!arr.includes("")) {
    result.innerHTML = " GAME OVER Its a draw!!! Please restart the game";
    tiles.forEach((tile) => {
      tile.removeEventListener("click", handleTileClick);
    });
  }
}
