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