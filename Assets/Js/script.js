var startBtn = document.querySelector("#start-btn")
var quizDiv = document.querySelector("#quiz")
var answerBtn1 = document.createElement("button");
answerBtn1.setAttribute('id','a');
var answerBtn2 = document.createElement("button");
answerBtn2.setAttribute('id','b');
var answerBtn3 = document.createElement("button");
answerBtn3.setAttribute('id','c');
var answerBtn4 = document.createElement("button");
answerBtn4.setAttribute('id','d');
var questionText = document.createElement("h1");
var timeValue =  60;
var qCount = 0;
var qNumb = 0;
var uScore = 0;
var highScore = [];

const myQuestions = [
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

function checkAnswer(){ alert(this.id)
if(this.id === myQuestions[qNumb].correctAnswer){
  rightAnswer();
}
else{
  wrongAnswer();
}
}
function rightAnswer(){
  uScore += myQuestions[qNumb].points;
  if(qNumb<myQuestions.length){
    qNumb++;
    changeQuestion()
  } else {
    alert("end of quiz")
  }
}
function wrongAnswer(){
alert("wrong "+ "");
if(qNumb<myQuestions.length){
  qNumb++;
  changeQuestion()
} else {
  alert("end of quiz")
}
}
function timer(){}
function changeQuestion(){
  questionText.textContent = myQuestions[qNumb].question;
  answerBtn1.textContent = myQuestions[qNumb].answers["a"]
  answerBtn2.textContent = myQuestions[qNumb].answers["b"];
  answerBtn3.textContent = myQuestions[qNumb].answers["c"];
  answerBtn4.textContent = myQuestions[qNumb].answers["d"];
}
function startQuiz(){
  document.getElementById("start-quiz").remove();
  quizDiv.append(questionText);
  questionText.textContent = myQuestions[qNumb].question;
  quizDiv.append(answerBtn1);
  answerBtn1.textContent = myQuestions[qNumb].answers["a"]
  quizDiv.append(answerBtn2);
  answerBtn2.textContent = myQuestions[qNumb].answers["b"];
  quizDiv.append(answerBtn3);
  answerBtn3.textContent = myQuestions[qNumb].answers["c"];
  quizDiv.append(answerBtn4);
  answerBtn4.textContent = myQuestions[qNumb].answers["d"];
}
function endQuiz(){}
function saveScore(){
  localStorage.setItem('highScore',JSON.stringify())
}
function getScore(){
  var storedhScore = JSON.parse(localStorage.getItem("highScore"));
  if(storedhScore!== null){
    highScore = storedhScore
  }
}
function renderHighScore(){

}


startBtn.addEventListener("click",startQuiz)
answerBtn1.addEventListener("click",checkAnswer)
answerBtn2.addEventListener("click",checkAnswer)
answerBtn3.addEventListener("click",checkAnswer)
answerBtn4.addEventListener("click",checkAnswer)