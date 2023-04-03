/*
Requirements
- Initial State:
    - A board that contains the snake + apple
    - A grid layout
    - Start Button
    - Score Counter. Starting at 0
    - Speed of the snake
    - Snake should start moving when game starts
    - Starting position of the snake
- Keep track of high score (bonus)
- Pausing the game (bonus)
- Keep track of when the apple is eaten
- Keep track of growing the snakes body
- Stop game if snake collides with wall or self
- Keep track of the game controls
- Potential Functions:
    - Adds length to the snakes body when an apple eaten
    - Handles the Game controls
        - turning the snake
        - moving body accordingly
    - Random placement of the apple
    - When the game is over
    - Reset the game
*/

//GAME PHASES
const PLAYING = "PLAYING"
const GAME_OVER = "GAME_OVER"
const NEW = "NEW"

//DIRECTIONS
const LEFT = "LEFT"
const RIGHT = "RIGHT"
const UP = "UP"
const DOWN = "DOWN"

let gameState = {}

let prompt = document.getElementById("prompt")

let infoBox = document.getElementById("info")

let scoreCounter = 0

let scoreCount = document.getElementById("scoreCount")

scoreCount.innerText = `Score: ${scoreCounter}`

let cell = document.getElementsByClassName("cell")

let gameOverText = document.getElementById("gameover")

let resetButton = document.getElementById("reset")

let mainMenu = document.getElementById("menu")

let upButton = document.getElementById('up')
let downButton = document.getElementById('down')
let leftButton = document.getElementById('left')
let rightButton = document.getElementById('right')

function newBoard() {
    return [
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""]
    ]
}

// function that will setup initial game state
function resetInitialState() {
    gameState.board = newBoard(),
        gameState.apple = [5, 5], // you can make this random
        gameState.snake = {
            body: [
                [10, 5],
                [10, 6],
                [10, 7],
                [10, 8]
            ],
            // direction is going to change by one
            // 1 means its going forward (towards the right on the x axis/down on the y axis)
            // -1 means its going backward (towards the left on the x axis/up on the right axis)
            // 0 means it stays the same
            nextDirection: [0, -1]
        },
        gameState.speed = 300
    gameState.phase = NEW
    gameState.setInterval = null
}

function moveSnake() {

    const [y, x] = gameState.snake.body[0] 
    const nextTile = [
        y + gameState.snake.nextDirection[0],
        x + gameState.snake.nextDirection[1]
    ]

    const [nextY, nextX] = nextTile

    if (nextY > 11 || nextY < 0 || nextX > 11 || nextX < 0) {
        changePhaseTo(GAME_OVER)
    }
    else if(gameState.board[nextY][nextX] === "snake"){
        changePhaseTo(GAME_OVER)
    }
    else {
        if (gameState.board[nextY][nextX] === "apple") {
            moveApple()
            scoreCounter++
            scoreCount.innerText = `Score: ${scoreCounter}`
            console.log(scoreCounter)

        }
        else {
            gameState.snake.body.pop()
        }
    }

    gameState.snake.body.unshift(nextTile) 

    gameState.board = newBoard()
    addSnakeToBoard()
    addAppleToBoard()
}


function clearHTMLboard() {
        document.querySelectorAll("div").forEach((e) => {
          e.classList.remove("snake");
          e.classList.remove("apple");
        });
      }

function tick() {
    clearHTMLboard()
    moveSnake()
    updateHTMLBoard()
}

function changePhaseTo(newPhase) {
    gameState.phase = newPhase

    if (gameState.phase === PLAYING) {
        gameState.interval = setInterval(tick, gameState.speed)
        resetButton.style.display = "none"
        prompt.style.display = "none"
        mainMenu.style.display = "none"
    }
    else if (gameState.phase === GAME_OVER) {
        resetInitialState()
        clearInterval(gameState.interval)
        gameOverText.innerText = "Game Over"
        scoreCount.innerText = `Final Score: ${scoreCounter}`
        resetButton.style.display = "Flex"
        gameControls.style.display = "none"
        infoBox.style.display = "Flex"
        mainMenu.style.display = "Flex"
    }
}

function addAppleToBoard() {
    const [y, x] = gameState.apple
    gameState.board[y][x] = "apple"
}

function addSnakeToBoard() {
    for (let i = 0; i < gameState.snake.body.length; i++) {
        const [y, x] = gameState.snake.body[i]
        gameState.board[y][x] = "snake"
    }
}

function moveApple() {
    let y = Math.floor(Math.random() * 12)
    let x = Math.floor(Math.random() * 12)

    gameState.apple = [y, x]

}

function updateHTMLBoard() { // this is your renderState function
    let appleCell = document.querySelector("div[data-coordinates='" + gameState.apple + "']")

    appleCell.classList.add("apple")

    for (let i = 0; i < gameState.snake.body.length; i++) {

        const [y, x] = gameState.snake.body[i]
        let snakeCell = document.querySelector("div[data-coordinates='" + y + ',' + x + "']")

        snakeCell.classList.add("snake")
    }
}


function turnSnake(direction){ 
    if(direction === UP){
        gameState.snake.nextDirection = [-1,0]
        downButton.disabled = true
        rightButton.disabled = false
        leftButton.disabled = false
        upButton.disabled = false
    } else if (direction === LEFT){
        gameState.snake.nextDirection = [0,-1]
        downButton.disabled = false
        rightButton.disabled = true
        leftButton.disabled = false
        upButton.disabled = false
    } else if (direction === RIGHT){
        gameState.snake.nextDirection = [0,1]
        downButton.disabled = false
        rightButton.disabled = false
        leftButton.disabled = true
        upButton.disabled = false
    } else if (direction === DOWN){
        gameState.snake.nextDirection = [1,0]
        downButton.disabled = false
        rightButton.disabled = false
        leftButton.disabled = false
        upButton.disabled = true
    }}



const gameControls = document.getElementById("controls")
const startButton = document.querySelector(".start-game")
startButton.addEventListener("click", function () {

    changePhaseTo(PLAYING)
    startButton.style.display = "none"

    gameControls.style.display = "grid"

    scoreCounter = 0

    gameOverText.innerHTML = ""
})

gameControls.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") {
        return
    }

    let direction = event.target.innerText.toUpperCase()
    turnSnake(direction)
})

resetButton.addEventListener("click", function(event){
    gameState.apple = [5,5]
    resetInitialState()
    changePhaseTo(PLAYING)
    scoreCounter = 0
    scoreCount.innerText = `Score: ${scoreCounter}`
    gameOverText.innerHTML = ""
    gameControls.style.display = "grid"
    infoBox.style.display = "block"
    downButton.disabled = false
    rightButton.disabled = false
    leftButton.disabled = false
    upButton.disabled = false
})

resetInitialState()
updateHTMLBoard()
