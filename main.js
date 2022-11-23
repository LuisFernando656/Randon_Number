//variaveis
const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnAgain')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randonNumber = Math.round(Math.random() * 10)
let xAtempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener('keydown', enterClick)

// função callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (inputNumber.value >= 0 && inputNumber.value <= 10 && inputNumber.value != '') {
    if (+inputNumber.value == randonNumber) {
      toggleScreen()
      screen2.querySelector(
        'h2'
      ).innerHTML = `Acertou em ${xAtempts} tentativas`
    } else {
      clearFocus()
    }

    xAtempts++
  }else {
    alert('Número inválido, Tente novamente!')
  }
}

function enterClick(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleAgainClick()
  }
}

const clearFocus = () => {
  inputNumber.value = ''
  inputNumber.focus()
}

function handleAgainClick() {
  toggleScreen()
  xAtempts = 1
  clearFocus()
  randonNumber = Math.round(Math.random() * 10)
}

const toggleScreen = () => {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
