const playerForm = document.querySelector('#playerForm');
const playerXInput = document.querySelector('#playerX');
const playerOInput = document.querySelector('#playerO');
const currentPlayerDisplay = document.querySelector('#currentPlayer');
const turnInfo = document.querySelector('#turnInfo');
const gameBoard = document.querySelector('#gameBoard');
const startButton = document.querySelector('#startButton');
const message = document.querySelector('#message');
const cells = document.querySelectorAll('.cell');

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let players = { X: '', O: '' };
let board = Array(9).fill('');
let currentMark = 'X';
let gameStarted = false;
let gameOver = false;

function updateTurnDisplay() {
    currentPlayerDisplay.textContent =
        `${currentMark} — ${players[currentMark]}`;
}

function startNewGame() {
    board = Array(9).fill('');
    currentMark = 'X';
    gameStarted = true;
    gameOver = false;

    cells.forEach(function(cell) {
        cell.textContent = '';
        cell.disabled = false;
    });

    message.textContent = '';
    message.hidden = true;
    gameBoard.hidden = false;
    turnInfo.hidden = false;
    startButton.disabled = false;
    updateTurnDisplay();
}

function finishGame(resultMessage) {
    gameOver = true;
    message.textContent = resultMessage;
    message.hidden = false;
    cells.forEach(function(cell) {
        cell.disabled = true;
    });
}

function checkForWinner() {
    return winningCombinations.some(function(combination) {
        const [first, second, third] = combination;
        return board[first] !== '' &&
            board[first] === board[second] &&
            board[first] === board[third];
    });
}

playerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameX = playerXInput.value.trim();
    const nameO = playerOInput.value.trim();

    if (!nameX || !nameO) {
        message.textContent = 'Digite o nome dos dois jogadores.';
        message.hidden = false;
        return;
    }

    players = { X: nameX, O: nameO };
    startButton.disabled = false;
    startNewGame();
});

cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        const index = Number(cell.dataset.index);

        if (!gameStarted || gameOver || board[index] !== '') {
            return;
        }

        board[index] = currentMark;
        cell.textContent = currentMark;

        if (checkForWinner()) {
            finishGame(`${players[currentMark]} (${currentMark}) venceu!`);
            return;
        }

        if (board.every(function(mark) {
            return mark !== '';
        })) {
            finishGame('Empate!');
            return;
        }

        currentMark = currentMark === 'X' ? 'O' : 'X';
        updateTurnDisplay();
    });
});

startButton.addEventListener('click', startNewGame);
