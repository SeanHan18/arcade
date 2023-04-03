let cells = document.getElementsByClassName('cell')

const input1 = document.getElementById('input1')

const input2 = document.getElementById('input2')

const board  = document.getElementById('board')

let playAgain = document.getElementById('play-again')

let player1Form = document.getElementById('p1name')

let submitPlayer1 = document.getElementById('submit1')

let player2Form = document.getElementById('p2name')

let submitPlayer2 = document.getElementById('submit2')

let player1 = ''

let player2 = ''

let index = 0

let drawCheck = 0

let turn = document.getElementById('turn')

let cell1 = document.getElementById('cell1')

let cell2 = document.getElementById('cell2')

let cell3 = document.getElementById('cell3')

let cell4 = document.getElementById('cell4')

let cell5 = document.getElementById('cell5')

let cell6 = document.getElementById('cell6')

let cell7 = document.getElementById('cell7')

let cell8 = document.getElementById('cell8')

let cell9 = document.getElementById('cell9')


submitPlayer1.addEventListener('click', function(){
player1Form.style.display = 'none'
if (input1.value.trim().length > 0){
    player1 = input1.value;
}
else {
    player1 = "Player 1"
}
console.log(player1)
player2Form.style.display = 'block'
console.log(input1.value)
})


submitPlayer2.addEventListener('click', function(){
    player2Form.style.display = 'none'
    if (input2.value.trim().length > 0){
        player2 = input2.value;
    }
    else {
        player2 = "Player 2"
    }
    console.log(player2.trim.length)
    player2Form.style.display = 'none'
    board.style.display = 'grid'
    turn.innerHTML = `${player1}'s Turn!`
    turn.style.display = 'flex'
    playAgain.style.display = 'flex'
    })



function addToBoard(){
for (i=0; i < cells.length; i++) {
    let cell = cells[i]
    cells[i].onmouseover = function(){
        if (cell.innerHTML == "X" || cell.innerHTML == "O" || turn.innerHTML == `${player1} Wins!` || turn.innerHTML == `${player2} Wins!`|| turn.innerHTML == "Draw!"){
            cell.classList.remove('highlighted')
        }
       else{cell.classList.add('highlighted');
        console.log("Working")
        }
    }
    cells[i].onmouseout = function(){
        cell.classList.remove('highlighted');
        console.log("Still Working")
    }
    cells[i].addEventListener('click', function addXO(){
       if (cell.innerHTML == "X"){
           return
       }
       else if(cell.innerHTML == "O"){
           return
       }
       else if (turn.innerHTML == `${player1} Wins!`){
        cell.removeEventListener('click', addXO)
        cell.classList.remove("highlighted")
       }
       else if (turn.innerHTML == `${player2} Wins!`){
        cell.removeEventListener('click', addXO)
        cell.classList.remove("highlighted")
       }
       else if (turn.innerHTML == "Draw!"){
        cell.removeEventListener('click', addXO)
        cell.classList.remove("highlighted")
       }
       else if (index == 0) {
           cell.innerHTML = "X"
           cell.style.color = "#0ba9ca"
           index++
           drawCheck++
           console.log(drawCheck)
           winCheckX()
        }
       else if (index == 1){
           cell.innerHTML = "O"
           cell.style.color = "#ca0b0b"
           index--
           drawCheck++
           console.log(drawCheck)
           winCheckO()
       } 
    })  
}    
}


function replay(){
        playAgain.addEventListener('click', function clear(){
            for (let i = 0; i < cells.length; i++){
                cells[i].innerText = ''
                index = 0
                drawCheck = 0
            }
            turn.innerText = `${player1}'s Turn!`
        cell1.removeAttribute('style')
        cell2.removeAttribute('style')
        cell3.removeAttribute('style')
        cell4.removeAttribute('style')
        cell5.removeAttribute('style')
        cell6.removeAttribute('style')
        cell7.removeAttribute('style')
        cell8.removeAttribute('style')
        cell9.removeAttribute('style')
        addToBoard()
        })
     }

function winCheckX(){
    if(cell1.innerHTML == "X" && cell2.innerHTML == "X" && cell3.innerHTML == "X"){
        turn.innerHTML = `${player1} Wins!`;
        cell1.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell2.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell3.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
    }
    else if (cell4.innerText == "X" && cell5.innerText == "X" && cell6.innerText == "X"){
        turn.innerHTML = `${player1} Wins!`;
        cell4.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell5.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell6.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
    }
    else if (cell7.innerHTML == "X" && cell8.innerHTML == "X" && cell9.innerHTML == "X"){
        turn.innerHTML = `${player1} Wins!`;
        cell7.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell8.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell9.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
    }
    else if (cell1.innerHTML == "X" && cell4.innerHTML == "X" && cell7.innerHTML == "X"){
        turn.innerHTML = `${player1} Wins!`;
        cell1.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell4.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell7.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
    }
    else if (cell2.innerHTML == "X" && cell5.innerHTML == "X" && cell8.innerHTML == "X"){
        turn.innerHTML = `${player1} Wins!`;
        cell2.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell5.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell8.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
    }
    else if (cell3.innerHTML == "X" && cell6.innerHTML == "X" && cell9.innerHTML == "X"){
        turn.innerHTML = `${player1} Wins!`;
        cell3.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell6.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell9.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
    }
    else if (cell1.innerHTML == "X" && cell5.innerHTML == "X" && cell9.innerHTML == "X"){
        turn.innerHTML = `${player1} Wins!`;
        cell1.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell5.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell9.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
    }
    else if (cell3.innerHTML == "X" && cell5.innerHTML == "X" && cell7.innerHTML == "X"){
        turn.innerHTML = `${player1} Wins!`;
        cell3.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell5.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
        cell7.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca";
    }
    else if (drawCheck == 9){
        turn.innerHTML = "Draw!"
    }
    else {
        turn.innerHTML = `${player2}'s Turn!`
    }
}

function winCheckO(){
    if(cell1.innerHTML == "O" && cell2.innerHTML == "O" && cell3.innerHTML == "O"){
        turn.innerHTML = `${player2} Wins!`;
        cell1.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell2.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell3.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
    }
    else if (cell4.innerHTML == "O" && cell5.innerHTML == "O" && cell6.innerHTML == "O"){
        turn.innerHTML = `${player2} Wins!`;
        cell4.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell5.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell6.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
    }
    else if (cell7.innerHTML == "O" && cell8.innerHTML == "O" && cell9.innerHTML == "O"){
        turn.innerHTML = `${player2} Wins!`;
        cell7.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell8.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell9.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
    }
    else if (cell1.innerHTML == "O" && cell4.innerHTML == "O" && cell7.innerHTML == "O"){
        turn.innerHTML = `${player2} Wins!`;
        cell1.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell4.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell7.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
    }
    else if (cell2.innerHTML == "O" && cell5.innerHTML == "O" && cell8.innerHTML == "O"){
        turn.innerHTML = `${player2} Wins!`;
        cell2.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell5.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell8.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
    }
    else if (cell3.innerHTML == "O" && cell6.innerHTML == "O" && cell9.innerHTML == "O"){
        turn.innerHTML = `${player2} Wins!`;
        cell3.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell6.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell9.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
    }
    else if (cell1.innerHTML == "O" && cell5.innerHTML == "O" && cell9.innerHTML == "O"){
        turn.innerHTML = `${player2} Wins!`;
        cell1.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell5.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell9.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
    }
    else if (cell3.innerHTML == "O" && cell5.innerHTML == "O" && cell7.innerHTML == "O"){
        turn.innerHTML = `${player2} Wins!`;
        cell3.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell5.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
        cell7.style.boxShadow = "0 0 2px #fff, 0 0 10px #fff, 0 0 20px #ca0b0b, 0 0 30px #ca0b0b, 0 0 40px #ca0b0b, 0 0 50px #ca0b0b";
    }
    else if (drawCheck == 9){
        turn.innerHTML = "Draw!"
    }
    else {
        turn.innerText = `${player1}'s Turn!`
    }
}


addToBoard()
replay()

