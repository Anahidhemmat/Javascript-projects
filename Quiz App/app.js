const quizData = [
  {
    question: "How old is Anahid?",
    a: "10",
    b: "17",
    c: "22",
    d: "24",
    correct: "b",
  },
  {
    question: "What is the most used programming language?",
    a: "Java",
    b: "C",
    c: "C++",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the president of US?",
    a: "Florin",
    b: "Trump",
    c: "Biden",
    d: "Somayeh",
    correct: "c",
  },
  {
    question: "What dose the HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Application Programming Interface",
    correct: "a",
  },
  {
    question: "What year was JavaScript lunched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "d",
  },
];

//selectors

const questionEl = document.querySelector("#question");
const aLabel = document.querySelector("#a-label");
const bLabel = document.querySelector("#b-label");
const cLabel = document.querySelector("#c-label");
const dLabel = document.querySelector("#d-label");
const submitBtn = document.querySelector("button");

let currentQuiz = 0;

loadQuiz();

//function for everytime we submit

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  aLabel.innerText = currentQuizData.a;
  bLabel.innerText = currentQuizData.b;
  cLabel.innerText = currentQuizData.c;
  dLabel.innerText = currentQuizData.d;
  currentQuiz++;
}
//get selected one

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");

  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

//submit button evet listener

submitBtn.addEventListener("click", () => {
  let answer = getSelected();

  if (answer) {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //show results
      alert("you are done");
    }
  }
});
