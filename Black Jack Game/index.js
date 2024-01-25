let allCards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let cardEl = document.getElementById('card-el')
let sumEl = document.querySelector("#sum-el")
let userEl =document.querySelector('#user-el')

let user = {
    name : 'Guest',
    chips : '100'}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    allCards = [firstCard, secondCard]
    isAlive = true
    renderGame()
}

function getRandomCard() {
    let randonNumber = Math.floor(Math.random()*13)+1
    if (randonNumber===1) {
        return 11
    } else if (randonNumber>10) {
        return 10
    } else {
        return randonNumber
    }
}

function renderGame() {
    userEl.textContent = `${user.name} : $${user.chips}`
    cardEl.textContent = "Cards: "
    for (let i=0; i<allCards.length; i++) {
        cardEl.textContent+=allCards[i]+" "
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive===true && sum!==21) {
    let card = getRandomCard()
    allCards.push(card)
    sum+=card
    renderGame()}

}