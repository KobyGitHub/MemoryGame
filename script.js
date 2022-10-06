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

// startGame.addEventListener('click', function(){
//     const restartGame = document.createElement('button');
//     restartGame.setAttribute('type', 'submit');
//     restartGame.innerHTML = 'Restart Game'
//     buttons.append(restartGame) 

// })

  startGame.addEventListener('click', function(e){
    e.target.innerHTML = "Restart Game"

    if (e.target.innerHTML = "Restart Game"){
      startGame.addEventListener('click', function(){
        window.location.reload()
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
    
    newDiv.addEventListener("click", function(){
      let count = 0
      count++
      counter.innerText = 'Score: ' + count 

    })
    

  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  //event.target.parentElement.classList.add('clicked');

  
  if (score === 0){
    firstCard = event.target
    score++;
  } else if (score !== 0) {
    secondCard = event.target;
    // score = 0;
    
    
    if (firstCard.src == secondCard.src){
      let selectedCards = [firstCard, secondCard.parentElement]
      
      firstCard.parentElement.setAttribute('class', 'checked');
      secondCard.parentElement.setAttribute('class', 'checked');

      for (let cards of selectedCards){
        if (cards.class === 'class checked'){
          firstCard.style.opacity = 1
        }

      }

      selectedCards[0].removeAttribute('class');
      selectedCards[1].removeAttribute('class');
    } else {
      let incorrectCards = [firstCard.parentElement, secondCard.parentElement]
       
      incorrectCards[0].parentElement.setAttribute('class', 'shake');
      incorrectCards[1].parentElement.setAttribute('class', 'shake');

      for (let card of incorrectCards){
        if (card.class = 'shake') {
          // firstCard.style.backgroundColor = "red";
          firstCard.classList.add = "animate__animated animate__bounce";

          

          setTimeout(function(){
            incorrectCards[0].removeAttribute('class');
            incorrectCards[1].removeAttribute('class');
          }, 1000)
        }
      }  
    } 
  }  console.log(firstCard)
      console.log(secondCard)




    // counter.innerText = 'Score:' + score 
}


// when the DOM loads
createDivsForColors(shuffledColors);

