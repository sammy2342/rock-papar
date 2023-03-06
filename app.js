let randomNumber 
let rock = 0 
let paper = 1 
let sicciors = 2
let playerScore = document.getElementById('score-user')
let compScore = document.getElementById('scor-comp')
let tieScore = document.getElementById('tie-score')

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
    return Math.floor(Math.random() * 3)
}

const playerClick = () => { 
    rockEl.addEventListener("click", function(evt) { 
        playerId = parseInt(evt.target.id)
        console.log(playerId, 'thisss')
        checkWin()
        // getComputerChoice()
    })
    paperEl.addEventListener("click", function(evt) { 
        console.log(paperEl)
        playerId = parseInt(evt.target.id)
        console.log(playerId, '<----')
        checkWin()
        // getComputerChoice()
    })
    sicciorsEl.addEventListener("click", function(evt) { 
        playerId = parseInt(evt.target.id)
        console.log(playerId, '<-----')
        console.log(evt.target.id, 'this is for evt target.id')
        checkWin()
        // getComputerChoice()
    })
}

// console.log(playerId, '<-----')

const checkWin = () => {
    const randomNumber = getComputerChoice()

    if (playerId === randomNumber) {
        scores.tie++
        tieScore.innerHTML = scores.tie
    } else if (playerId === 0 && randomNumber === 2 || playerId === 1 && randomNumber === 0 || playerId === 2 && randomNumber === 1) {
        scores.win++
        playerScore.innerHTML = scores.win
    } else {
        scores.lose++
        compScore.innerHTML = scores.lose
    }

}

function init() { 

    playerClick()
}

init()