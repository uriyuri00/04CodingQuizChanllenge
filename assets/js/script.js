var startButton = document.getElementById('start-btn');
var welcomeText = document.getElementById('welcomeText');
var answerButton = document.getElementById('anwser')
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var QuizArrays
var currentQuestionIndex = 0;

startButton.addEventListener('click', startGame);


function startGame() {
  startButton.classList.add('hide'); 
  welcomeText.classList.add('hide');
  QuizArrays = questions.sort();
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
};

function setNextQuestion() {
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else (endGame())

};
function endGame() {
  console.log("game-over");
}

function showQuestion(question) {
  var currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  questions[currentQuestionIndex].answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    answerButtonsElement.appendChild(button)
    button.addEventListener('click', selectAnswer)
    currentQuestionIndex++;

  })
}



function selectAnswer(e) {
  const selectedButton = e.target
}

var questions = [
  {
      question: 'Arrays in JavaScript can be uesd to store ______.',
      answers: [
          { text:'1. numbers and strings', correct: false},
          { text:'2. other arrays', correct: false },
          { text:'3. booleans', correct: false },
          { text:'4. all of the above', correct: true }
      ]
  },
  {
      question: "Commonly used data types DO Not Include:",
      answers: [
          { text:'1. strings', correct: false},
          { text:'2. booleans', correct: false },
          { text:'3. alerts', correct: false },
          { text:'4. numbers', correct: true }
      ]
  },
  {
      question: "The condition in an if / else statement enclosed with _______.",
      answers: [
          { text:'1. quotes', correct: false},
          { text:'2. curly brackets', correct: false },
          { text:'3. parenthesis', correct: false },
          { text:'4. square brackets', correct: true }
      ]
  },
  {
      question: "String values must be enclosed within _____ when being assigned to variables.",
      answers: [
          { text:'1. commas', correct: true},
          { text:'2. curly brackets', correct: false },
          { text:'3. quotes', correct: false },
          { text:'4. parenthesis', correct: false }
      ]
      },
  {
      question: "A very useful tool used during development and debugging for parinting content to the debugger is:",
      answers: [
          { text:'1. JavaScript', correct: true},
          { text:'2. terminal/ bash', correct: false },
          { text:'3. for loops', correct: false },
          { text:"4. console.log", correct: false }
      ]
  }
];


var secondsLeft = 60;
function setTime() {
    var timeEl = document.getElementById('time');
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = 'Time:' + secondsLeft;
  
      if(secondsLeft === 0) {
        
        clearInterval(timerInterval);
      }
  
    }, 1000)
  };

