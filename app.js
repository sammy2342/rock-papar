let randomNumber 
let rock = 0 
let paper = 1 
let sicciors = 2
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

console.log(playerId, '<-----')

const checkWin = () => {
    if (playerId === randomNumber.toString()) {
        console.log('>playerId',playerId, randomNumber, '<computerrantnumber')
        alert('tie')
        scores.tie++
      } else if (playerId === "0" && randomNumber === 2 || playerId === "1" && randomNumber === 0 || playerId === "2" && randomNumber === 1) {
        console.log('>playerId>>>',playerId, randomNumber, '<<<<<computerrantnumber')
        alert('you won')
        scores.win++
      } else {
        console.log('>playerId>>>',playerId, randomNumber, '<<<<<computerrantnumber')
        alert('computer won')
        scores.lose++
      }
}

function init() { 
    getComputerChoice()
    playerClick()
}

init()