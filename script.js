


const playBtn = document.querySelector('.first-card__button');//GRAJ
const secondCard = document.querySelector('.second-card');// kategorie
const firstCard = document.querySelector('.first-card');//strona główna
const displayRules = document.querySelector('i');//zasady
const rules = document.querySelector('.rules');//zasady
const hideRules = document.querySelector('.hideRules')
const main = document.querySelector('main');//główny element strony

playBtn.addEventListener('click', () => {
    slideFirstCard();
    showSecondCard();

})


displayRules.addEventListener('click', function() {
    rules.classList.add('show');
    console.log('hej')
})
    
hideRules.addEventListener('click', function() {
    rules.classList.remove('show');
})

const slideFirstCard = function() {
    firstCard.classList.add('slide');
}

const showSecondCard = function() {
    secondCard.classList.add('showSecond');
    
}


