var question = document.querySelector('#question');
var choices = document.querySelectorAll('.choice-text');
var scoreText = document.querySelector('#score');

var currentQuestion = {};
var score = 0
var acceptingAnswers = true;
var questionCounter = 0 
var availableQuestions = []
var questionIndex = 0;
var secondsLeft = 100;

var quesitons = [
    {
        question: 'Arrays in JavaScript can be uesd to store ______.',
            choice1: 'numbers and strings',
            choice2: ' ther arrays',
            choice3: 'booleans',
            choice4: 'all of the above', 
            answer: 4,
    },
    {
        question: "Commonly used data types DO Not Include:",
            choice1: 'strings',
            choice2: 'booleans',
            choice3: 'alerts',
            choice4: 'numbers', 
            answer: 3,
    },
    {
        question: "The condition in an if / else statement enclosed with _______.",
            choice1: 'quotes',
            choice2: 'curly brackets',
            choice3: 'parenthesis',
            choice4: 'wquare brackets',
            answer: 2,
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
            choice1: 'commas',
            choice2: 'curly brackets',
            choice3: 'quotes',
            choice4: 'parenthesis', 
            answer : 3,
    },
    {
        question:  "A very useful tool used during development and debugging for parinting content to the debugger is:",
            choice1: 'JavaScript',
            choice2: 'terminal/ bash',
            choice3: 'for loops',
            choice4: 'console.log',
            answer:  4,
    },



]

var SCORE_POINTS = 100;
var MAX_QUESTIONS = 4;

startGame = () =>{
    questionIndex = 0
    score = 0
    availableQuestions = [...quesitons]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionIndex > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

   

    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question

    choices.forEach((choice) => {
        var number = choice.dataset['number']
        choice.innerHTML = currentQuestion['choice' + number]
    })

    availableQuestions.slice(questionIndex,1)
    acceptingAnswers = true
}

const answerClick = (e) => {
    
    questionIndex++;
    if(!acceptingAnswers) return

    acceptingAnswers = false
    var selectedChoice = e.target
    var selectedAnswer = selectedChoice.dataset['number']

    var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if (classToApply === 'correct') {
        incrementScore(SCORE_POINTS)            
    }

    selectedChoice.parentElement.classList.add(classToApply)
    getNewQuestion();
};

choices.forEach((choice) => {
    choice.addEventListener('click',answerClick )
})

incrementScore = num => {
    score += num
    scoreText.innerHTML = score
}

startGame()


var timeEl = document.getElementById('time')
function setTime() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = 'Time:' + secondsLeft;
        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        window.location.assign('./end.html');
        }
    }, 1000);
}

setTime();
