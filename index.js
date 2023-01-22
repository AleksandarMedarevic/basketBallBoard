let homeScore = 0
let guestScore = 0
document.getElementById("rezultat-home").textContent = homeScore
document.getElementById("rezultat-guest").textContent = guestScore

let sumHome = document.getElementById("rezultat-home")

let sumGuest = document.getElementById("rezultat-guest")

function twoPointsHome() {
    homeScore=homeScore+2
    sumHome.innerText=homeScore
}

function onePointsHome() {
    homeScore=homeScore+1
    sumHome.innerText=homeScore
}

function threePointsHome() {
    homeScore=homeScore+3
    sumHome.innerText=homeScore
}


// Scoring board for guest

function twoPointsGuest() {
    guestScore=guestScore+2
    sumGuest.innerText=guestScore
}

function onePointsGuest() {
    guestScore=guestScore+1
    sumGuest.innerText=guestScore
}

function threePointsGuest() {
    guestScore=guestScore+3
    sumGuest.innerText=guestScore
}

function startNewGame() {
    guestScore=0
    homeScore=0
    sumGuest.innerText=guestScore
    sumHome.innerText=homeScore
    whoWonParagraph.innerText=("")
}


let whoWonParagraph = document.getElementById("whoWon")

function gameOver() {
    if (homeScore < guestScore) {
  whoWonParagraph.innerText="Game over! Guest Won.";
} else if (homeScore == guestScore) {
  whoWonParagraph.innerText="Game over! Drow.";
} else {
  whoWonParagraph.innerText="Game over! Home Won.";
} }


