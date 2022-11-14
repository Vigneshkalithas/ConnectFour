var playerRed = "Red";
var playerYellow = "Yellow";

var currentPlayer = playerRed;

var gameOver = false;
var board;

var rows = 6; 
var columns = 7;

window.onload = function(){
    setGame()
}

function setGame(){
    board=[];
    currColumns = [5,5,5,5,5,5,5]
    for(let r=0; r < rows; r++){
    var row = [];
     for(let c=0; c < columns ; c++){
        row.push(' ');

        let round = document.createElement("div")
        round.id = r.toString() + "-" + c.toString();
        round.classList.add("round");
        round.addEventListener('click',choose)
        document.getElementById("Board").append(round);

     }
     board.push(row)
    }
}

function choose(){
    if(gameOver){
        return 
    }
    let splited = this.id.split("-");
    // console.log(splited)
    let r = parseInt(splited[0]);
    let c = parseInt(splited[1]);
    r = currColumns[c];
    if(r < 0){
        return;
    }
    board[r][c] = currentPlayer
    let round = document.getElementById(r.toString() + "-" + c.toString());
    if(currentPlayer == playerRed){
        round.classList.add("redBackGround");
        currentPlayer = playerYellow
    }
    else{
        round.classList.add("yellowBackGround");
        currentPlayer = playerRed
}
r -=1;
currColumns[c] = r;
checkResult();


}

function checkResult(){
    
        // horizontal
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns - 3; c++){
               if (board[r][c] != ' ') {
                   if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                       setWinner(r, c);
                       return;
                   }
               }
            }
       }
   
       // vertical
       for (let c = 0; c < columns; c++) {
           for (let r = 0; r < rows - 3; r++) {
               if (board[r][c] != ' ') {
                   if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                       setWinner(r, c);
                       return;
                   }
               }
           }
       }
   
       // anti diagonal
       for (let r = 0; r < rows - 3; r++) {
           for (let c = 0; c < columns - 3; c++) {
               if (board[r][c] != ' ') {
                   if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                       setWinner(r, c);
                       return;
                   }
               }
           }
       }
   
       // diagonal
       for (let r = 3; r < rows; r++) {
           for (let c = 0; c < columns - 3; c++) {
               if (board[r][c] != ' ') {
                   if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                       setWinner(r, c);
                       return;
                   }
               }
           }
       }
   
}
function setWinner(r, c) {
    let winner = document.getElementById("title");
    
    if (board[r][c] == playerRed) {
        winner.innerText = "RedWins";             
    } else {
        winner.innerText = "Yellow Wins";
               
    }
    gameOver = true;
}


