

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

};


var HighScoreName;

var secondsLeft = 60;
function setTime() {
    // Sets interval in variable 
  // 변수에 간격 설정
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = 'Time:' + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        // 설정된 간격으로 작업 실행을 중지합니다.
        clearInterval(timerInterval);
        // Calls function to create and append image
        // 이미지를 만들고 추가하는 함수를 호출합니다.
        sendMessage();
      }
  
    }, 1000);
  }

  setTime();

document.getElementById("btn").addEventListener('click',QuizStart);

function QuizStart(){
  
}
for (let i = 0; i < questions.length; i++) {
  var response = 
  if(response == questions[i].anwser) {
    FinalScore++;
    'Correct!'
  }   else{
     'Wrong!'
  }
}


document.getElementById("btn1").addEventListener('click',hello);

function hello(){
  
}


var SCORE_POINTS = 100
var MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    FinalScore = 0
    availableQuestions = [...questions]
    getNewQuestion()
};

getNewQuestion = () => {
    if(availableQuestionslength === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecnetScore', FinalScore)

        return window.location.assign ('/end.html')

    }
    questionCounter++;
    ProgressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    ProgressBarfull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choice.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]

    });

    acceptingAnwsers =  true;



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

