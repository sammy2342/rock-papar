let randomNumber 
let rock = 0 
let paper = 1 
let sicciors = 2
let playerScore = document.getElementById('score-user')
let compScore = document.getElementById('scor-comp')
let tieScore = document.getElementById('tie-score')
console.log(tieScore, '<-----', playerScore)
let rockEl = document.getElementById('0')
let paperEl = document.getElementById('1')
let sicciorsEl = document.getElementById('2')
let playerId
let scores = { 
    win: 0, 
    lose: 0,
    tie: 0,
}


const getComputerChoice = () => {
    randomNumber  = Math.floor(Math.random() * 3)
}

const playerClick = () => { 
    rockEl.addEventListener("click", function(evt) { 
        playerId = evt.target.id
        console.log(playerId, 'thisss')
        checkWin()
        getComputerChoice()
    })
    paperEl.addEventListener("click", function(evt) { 
        playerId = evt.target.id
        console.log(playerId)
        checkWin()
        getComputerChoice()
    })
    sicciorsEl.addEventListener("click", function(evt) { 
        playerId = evt.target.id
        console.log(playerId)
        checkWin()
        getComputerChoice()
    })
}

// console.log(playerId, '<-----')

const checkWin = () => {
    const playerChoice = parseInt(playerId)
    console.log(playerChoice)

    if (playerChoice === randomNumber) {
        // console.log('>playerId',playerChoice, randomNumber, '<computerrantnumber')
        // alert('tie')
        scores.tie++
        tieScore.innerHTML = scores.tie
      } else if (playerChoice === 0 && randomNumber === 2 || playerChoice === 1 && randomNumber === 0 || playerChoice === 2 && randomNumber === 1) {
        // console.log('>playerId>>>',playerChoice, randomNumber, '<<<<<computerrantnumber')
        // alert('you won')
        scores.win++
        playerScore.innerHTML = scores.win
      } else {
        // console.log('>playerId>>>',playerChoice, randomNumber, '<<<<<computerrantnumber')
        // alert('computer won')
        scores.lose++
        compScore.innerHTML = scores.lose
      }
}

function init() { 
    getComputerChoice()
    playerClick()
}

init()