let yourInput = document.querySelector('.guess')
let Btn = document.querySelector('.btn-check')
let guessOutput = document.querySelector('.message')
let Numberr = document.querySelector('.number')
let keepGuesing = document.querySelector('h1')
let boddy = document.querySelector('body')
let trial = document.querySelector('.score')

yourInput.innerHTML = 'Type a Number'
console.log(yourInput.innerHTML);




let startGame = () => {
    let numbers = [1, 2, 3, 4, 5,]
    let randomm = Math.floor(Math.random() * numbers.length)
     Numberr.innerHTML = numbers[randomm]
    
    
     

   
     if (yourInput.value == null || yourInput.value < 1 || yourInput.value > 5 || yourInput.value == "") {
        document.querySelector('.dem').innerHTML = 'Oga type a Number ranging from 1-5!';
        Numberr.innerHTML = '?'
        guessOutput.innerHTML = ''
        keepGuesing.innerHTML = ''
        trial.innerHTML = '5'
     }
      else if (yourInput.value == numbers[randomm]) {
         guessOutput.innerHTML = 'CORRECT!'
         keepGuesing.innerHTML = 'Numbers Match!'
         boddy.style.backgroundColor = 'green'
         trial.innerHTML = '5'
     }else if(trial.innerHTML == 0){
        guessOutput.innerHTML = 'Game Over'
        keepGuesing.innerHTML = 'Game Over'
    }else{
        guessOutput.innerHTML = 'INCORRECT!'
        keepGuesing.innerHTML = 'Keep Guessing'
        boddy.style.backgroundColor = 'red'
        trial.innerHTML--
     }
    }
         
     Btn.addEventListener('click', startGame)
      
     
     document.querySelector('.dem').innerHTML