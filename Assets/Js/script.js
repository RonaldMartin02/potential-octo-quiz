
var sqDiv = document.querySelector("#start-quiz")
var startBtn = document.querySelector("#start-btn")
sqDiv.setAttribute('style', 'width:100%; height:100%; text-align:center');

//timer for quiz page
var tHeader = document.querySelector("#timer")
var timerEl = document.createElement("p")
timerEl.setAttribute('style', '');
tHeader.setAttribute('style', 'display: flex; width:100%; justify-content:flex-end');


var qDiv = document.querySelector("#quiz")
qDiv.setAttribute('style', 'width:100%; text-align:center;');
var questionText = document.createElement("h1");

var answerBtn1 = document.createElement("button");
answerBtn1.setAttribute('id', 'a');
answerBtn1.setAttribute('class', 'btn');
var answerBtn2 = document.createElement("button");
answerBtn2.setAttribute('id', 'b');
answerBtn2.setAttribute('class', 'btn');
var answerBtn3 = document.createElement("button");
answerBtn3.setAttribute('id', 'c');
answerBtn3.setAttribute('class', 'btn');
var answerBtn4 = document.createElement("button");
answerBtn4.setAttribute('id', 'd');
answerBtn4.setAttribute('class', 'btn');

var aDiv = document.querySelector("#answer-div")
var aHeader = document.createElement("h2");


//end quiz page

var hDiv = document.querySelector("#highscore-div")
var highscorePagebtn = document.createElement("button")
var pName = document.createElement("input")
var highScoreList = document.createElement("ul");
highScoreList.setAttribute("id", "Score-list")
var highScoreH1 = document.createElement("h1");

pName.setAttribute('style', 'display: flex;');
highscorePagebtn.setAttribute('style', 'display: flex;');

pName.setAttribute('id', 'player-name');
highscorePagebtn.textContent = "Submit"
//highscore page

highscorePagebtn.setAttribute('id', 'highscore-btn');


var sDiv = document.querySelector("#scores")




var timeLeft = 19;
var qCount = 0;
var qNumb = 0;
var uScore = 0;
let highScores = [];
const myQs = [
  {
    question: "What is 1 + 1?",
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
    question: "What is 4 - 1?",
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
    question: "What is 5 - 2?",
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
    question: "What is 6 - 4?",
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
    question: "What is 11 - 7?",
    answers: {
      a: "2",
      b: "3",
      c: "4",
      d: "5"
    },
    correctAnswer: "c",
    points: 5
  },
  {
    question: "What is 8 - 3?",
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
    question: "What is 4 - (1 x 4) + (6 / 3)?",
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
    question: "What is (5 + 9) / (14 / 2)?",
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
    question: "What is 42 - 37?",
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
    question: "What is 4-2?",
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
    question: "What is 4 - 1 + 2?",
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
function checkAnswer() {
  if (this.id === myQs[qNumb].correctAnswer) {
    rightAnswer();
    aHeaderTimer('correct')
  }
  else {
    wrongAnswer();
    aHeaderTimer('wrong')
  }
}
function rightAnswer() {

  uScore += myQs[qNumb].points;
  if (qNumb < myQs.length) {
    qNumb++;

    changeQuestion()
  } else {
    endQuiz()
  }
}
function wrongAnswer() {

  if (qNumb < myQs.length) {
    qNumb++;

    changeQuestion()

  } else {
    endQuiz()
  }
}
function aHeaderTimer(answer) {
  aDiv.append(aHeader);
  aHeader.textContent = answer;
  var aHeaderTimeLeft = 1;
  var timeInterval = setInterval(() => {
    if (aHeaderTimeLeft >= 1) {
      aHeader.textContent = answer;
      aHeaderTimeLeft--;
    } else {
      aHeader.textContent = '';
      clearInterval(timeInterval);
    }
  }, 250);
}
function timer() {
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
function changeQuestion() {
  if (qNumb < myQs.length) {
    questionText.textContent = myQs[qNumb].question;
    answerBtn1.textContent = myQs[qNumb].answers["a"];
    answerBtn2.textContent = myQs[qNumb].answers["b"];
    answerBtn3.textContent = myQs[qNumb].answers["c"];
    answerBtn4.textContent = myQs[qNumb].answers["d"];
  } else {
    endQuiz();
  }
}
function startQuiz() {
  document.getElementById("start-quiz").remove();
  tHeader.append(timerEl);
  timerEl.textContent = "20 seconds remaining"
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
function endQuiz() {
  document.getElementById("timer").remove();
  document.getElementById("quiz").remove();
  aDiv.remove();
  sDiv.append(highScoreH1)
  highScoreH1.textContent = "Top Scores"
  hDiv.append(pName);
  hDiv.append(highscorePagebtn);
  sDiv.append(highScoreList);
  var hscorePtag = document.createElement("p")
  sDiv.append(hscorePtag)
hscorePtag.textContent = "Your score was " + uScore + ". Enter your name down below then press submit to add yourself to the Leaderboard"
  
getScores();  
  
}
function saveScore() {
  highScores.push({
    name: document.getElementById("player-name").value,
    highscore: parseInt(uScore)
  })
  localStorage.setItem('highScores', JSON.stringify(highScores))

  const ulElement = document.getElementById('Score-list')
  ulElement.setAttribute('style', 'list-style-type: none');
  while (ulElement.firstChild) {
    ulElement.removeChild(ulElement.firstChild);
  }
  hDiv.remove();
  renderHighScore();
}
function getScores() {
  var storedHighscores = JSON.parse(localStorage.getItem("highScores"));
  if (storedHighscores !== null) {
    for (var i = 0; i < 5; i++) {
      highScores.push({
        name: storedHighscores[i].name,
        highscore: storedHighscores[i].highscore
      }
      );

    }
  }
  renderHighScore()
}
function renderHighScore() {
  highScores.sort((a, b) => b.highscore - a.highscore);
  for (var i = 0; i < 5; i++) {
    var listItem = document.createElement("li");
    listItem.setAttribute("data-index", i)
    listItem.textContent = " Score: " + highScores[i].highscore + " Name: " + highScores[i].name;
    listItem.setAttribute('style', 'list-style-type: none');
    highScoreList.append(listItem);
  }
 
} 
  // clearInterval();
startBtn.addEventListener("click", startQuiz)
answerBtn1.addEventListener("click", checkAnswer)
answerBtn2.addEventListener("click", checkAnswer)
answerBtn3.addEventListener("click", checkAnswer)
answerBtn4.addEventListener("click", checkAnswer)
highscorePagebtn.addEventListener("click", saveScore)