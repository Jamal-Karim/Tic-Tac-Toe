//creating gameboardd 3x3

const gameBoard = (function createGameBoard() {

    const arr = [];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr.push(".");
        }
    }
    return { arr };
})();

const gameModule = (function () {

    //player factory

    function createPlayer(mark, turn) {
        return { mark, turn };
    }

    //create player 1 and 2

    const p1 = createPlayer("X", true);
    const p2 = createPlayer("O", false);

    //checks turn and takes input square

    function chooseSquare(square) {
        if (gameBoard.arr[square] !== ".") {
            return "Invalid move try again"
        }
        else {
            if (p1.turn) {
                gameBoard.arr[square] = p1.mark;
                p1.turn = false;
                p2.turn = true;
            }
            else {
                gameBoard.arr[square] = p2.mark;
                p1.turn = true;
                p2.turn = false;
            }
        }
        return gameBoard.arr;
    }

    //checks for win

    function checkWin() {

        let result = "Continue";
    
        if (
            ((gameBoard.arr[0] !== '.' && gameBoard.arr[0] === gameBoard.arr[3] && gameBoard.arr[0] === gameBoard.arr[6]) ||
                (gameBoard.arr[1] !== '.' && gameBoard.arr[1] === gameBoard.arr[4] && gameBoard.arr[1] === gameBoard.arr[7]) ||
                (gameBoard.arr[2] !== '.' && gameBoard.arr[2] === gameBoard.arr[5] && gameBoard.arr[2] === gameBoard.arr[8])) ||
            ((gameBoard.arr[0] !== '.' && gameBoard.arr[0] === gameBoard.arr[1] && gameBoard.arr[0] === gameBoard.arr[2]) ||
                (gameBoard.arr[3] !== '.' && gameBoard.arr[3] === gameBoard.arr[4] && gameBoard.arr[3] === gameBoard.arr[5]) ||
                (gameBoard.arr[6] !== '.' && gameBoard.arr[6] === gameBoard.arr[7] && gameBoard.arr[6] === gameBoard.arr[8])) ||
            ((gameBoard.arr[0] !== '.' && gameBoard.arr[0] === gameBoard.arr[4] && gameBoard.arr[0] === gameBoard.arr[8]) ||
                (gameBoard.arr[2] !== '.' && gameBoard.arr[2] === gameBoard.arr[4] && gameBoard.arr[2] === gameBoard.arr[6]))
        ) {
            result = "Win";
        } else {
            for (let i = 0; i < 9; i++) {
                if (gameBoard.arr[i] === '.') {
                    result = "Continue";
                    break;
                } else {
                    result = "Draw";
                }
            }
        }
        return { result };
    }
    //returns only public functions
    return {
        chooseSquare,
        checkWin,
    };
})();

gameModule.chooseSquare(1);
gameModule.chooseSquare(3);
gameModule.chooseSquare(2);
console.log(gameModule.chooseSquare(6));
console.log(gameModule.checkWin())
