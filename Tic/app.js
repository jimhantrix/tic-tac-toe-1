// Cells variables
var a1, a2, a3, b1, b2, b3, c1, c2, c3;
 // Keeps track of who's turn it is: 0 -> player's turn ## -> 1 comp's turn
var turn = 0;
// Boolean values to know who won
var xWin = false;
var oWin = false
var gameEnded = false;

var getPlayerMove = function(cellID) {
    // Check if it is the player's turn.
    if (turn == 0 && !gameEnded) {
      document.getElementById(cellID).value = "x";
      getBoardStatus();
      checkWin();
      if (!gameEnded) {
        turn == 1;
        getComputerMove();
        getBoardStatus();
        checkWin();
      }
    }
    else {
      // Do nothing
    }
}

var getComputerMove = function () {
    // IF BLOCK A WIN "PATTERN"
    if (a1 == "" && ((a3 == "x" && a2 == "x") || (c3 == "x" && b2 == "x") || (c1 == "x" && b1 == "x"))) {
        document.getElementById('a1').value = "o";
        turn = 0;
    }
    else if (a2 == "" && ((a1 == "x" && a3 == "x") || (c2 == "x" && b2 == "x"))) {
        document.getElementById('a2').value = "o";
        turn = 0;
    }
    else if (a3 == "" && ((a1 == "x" && a2 == "x") || (c1 == "x" && b2 == "x") || (c3 == "x" && b3 == "x"))) {
        document.getElementById('a3').value = "o";
        turn = 0;
    }
    else if (b1 == "" && ((b3 == "x" && b2 == "x") || (a1 == "x" && c1 == "x"))) {
        document.getElementById('b1').value = "o";
        turn = 0;
    }
    else if (b2 == "" && ((a3 == "x" && c1 == "x") || (c3 == "x" && a1 == "x") || (b3 == "x" && b1 == "x") || (c2 == "x" && a2 == "x"))) {
        document.getElementById('b2').value = "o";
        turn = 0;
    }
    else if (b3 == "" && ((a3 == "x" && c3 == "x") || (b2 == "x" && b1 == "x"))) {
        document.getElementById('b3').value = "o";
        turn = 0;
    }
    else if (c1 == "" && ((c3 == "x" && c2 == "x") || (a3 == "x" && b2 == "x") || (a1 == "x" && b1 == "x"))) {
        document.getElementById('c1').value = "o";
        turn = 0;
    }
    else if (c2 == "" && ((c3 == "x" && c1 == "x") || (a2 == "x" && b2 == "x"))) {
        document.getElementById('c2').value = "o";
        turn = 0;
    }
    else if (c3 == "" && ((c1 == "x" && c2 == "x") || (a1 == "x" && b2 == "x") || (a3 == "x" && b3 == "x"))) {
        document.getElementById('c3').value = "o";
        turn = 0;
    }
    // IF NOT BLOCK A WIN "PATTERN"
    else {
        if (b2 == "") {
            document.getElementById('b2').value = "o";
            turn = 0;
        }
        else if (a1 == "") {
            document.getElementById('a1').value = "o";
            turn = 0;
        }
        else if (c3 == "") {
            document.getElementById('c3').value = "o";
            turn = 0;
        }
        else if (c2 == "") {
            document.getElementById('c2').value = "o";
            turn = 0;
        }
        else if (b1 == "") {
            document.getElementById('b1').value = "o";
            turn = 0;
        }
    }
};


// Get Board Status
function getBoardStatus () {
    a1 = document.getElementById('a1').value;
    a2 = document.getElementById('a2').value;
    a3 = document.getElementById('a3').value;
    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    b3 = document.getElementById('b3').value;
    c1 = document.getElementById('c1').value;
    c2 = document.getElementById('c2').value;
    c3 = document.getElementById('c3').value;
};

var checkWin = function () { // CHECKS IF X WON
    if ((a1 == a2 && a1 == a3 && (a1 == "x")) || //first row
        (b1 == b2 && b1 == b3 && (b1 == "x")) || //second row
        (c1 == c2 && c1 == c3 && (c1 == "x")) || //third row
        (a1 == b1 && a1 == c1 && (a1 == "x")) || //first column
        (a2 == b2 && a2 == c2 && (a2 == "x")) || //second column
        (a3 == b3 && a3 == c3 && (a3 == "x")) || //third column
        (a1 == b2 && a1 == c3 && (a1 == "x")) || //diagonal 1
        (a3 == b2 && a3 == c1 && (a3 == "x")) //diagonal 2
    ) {
        xWin = true;
        gameEnded = true;
        winAlert();

    } else { // CHECKS IF O WON
        if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
            (b1 == b2 && b1 == b3 && (b1 == "o")) || //second row
            (c1 == c2 && c1 == c3 && (c1 == "o")) || //third row
            (a1 == b1 && a1 == c1 && (a1 == "o")) || //first column
            (a2 == b2 && a2 == c2 && (a2 == "o")) || //second column
            (a3 == b3 && a3 == c3 && (a3 == "o")) || //third column
            (a1 == b2 && a1 == c3 && (a1 == "o")) || //diagonal 1
            (a3 == b2 && a3 == c1 && (a3 == "o")) //diagonal 2
        ) {
            oWin = true;
            gameEnded = true;
            winAlert();

        } else { // CHECKS FOR TIE GAME IF ALL CELLS ARE FILLED
            if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
              gameEnded = true;
              winAlert();
            }
        }
    }
};

var winAlert = function () {
    if (xWin == true) {
        alert("You won!");
    }
    else if (oWin == true) {
        alert("Sorry, you lose!");
    }
    else {
        alert("It's a tie!");
    }
};

var reset = function () {
    document.getElementById('a1').value = "";
    document.getElementById('a2').value = "";
    document.getElementById('a3').value = "";
    document.getElementById('b1').value = "";
    document.getElementById('b2').value = "";
    document.getElementById('b3').value = "";
    document.getElementById('c1').value = "";
    document.getElementById('c2').value = "";
    document.getElementById('c3').value = "";
    turn = 0;
    xWin = false;
    oWin = false;
    gameEnded = false;
    getBoardStatus();
};
