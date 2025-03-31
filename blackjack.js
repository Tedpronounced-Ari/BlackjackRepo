function getCards() {
    return Math.floor(Math.random ()*12);
}

function startGame() {
    dealerCardsTotal = getCards()+ getCards();
    dealerCards1 = getCards(); 
    dealerCards2 = getCards();
    dealerCardsTotal = dealerCards1 + dealerCards2

    playerCards = getCards()+ getCards();
    console.log("you have a total of" + dealerCardsTotal)
}

startGame (); 
