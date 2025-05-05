const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

function checkWin() {
  for (const condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      statusText.textContent = `${currentPlayer} MENANG DECK`;
      gameActive = false;
      return;
    }
  }

  if (!board.includes("")) {
    statusText.textContent = "SERI ANJG";
    gameActive = false;
  }
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (!board[index] && gameActive) {
    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    checkWin();
    if (gameActive) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusText.textContent = `GILIRAN: ${currentPlayer}`;
    }
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  cells.forEach((cell) => (cell.textContent = ""));
  statusText.textContent = `GILIRAN: ${currentPlayer}`;
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));
resetBtn.addEventListener("click", resetGame);

// Initialize
statusText.textContent = `GILIRAN: ${currentPlayer}`;
