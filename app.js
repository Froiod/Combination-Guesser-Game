const gameArea = document.querySelector('.game')
const button = document.querySelector('button')
let gamePlay = false

button.addEventListener('click', () => {
  if (!gamePlay) {
    gamePlay = true
    button.innerHTML = "Check Combo"
  } else {
    console.log("checker")
  }
})
