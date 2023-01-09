var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var FinalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');

var highScores = JSON.parse(localStorage.getItem('highScores')) ||[];

var MAX_HIGH_SCORES = 5;

FinalScore.innerHTML = mostRecentScore;

username.addEventListener('keyup',() => {
    saveScoreBtn.disabled = !username.value
});

saveHighScore = e => {
    e.preventDefault()

    var score = {
        score : mostRecentScore,
        name : username.value
    }


    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(6)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('highscores.html')
}