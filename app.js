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
    const numbers = document.querySelectorAll('.numb')
    console.log(numbers)
    for (let i = 0; i < numbers.length; i++ ) {
      console.log(numbers[i].value)
      console.log(numbers[i].correct)
      if (numbers[i].value == numbers[i].correct) {
        console.log('Match')
      } else {
        console.log('No Match')
      }
    }
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
    el.style.width = "12vw"
    el.style.margin = "1rem"
    el.style.textAlign = "center"
    el.classList.add('numb')
    
    el.correct = Math.floor(Math.random() *10)
    el.value = el.correct
    el.order = x
    gameArea.appendChild(el)
    console.log(el)
  }
}
