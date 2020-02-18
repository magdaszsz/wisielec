const words = {
    horrors: [
        'Halloween',
        'Koszmar z ulicy Więzów',
        'Noc żywych trupów',
        'Zombieland',
        'Zejście',
        'Silent Hill',
        'Lśnienie',
        'Dziecko Rosemary',
        'Teksańska masakra piłą mechaniczną',
        'Egzorcysta'
    ],

    killers: [
        'Ted Bundy', 
        'Charles Manson'
    ]
}


const playBtn = document.querySelector('.first-card__button');//GRAJ
const secondCard = document.querySelector('.second-card');// kategorie
const firstCard = document.querySelector('.first-card');//strona główna
const thirdCard = document.querySelector('.third-card'); // strona z grą
const displayRules = document.querySelectorAll('i');//ikona pokaż zasady
const rules = document.querySelector('.rules');//zasady aside
//const hideRules = document.querySelector('.hideRules')
const main = document.querySelector('main');//główny element strony
const horrors = document.querySelector('#horrors')// guzik horrory
const killers = document.querySelector('#killers') // guzik killers

const slideFirstCard = function() {
    firstCard.classList.add('slide');
}

const showSecondCard = function() {
    secondCard.classList.add('showSecond');
}

const showThirdCard = function() {
    thirdCard.classList.add('showThird');
}

const hideSecond = function() {
    secondCard.classList.remove('showSecond');
    secondCard.classList.add('hideSecond');
}

const showThird = function() {
    thirdCard.classList.add('showThird');
}

playBtn.addEventListener('click', () => {
    slideFirstCard();
    showSecondCard();

})

horrors.addEventListener('click', () => {
    hideSecond();
    showThird();
})

for (let rule of displayRules) {
    rule.addEventListener('click', function () {
        rules.classList.add('show');
    })
}

let anwser = {};  

const correctLetters = document.querySelector('.correctLetters'); //lista z poprawnymi literami


horrors.addEventListener('click', function() {
    words.horrors.sort(function() {
        return .5 - Math.random();
    })

    let horrorsWord = words.horrors.shift();
    anwser.word = horrorsWord.split('');
    showBoard();
})


function showBoard() {
    anwser.word.forEach(function(letter){

    let blank = document.createElement('div')
    blank.innerText = '__';
    blank.className = "singleLetter";
    correctLetters.appendChild(blank);

})
}


const alphabetLetters = document.querySelectorAll('.item-alphabet');


alphabetLetters.forEach(function(letter) {
    letter.addEventListener('click', function(event) {
    const guess = event.target.textContent;
        
        const anwserArray = anwser.word;
        for(let anwser of anwserArray) {
           if(anwser === guess){
               
           }
    }})
        
    
})




