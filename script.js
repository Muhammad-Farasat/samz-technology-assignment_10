const cards = document.querySelectorAll('.card');


let hasCardFlipped = false
let firstCard, secondCard;
let lockBoard = false

function flipCard() {

    if (lockBoard) return;
    if (this === firstCard) return;

    console.log(this);



    this.classList.add('flip')

    if (!hasCardFlipped) {

        hasCardFlipped = true
        firstCard = this

        return;

    }

    secondCard = this

    matchCards()

}

function matchCards() {

    firstCard.dataset.pokemon === secondCard.dataset.pokemon ? disableCards() : unFlipCards()

}

function disableCards() {

    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard()

}

function unFlipCards() {
    lockBoard = true

    setTimeout(() => {

        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        
        resetBoard()

    }, 1500)
}

function resetBoard() {

    [hasCardFlipped, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]

}

(function shuffleCards(){
    cards.forEach(card => {
        let randomNumber = Math.floor(Math.random()*8)
        card.style.order = randomNumber
    })
})()

cards.forEach(card => card.addEventListener('click', flipCard))
