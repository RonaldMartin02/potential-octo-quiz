var startBtn = document.querySelector("#start-btn")

var qDiv = document.querySelector("#quiz")
timer
var tHeader = document.querySelector("#timer")
var timerEl=document.createElement("p")
timerEl.setAttribute('style','');
tHeader.setAttribute('style','display: flex; width:100%; justify-content:flex-end');


//quiz page
var questionText = document.createElement("h1");

var answerBtn1 = document.createElement("button");
answerBtn1.setAttribute('id','a');
var answerBtn2 = document.createElement("button");
answerBtn2.setAttribute('id','b');
var answerBtn3 = document.createElement("button");
answerBtn3.setAttribute('id','c');
var answerBtn4 = document.createElement("button");
answerBtn4.setAttribute('id','d');

var aDiv = document.querySelector("#answer-div")
var aHeader= document.createElement("h2");


//end quiz page
var eQuiz = document.querySelector("#end-quiz")

//highscore page
var highscoreButton = document.createElement("button");
highscoreButton.setAttribute('id','highscore-btn');


var timeLeft = 59;
var qCount = 0;
var qNumb = 0;
var uScore = 0;
var highScore = [];
var highscorePlayer = {
  name : '',
  highscore: 0,  
} ;
const myQs = [
  {
    question: "what is 1 + 1",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "a",
    points: 5
  },
  {
    question: "what is 4-1",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "b",
    points: 5
  },
  {
    question: "what is 5-2",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "b",
    points: 5
  },
  {
    question: "what is 6-4",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "a",
    points: 5
  },
  {
    question: "what is 11-7",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "d",
    points: 5
  },
  {
    question: "what is 8-3",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "d",
    points: 5
  },
  {
    question: "what is 4+1-4+3+6",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "a",
    points: 5
  },
  {
    question: "what is 4-5+4+2-3",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "a",
    points: 5
  },
  {
    question: "what is 42-37",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "d",
    points: 5
  },
  {
    question: "what is 4-2",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "a",
    points: 5
  },
  {
    question: "what is 4-1+2",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "d",
    points: 5
  }
];

function checkAnswer(){
  //alert(this.id)
if(this.id === myQs[qNumb].correctAnswer){
  rightAnswer();
}
else{
  wrongAnswer();
}
}

function rightAnswer(){
  uScore += myQs[qNumb].points;
  if(qNumb<myQs.length){
    qNumb++;
    changeQuestion()
  } else {
    endQuiz()
  }
}

function wrongAnswer(){
if(qNumb<myQs.length){
  qNumb++;
  changeQuestion()
  
} else {
  endQuiz()
}
}
function timer(){
    var timeInterval = setInterval(() => {
      
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        endQuiz()
      }
    }, 1000);
  }
  
function changeQuestion(){
  if(qNumb<myQs.length){
  questionText.textContent = myQs[qNumb].question;
  answerBtn1.textContent = myQs[qNumb].answers["a"];
  answerBtn2.textContent = myQs[qNumb].answers["b"];
  answerBtn3.textContent = myQs[qNumb].answers["c"];
  answerBtn4.textContent = myQs[qNumb].answers["d"];
} else {
  endQuiz();
}
}
function startQuiz(){
  document.getElementById("start-quiz").remove();
  tHeader.append(timerEl);
  timerEl.textContent = "60 seconds remaining"
  timer();
  qDiv.append(questionText);
  questionText.textContent = myQs[qNumb].question;
  qDiv.append(answerBtn1);
  answerBtn1.textContent = myQs[qNumb].answers["a"]
  qDiv.append(answerBtn2);
  answerBtn2.textContent = myQs[qNumb].answers["b"];
  qDiv.append(answerBtn3);
  answerBtn3.textContent = myQs[qNumb].answers["c"];
  qDiv.append(answerBtn4);
  answerBtn4.textContent = myQs[qNumb].answers["d"];
}
function endQuiz(){
  document.getElementById("timer").remove();
  document.getElementById("quiz").remove();
  highscorePlayer = {
    name: prompt("what is your name"),
    highscore: uScore
  }
  highScore.push(highscorePlayer)
  saveScore()
 
}
function saveScore(highscorePlayer){
  localStorage.setItem('highScore', JSON.stringify(highScore))
}
function getScore(){
  var storedhScore = JSON.parse(localStorage.getItem("highScore"));
  if(storedhScore!== null){
    highScore = storedhScore
  }
}
function renderHighScore(){
getScore()
}


startBtn.addEventListener("click",startQuiz)
answerBtn1.addEventListener("click",checkAnswer)
answerBtn2.addEventListener("click",checkAnswer)
answerBtn3.addEventListener("click",checkAnswer)
answerBtn4.addEventListener("click",checkAnswer)

//<form id="todo-form" method="POST">
//<label for="todo-text">Add a Todo: </label>
//<input type="text" placeholder="I need to..." name="todo-text" id="todo-text" />
//</form>