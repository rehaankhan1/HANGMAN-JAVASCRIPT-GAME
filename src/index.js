import Hangman from './hangman'
import getPuzzle from './requests'

const Puzzle = document.querySelector('#puz')
const Guzzle = document.querySelector('#gez')


let me 



window.addEventListener('keypress', function(e){
    const oGuess = String.fromCharCode(e.charCode)
   me.makeGuess(oGuess) 
   render()
})


const render = () => {
 // Puzzle.textContent = me.getPuzzle()
 Puzzle.textContent = ''
  Guzzle.textContent = me.getStatus()
 
  me.getPuzzle().split('').forEach((wordi) => {
Puzzle.innerHTML += `<span>${wordi}</span>`
  }) 

}

const startGame = async () => {
  const puzzle =  await getPuzzle('2')
  me = new Hangman(puzzle, 5)
  render()
}


document.querySelector('#reset').addEventListener('click', startGame)

startGame()
console.log('CREATED BY REHAAN KHAN; -> https://github.com/rehaankhan1')