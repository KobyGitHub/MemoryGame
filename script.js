// document.addEventListener("DOMContentLoaded", Go())



const gameContainer = document.getElementById("game");
const startGame = document.querySelector('#start');
const buttons = document.querySelector('form');
const counter = document.createElement('p');

buttons.append(counter)
  let score = 0;
  let firstCard = '';
  let secondCard = '';  

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

buttons.addEventListener('click', function(e){
  e.preventDefault()
})
    

  startGame.addEventListener('click', function(e){
    createDivsForColors(shuffledColors);
    
    e.target.innerHTML = "Restart Game"

    if (e.target.innerHTML = "Restart Game"){
      startGame.addEventListener('click', function(){
        window.location.reload();
      })
    }
  })


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);



function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.setAttribute('id', colorArray.indexOf(color))
    newDiv.addEventListener("click", handleCardClick); // FlipCard gets called by Handle Card Click
    gameContainer.append(newDiv);

    const img = document.createElement('img');
    img.src = "memes/" + colorArray.indexOf(color) + ".jpeg";
    img.setAttribute('class', 'hide');
    newDiv.append(img)
  }
}

  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

function handleCardClick(event) {

    // This is pulling all cards, but you need to know specifically which one was clicked
    // const cards = document.querySelectorAll('img');

    const card = event.target.src;
    event.target.classList.remove("hide");
    console.log(card);

    cardsChosen.push(card);
    
    // for( let i = 0; i > cards.length; i++){
    //   const optionOneId = cardsChosenId[0]
    //   const optionTwoId = cardsChosenId[1]
      
    //   if(optionOneId == optionTwoId) {
    //     optionOneId.setAttribute('src', 'Meme.png')
    //     optionTwoId.setAttribute('src', 'Meme.png')
    //   alert('You have clicked the same image!')
    // }
    // else if (cardsChosen[0] === cardsChosen[1]) {
    //   alert('You found a match')
    //   cards[optionOneId].setAttribute('src', 'white.png')
    //   cards[optionTwoId].setAttribute('src', 'white.png')
    //   cards[optionOneId].removeEventListener('click', flipCard)
    //   cards[optionTwoId].removeEventListener('click', flipCard)
    //   cardsWon.push(cardsChosen)
    // } else {
    //   cards[optionOneId].setAttribute('src', 'images/blank.png')
    //   cards[optionTwoId].setAttribute('src', 'images/blank.png')
    //   alert('Sorry, try again')
    // }
    // cardsChosen = []
    // cardsChosenId = []
    // resultDisplay.textContent = cardsWon.length
    // if  (cardsWon.length === cardArray.length/2) {
    //   resultDisplay.textContent = 'Congratulations! You found them all!'
    // }

    // }
  }

  function flipCard() {
    const carders = document.querySelectorAll('img')
    const cardArray = Array.from(carders)
    let cardId = this.getAttribute('data-id')
    
    const name = Array.from(carders).map(function(name, num, list){
      if (cardId = num ){
        return name
      }
    })        
}


   
    

function checkMatch(cards) {
	if (cards[0] === cards[1]) {
  	console.log("it's a match");
  	return true;
  }
};


