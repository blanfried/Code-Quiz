const username = document.querySelector('#username')
const saveScoreBtn  = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores =  JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

// So that if a key is pressed it re-enables the save button
username.addEventListener('keyup', () => {
      saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
      e.preventDefault()

      const score = {
            score: mostRecentScore,
            name: username.value
      }

      highScores.push(score)

      highScores.sort((a,b) => {
            return b.score - a.score
      })

      highScores.splice(5)

      localStorage.setItem('highScores', JSON.stringify(highScores))
      window.location.assign('/Users/baerlanfried/Code-Quiz/highscores.html')

      
}