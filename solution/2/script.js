
window.onload = startGame();

var cells = document.querySelectorAll("td")


function xoListener(){
 for (var i = cells.length - 1; i >= 0; i--) {
   cells[i].addEventListener("click", console.log("playXorO"));
 }
};


var turn = "X"

function playXorO(){
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X";
    };

};
