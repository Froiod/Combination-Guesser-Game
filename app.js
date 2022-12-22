const gameArea = document.querySelector('.game')
const button = document.querySelector('button')
const message = document.querySelector('.message')
let gamePlay = false
let score = 0
button.addEventListener('click', () => {
  if (!gamePlay) {
    gamePlay = true
    gameArea.innerHTML = ""
    score = 0;
    maker()
    message.innerHTML = "Guess the combo";
    button.innerHTML = "Check Combo"
  } else {
    console.log("checker")
    score++;
    const numbers = document.querySelectorAll('.numb')
    let winCondition = 0;
    for (let i = 0; i < numbers.length; i++ ) {
      
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "green"
        numbers[i].style.color = "white"
        winCondition++;

      } 
      else {
        let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "black";
      }
      if (winCondition == numbers.length) {
        gameEND();
    }
    }
  }
})
function gameEND() {
  if (score == 1) {
    message.innerHTML = "You solved the combo in  " + score +" guess";
  } else {
    message.innerHTML = "You solved the combo in  " + score +" guesses";
  }
  gamePlay = false;
  button.innerHTML = "Restart Game";
}

// creating elements
function maker() {
  for (x = 0; x < 5; x++) {
    let el = document.createElement("input")
    el.setAttribute('type', 'number')
    el.max = 9
    el.min = 0
    el.size = 1
    el.style.width = "12vw"
    el.style.margin = "1rem"
    el.style.textAlign = "center"
    el.classList.add('numb')
    
    el.correct = Math.floor(Math.random() *10)
    el.value = 0
    el.order = x
    gameArea.appendChild(el)
    console.log(el)
  }
}
