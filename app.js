
//same as gameboard.arr
const squares = document.querySelectorAll(".square");

const gameModule = (function () {

    //player factory

    function createPlayer(mark, turn) {
        return { mark, turn };
    }

    //create player 1 and 2

    const p1 = createPlayer("X", true);
    const p2 = createPlayer("O", false);

    //checks turn and takes input square

    squares.forEach((square) => {
        square.addEventListener("click", function chooseSquare(event) {
    
            const clickedSquare = event.target;
    
            if (clickedSquare.innerText !== "") {
                return "Invalid move try again"
            }
            else {
                if (p1.turn) {
                    clickedSquare.innerText = p1.mark;
                    p1.turn = false;
                    p2.turn = true;
                }
                else {
                    clickedSquare.innerText = p2.mark;
                    p1.turn = true;
                    p2.turn = false;
                }
                gameModule.checkWin();
                if (result.result !== "Continue") {
                    const resultDisplay = document.createElement("h1");
                    resultDisplay.innerText = result.result;
                    resultDisplay.classList.add("result");
                    document.querySelector("body").append(resultDisplay);
                }
            }
            return clickedSquare;
        })
    })
    

    //checks for win

    function checkWin() {

        let result = "Continue";
    
        if (
            ((squares[0].innerText !== '' && squares[0].innerText === squares[3].innerText && squares[0].innerText === squares[6].innerText) ||
                (squares[1].innerText !== '' && squares[1].innerText === squares[4].innerText && squares[1].innerText === squares[7].innerText) ||
                (squares[2].innerText !== '' && squares[2].innerText === squares[5].innerText && squares[2].innerText === squares[8].innerText)) ||
            ((squares[0].innerText !== '' && squares[0].innerText === squares[1].innerText && squares[0].innerText === squares[2].innerText) ||
                (squares[3].innerText !== '' && squares[3].innerText === squares[4].innerText && squares[3].innerText === squares[5].innerText) ||
                (squares[6].innerText !== '' && squares[6].innerText === squares[7].innerText && squares[6].innerText === squares[8].innerText)) ||
            ((squares[0].innerText !== '' && squares[0].innerText === squares[4].innerText && squares[0].innerText === squares[8].innerText) ||
                (squares[2].innerText !== '' && squares[2].innerText === squares[4].innerText && squares[2].innerText === squares[6].innerText))
    
        ) {
            const winningPlayer = p1.turn ? p2.mark : p1.mark;
            result = `${winningPlayer} Wins!`;
            const resultDisplay = document.createElement("h1");
            resultDisplay.innerText = result;
            resultDisplay.classList.add("result");
            document.querySelector("body").append(resultDisplay);
        } else {
            for (let i = 0; i < 9; i++) {
                if (squares[i].innerText === '') {
                    result = "Continue";
                    break;
                } else {
                    result = "Draw";
                }
            }
            if (result == "Draw") {
                const resultDisplay = document.createElement("h1");
                resultDisplay.innerText = result;
                resultDisplay.classList.add("result");
                document.querySelector("body").append(resultDisplay);
            }
        }
        return { result };
    }
    //returns only public functions
    return {
        checkWin,
    };
})();
