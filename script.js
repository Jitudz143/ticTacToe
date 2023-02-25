var turn = "X";

document.getElementById('play').addEventListener('click', () => {
    document.getElementById('play').style.display = "none";
    document.getElementById('reset').style.display = "block";
    document.getElementById('icon').style.display = "none";
    document.getElementById('gameContainer').style.visibility = 'visible';
    alertTurn('Turn for X');
});



//function for display the turn
const alertTurn = (a) => {
    var tag = document.getElementById('turn');
    tag.innerHTML = a;
}


//function for displaying the msg as popups
const alertBox = (m, h = '21vh', d = 'block') => {
    turn = "";
    document.getElementById('msg').innerText = m;
    document.getElementById('alert').style.height = h;
    document.getElementById('ok').style.display = d;
}

// function to check the win
const checkWin = () => {
    var arr = [];
    arr = document.querySelectorAll(".boxText");
    arr.forEach(element => {
        var x = "X";
        var o = "0";
        if ((arr[0].innerText === x && arr[1].innerText === x && arr[2].innerText === x) || (arr[3].innerText === x && arr[4].innerText === x && arr[5].innerText === x) || (arr[6].innerText === x && arr[7].innerText === x && arr[8].innerText === x) || (arr[0].innerText === x && arr[3].innerText === x && arr[6].innerText === x) || (arr[1].innerText === x && arr[4].innerText === x && arr[7].innerText === x) || (arr[2].innerText === x && arr[5].innerText === x && arr[8].innerText === x) || (arr[0].innerText === x && arr[4].innerText === x && arr[8].innerText === x) || (arr[2].innerText === x && arr[4].innerText === x && arr[6].innerText === x)) {
            alertBox('X Won');
        }
        else if ((arr[0].innerText === o && arr[1].innerText === o && arr[2].innerText === o) || (arr[3].innerText === o && arr[4].innerText === o && arr[5].innerText === o) || (arr[6].innerText === o && arr[7].innerText === o && arr[8].innerText === o) || (arr[0].innerText === o && arr[3].innerText === o && arr[6].innerText === o) || (arr[1].innerText === o && arr[4].innerText === o && arr[7].innerText === o) || (arr[2].innerText === o && arr[5].innerText === o && arr[8].innerText === o) || (arr[0].innerText === o && arr[4].innerText === o && arr[8].innerText === o) || (arr[2].innerText === o && arr[4].innerText === o && arr[6].innerText === o)) {
            alertBox('0 Won');
        }
        else if (arr[0].innerText != "" && arr[1].innerText != "" && arr[2].innerText != "" && arr[3].innerText != "" && arr[4].innerText != "" && arr[5].innerText != "" && arr[6].innerText != "" && arr[7].innerText != "" && arr[8].innerText != "") {
            alertBox('Game Over');
        }
    })
}
// function to change the turn
const yourTurn = () => turn = turn === "X" ? "0" : "X";

// game logic
var box = document.querySelectorAll(".box");
Array.from(box).forEach(element => {
    var boxText = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            yourTurn();
            checkWin();
            turn === "X" ? alertTurn('Turn for X') : alertTurn('Turn for 0');
        }
    })
})


// Function to reset game
const resetGame = () => {
    var arrReset = document.querySelectorAll(".boxText");
    arrReset.forEach(element => {
        element.innerText = ''
    })
    turn = "X";
    alertTurn('Click on the play button');
    alertBox('', '', 'none');
    document.getElementById('play').style.display = "block";
    document.getElementById('reset').style.display = "none";
    document.getElementById('icon').style.display = "block";
    document.getElementById('gameContainer').style.visibility = 'hidden';
}


document.getElementById('reset').addEventListener('click', resetGame);
document.getElementById('ok').addEventListener('click', resetGame);