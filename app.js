// create 2 button objects:
const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

let isGameOver = false;
let winningScore = 3;
const resetButton = document.querySelector("#resetButton");
const winningScoreSelect = document.querySelector("#playto");

// update the players' score:
function updateScore(player1, player2) {
  if (!isGameOver) {
    player1.score++;
    if (player1.score === winningScore) {
      isGameOver = true;
      player1.button.disabled = true;
      player2.button.disabled = true;
    }
    player1.display.textContent = player1.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});
p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.button.disabled = false;
  }
}
