const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(score => {
      // whatever is typed into the input at the end of quiz is injected into the list
      return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')