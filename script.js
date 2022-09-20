const gameContainer = document.getElementById("game");
const startGame = document.querySelector('button');
const buttons = document.querySelector('form');
const counter = document.createElement('p')
buttons.append(counter)
  let score = 0;
  let firstCard = '';
  let secondCard = '';  

  function keyFramesShake () {
    {transform: 'translate3d(-1+px, 0, 0)'}
    {transform: 'translate3d(2+px, 0, 0)'}
    {transform: 'translate3d(-4+px, 0, 0)'}
    {transform: 'translate3d(4+px, 0, 0)'}
  }

//  const keyFramesShakeTime = {duration: 500}  


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

startGame.addEventListener('click', function(){
    const restartGame = document.createElement('button');
    restartGame.setAttribute('type', 'submit');
    restartGame.innerHTML = 'Restart Game'
    buttons.append(restartGame) 

})

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);

    const img = document.createElement('img');
    img.src = "memes/" + colorArray.indexOf(color) + ".jpeg";
    newDiv.append(img)
    

  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  //event.target.parentElement.classList.add('clicked');
 
  if (score === 0){
    firstCard = event.target
    score++;
  } else {
    secondCard = event.target
    score = 0;
    
    
    if (firstCard == secondCard){
      let selectedCards = [firstCard.parentElement, secondCard.parentElement]
      
      selectedCards[0].setAttribute('id', 'checked');
      selectedCards[1].setAttribute('id', 'checked');

      for (let cards of selectedCards){
        if (cards.id = 'checked') {
          firstCard.style.opacity = 1
        }

      }

      selectedCards[0].removeAttribute('id');
      selectedCards[1].removeAttribute('id');
    } else {
      let incorrectCards = [firstCard.parentElement, secondCard.parentElement]
       
      incorrectCards[0].setAttribute('id', 'shake');
      incorrectCards[1].setAttribute('id', 'shake');

      for (let card of incorrectCards){
        if (card.id = 'shake') {
          // firstCard.style.backgroundColor = "red";
          firstCard.style.animation = keyFramesShake (0.5)+'s';

          

          setTimeout(function(){
            incorrectCards[0].removeAttribute('id');
            incorrectCards[1].removeAttribute('id');
          }, 1000)
        }
      }  
    }
  }
    
   
    counter.innerText = 'Score:' + score 
}


// when the DOM loads
createDivsForColors(shuffledColors);

/* its not shaking
id checked is not attaching
everytime i click strt game restart pops up */