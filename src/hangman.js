class Hangman {
    constructor(word, guesses){
        //below new line for the whitespace error
        this.test = word.toLowerCase().replace(/\s/g, "")
        console.log(this.test)
        this.word = word.toLowerCase().split('')       
        
        this.guesses = guesses
        this.guessedL = []
        this.status = 'playing'  
    }
    CheckStatus() {

        const finished = this.test.split('').every((letter) => {
            return this.guessedL.includes(letter)
            })
            if(this.guesses <= 0){
                this.status = 'failed'
                
            }else if(finished){
                this.status = 'finished'
                
            }else{
                this.status = 'playing'
                
            }
              
    }
    getStatus() {
        if (this.status === 'failed'){
            return `Nice try! The Word was ${this.word.join('')}`
        }else if( this.status === 'finished'){
            return `Great work! You guesses the word.`
        }else{
            return `Guesses left: ${this.guesses}`
        }
    }

    getPuzzle() {
        let result = ''
        this.word.forEach((word) => {
            if(this.guessedL.includes(word)){
                result += word
            }else if(word === ' '){
                result += ' '
            }
            else{
                result += '*'
            }
            
        })
        return result 
    }

    makeGuess(guess){
        this.guess = guess.toLowerCase()
        const isUnique = !this.guessedL.includes(guess)
        const isBadPhase = !this.word.includes(guess)
    
        if(this.status !== 'playing'){
            return
        }
    
        if(isUnique){
            this.guessedL.push(guess)
        }
        if(isUnique && isBadPhase){
            this.guesses--
        }
        this.CheckStatus()  
    }
}

export {Hangman as default}