const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
      {
            question: 'What is \"\{\" called?',
            choice1: 'Bracket',
            choice2: 'Curly bracket',
            choice3: 'Comma',
            choice4: 'Parentheses',
            answer: 2,
      },
      {
            question: 'What symbol signifies a class?',
            choice1: '.',
            choice2: '#',
            choice3: ',',
            choice4: '\'',
            answer: 1,
      },
      {
            question: 'What symbol is used to increment by 1?',
            choice1: '--',
            choice2: '==',
            choice3: '||',
            choice4: '++',
            answer: 4,
      },
      {
            question: 'What does \"true\" translate to if it is made a number?',
            choice1: '1',
            choice2: '0',
            choice3: '2',
            choice4: '-1',
            answer: 1,
      } 
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

// question operator
startGame = () => {
      questionCounter = 0
      score = 0
      availableQuestions = [...questions]
      getNewQuestion()
}

getNewQuestion = () => {
      // keeps track of score
      if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score)

            return window.location.assign('/end.html')
      }
      // question increment by 1 out of 4, then 2 out of 4, etc.
      questionCounter++
      progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
      // calculates current question and corresponds that with the percentage of how far through the quiz the user is
      progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
      // calculate value of question index
      const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
      // keeping track of question user is on
      currentQuestion = availableQuestions[questionsIndex]
      // which question to ask
      question.innerText = currentQuestion.question
      // registers choices clicked
      choices.forEach(choice => {
            const number = choice.dataset['number']
            choice.innerText = currentQuestion['choice' + number]
      })

      availableQuestions.splice(questionsIndex, 1) 

      acceptingAnswers = true

}

choices.forEach(choice => {
      choice.addEventListener('click', e => {
            if(!acceptingAnswers) return

            acceptingAnswers = false
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset['number']

            let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
            // adds points if selected answer is correct
            if(classToApply === 'correct') {
                  incrementScore(SCORE_POINTS)
            }
      })
})