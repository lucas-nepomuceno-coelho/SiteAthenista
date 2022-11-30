

var playerRed = "R";
var playerYellow = "Y";
var currPlayer = playerRed;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;
var currColumns = []; //keeps track of which row each column is at.

window.onload = function() {
    setGame();
}

function redirecionaLogin() {
    response.sendRedirect("connect4.html");
}

function setGame() {
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }

    //get coords of that tile clicked
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    // figure out which row the current column should be on
    r = currColumns[c]; 

    if (r < 0) { // board[r][c] != ' '
        return;
    }

    board[r][c] = currPlayer; //update JS board
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer == playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
    }
    else {
        tile.classList.add("yellow-piece");
        currPlayer = playerRed;
    }

    r -= 1; //update the row height for that column
    currColumns[c] = r; //update the array

    checkWinner();
}

function checkWinner() {
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
    let winner = document.getElementById("winner");
    if (board[r][c] == playerRed) {
        winner.innerText = "Red Wins";             
    } else {
        winner.innerText = "Yellow Wins";
    }
    gameOver = true;
}


function check()
{
  if(!document.getElementById("subscribe-email").checkValidity())
  {

    //do stuff here ie. show errors
    alert("Formato de e-mail cadastrado incorrtamente!\nPor favor cadastrar um formato valido! \nusuario@provedor.com");

  }
  else {
    if(!document.getElementById("senha").checkValidity())
      alert("A senha deve ter ao menos um caracter");
    else
    {
      login_check();
    }
  } 
}

function login_check(){
    var username = document.getElementById("subscribe-email").value;
    var password = document.getElementById("senha").value; 
    if ( username == "redes@cefet.com" && password == "somosA+"){
      window.location.href = "connect4.html";
      return false;
    }
    else{
        alert ("Usuario ou senha invalidos!");
    }
}

function check_2()
{
  var password = document.getElementById("senha").value; 
  if(!document.getElementById("subscribe-email").checkValidity())
  {

    //do stuff here ie. show errors
    alert("Formato de e-mail cadastrado incorrtamente!\nPor favor cadastrar um formato valido! \nusuario@provedor.com");

  }
  else {
    if(!document.getElementById("senha").checkValidity())
      alert("A senha deve ter ao menos um caracter");
    else
    {
        if (  password == "somosFsomosA+"){
            login_check_2();
        }else{
            alert ("A senha informada não é a padrão!\nCadastre a senha padrão!\nSão varias pessoas usando! a senha já foi definida pelo time!");
        }
    }
  } 
}

function login_check_2(){
    var username = document.getElementById("subscribe-email").value;
    var password = document.getElementById("senha").value; 
    if ( username == "redes@cefet.com" && password == "somosFsomosA+"){
      alert ("Cdastro fiinalizado com sucesso!");
      window.location.href = "connect4.html";
      return false;
    }else {
        alert ("Não é possivel cadastrar esse e-mail!\nInfelizmente ainda não liberamos para o publico!\nAguardem mais um pouco!");
    }
}
