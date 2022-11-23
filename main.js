//variaveis
const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnAgain')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randonNumber = Math.round(Math.random() * 10)
let xAtempts = 1
console.log(randonNumber)

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener('keydown', enterClick)

// função callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  let insertNumber = inputNumber.value

  if (insertNumber < 0 || insertNumber > 10 || insertNumber == '') {
    alert('Número inválido, Tente novamente!')
    inputNumber.value = ''
  }else {
    if (+inputNumber.value == randonNumber) {
      toggleScreen()
      screen2.querySelector(
        'h2'
        ).innerHTML = `Acertou em ${xAtempts} tentativas o número ${randonNumber}`
      } else {
        inputNumber.value = ''
        inputNumber.focus()
        xAtempts++ 
      }
    }
}

function enterClick(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleAgainClick()
  }
}

function handleAgainClick() {
  toggleScreen()
  xAtempts = 0
  inputNumber.focus()
  randonNumber = Math.round(Math.random() * 10)
}

const toggleScreen = () => {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}