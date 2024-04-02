const Board = function () {
    this.cell_1_1 = null;
    this.cell_1_2 = null;
    this.cell_1_3 = null;
    this.cell_2_1 = null;
    this.cell_2_2 = null;
    this.cell_2_3 = null;
    this.cell_3_1 = null;
    this.cell_3_2 = null;
    this.cell_3_3 = null;
}

const Player = function (name, symbol) {
    this.name = name;
    this.symbol = symbol;
}

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];


const Game = function () {
    this.board = new Board();
    this.player1 = new Player('Player 1', 'X');
    this.player2 = new Player('Player 2', 'O');
    this.currentPlayer = this.player1;
    this.winner = null;
    this.moves = 0;
    this.gameOver=false;
}

function displaySymbol(cellElement, symbol) {
    cellElement.textContent = symbol;
}

Game.prototype.updateTurnInfo = function () {
    const turnInfo1 = document.getElementById('turn-info-1');
    const turnInfo2 = document.getElementById('turn-info-2');

    if (this.currentPlayer === this.player1) {
        turnInfo1.textContent = "Your turn";
        turnInfo2.textContent = "";
    } else {
        turnInfo1.textContent = "";
        turnInfo2.textContent = "Your turn";
    }
}

Game.prototype.startGame = function () {
    const figure1 = document.getElementById('figure-1');
    const figure2 = document.getElementById('figure-2');

    figure1.classList.add('X');
    figure2.classList.add('O');
}

Game.prototype.checkWin = function () {
    const winningCombinations = [
        ['cell_1_1', 'cell_1_2', 'cell_1_3'],
        ['cell_2_1', 'cell_2_2', 'cell_2_3'],
        ['cell_3_1', 'cell_3_2', 'cell_3_3'],
        ['cell_1_1', 'cell_2_1', 'cell_3_1'],
        ['cell_1_2', 'cell_2_2', 'cell_3_2'],
        ['cell_1_3', 'cell_2_3', 'cell_3_3'],
        ['cell_1_1', 'cell_2_2', 'cell_3_3'],
        ['cell_1_3', 'cell_2_2', 'cell_3_1']
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
            document.getElementById('message').textContent = `Player ${this.board[a]} wins!`;
            modal.style.display = "block";
            this.gameOver=true;
            return true;
        }
    }

    return false;
}

Game.prototype.handleCellClick = function (row, col) {
    const cellName = `cell_${row}_${col}`;
    const cellElement = document.getElementById(cellName);
    if(this.gameOver){
        return;
    }
    if (this.board[cellName] === null) {
        this.board[cellName] = this.currentPlayer.symbol;
        displaySymbol(cellElement, this.currentPlayer.symbol);
        this.moves++;
        if (this.checkWin()) {
            console.log(`Player ${this.currentPlayer.symbol} wins!`);
            return;
        }
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
        this.updateTurnInfo();
    } else {
        console.log("This cell is already filled. Please choose another one.");
    }

    if (this.moves === 9) {
        document.getElementById('message').textContent = "It's a draw!";
        modal.style.display = "block";
        this.gameOver=true;
    }

    if (!this.gameOver) {
        for (let row = 1; row <= 3; row++) {
            for (let col = 1; col <= 3; col++) {
                const cellElement = document.getElementById(`cell_${row}_${col}`);
                if (this.board[`cell_${row}_${col}`] === null) {
                    cellElement.setAttribute('data-hover', this.currentPlayer.symbol);
                }
            }
        }
    }
}

Game.prototype.reset = function() {
    this.board = {
        'cell_1_1': null, 'cell_1_2': null, 'cell_1_3': null,
        'cell_2_1': null, 'cell_2_2': null, 'cell_2_3': null,
        'cell_3_1': null, 'cell_3_2': null, 'cell_3_3': null
    };
    this.currentPlayer = this.player1;
    this.moves = 0;
    for (let row = 1; row <= 3; row++) {
        for (let col = 1; col <= 3; col++) {
            const cellElement = document.getElementById(`cell_${row}_${col}`);
            cellElement.textContent = '';
            cellElement.setAttribute('data-hover', this.player1.symbol)
        }
    }
    this.updateTurnInfo();
    modal.style.display = "none";
}

window.onload = function () {
    const game = new Game();
    game.startGame();

    for (let row = 1; row <= 3; row++) {
        for (let col = 1; col <= 3; col++) {
            const cellElement = document.getElementById(`cell_${row}_${col}`);
            cellElement.addEventListener('click', function () {
                game.handleCellClick(row, col);
            });
        }
    }
    document.getElementById('reset-button').addEventListener('click', function() {
        game.reset();
    });
    game.reset();
    game.updateTurnInfo();
}

span.onclick = function () {
    modal.style.display = "none";
    game.reset();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}