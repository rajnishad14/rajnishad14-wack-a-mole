const grid = document.getElementsByClassName('square')
let prev = 0
let next = 0
const mole = '👽'
let game = false
let score = 0
let interval

const start = () => {
  timer()
}

const timer = () => {
  game = true
  let i = 10
  let timeLeft = document.getElementById('time-left')
  chnageMole()
  interval = setInterval(() => {
    i--
    timeLeft.innerText = i
    chnageMole()
    if (i <= 0) {
      clearInterval(interval)
      game = false
      grid[prev].innerHTML = ''
    }
  }, 1000)
}

const chnageMole = () => {
  if (grid[prev].classList.contains('mole')) {
    grid[prev].classList.remove('mole')
    grid[prev].innerHTML = ''
  }
  let next = Math.floor(Math.random() * 9 + 0)
  grid[next].classList.add('mole')
  grid[next].innerHTML = mole
  prev = next
}

const handleClick = (e) => {
  if (game) {
    if (e.classList.contains('mole')) {
      score++
      document.getElementById('score').innerText = score
    }
  }
}

const reset = () => {
  game = false
  prev = 0
  next = 0
  score = 0
  document.getElementById('score').innerText = 0
  document.getElementById('time-left').innerText = 10
  clearInterval(interval)
}
