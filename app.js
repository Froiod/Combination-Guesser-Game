const gameArea = document.querySelector('.game')
const button = document.querySelector('button')
let gamePlay = false

button.addEventListener('click', () => {
  if (!gamePlay) {
    gamePlay = true
    maker()
    button.innerHTML = "Check Combo"
  } else {
    console.log("checker")
  }
})

// creating elements
function maker() {
  for (x = 0; x < 5; x++) {
    let el = document.createElement("input")
    el.setAttribute('type', 'number')
    el.max = 9
    el.min = 0
    el.size = 1
    el.style.width = "50px"
    el.classList.add('numb')
    
    el.correct = Math.floor(Math.random() *10)
    el.value = el.correct
    el.order = x
    gameArea.appendChild(el)
    console.log(el)
  }
}
