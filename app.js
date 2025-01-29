//Define Quiz Data
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      correctAnswer: 2
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
      correctAnswer: 0
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      correctAnswer: 2
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2H", "OH2", "H2O2"],
      correctAnswer: 0
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Osmium", "Ozone", "Ocelot"],
      correctAnswer: 0
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
      correctAnswer: 2
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Mount Kilimanjaro", "Mount Fuji"],
      correctAnswer: 1
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 2
    }
  ];

const quiz =document.querySelector(`#quiz`);
const answerEle=document.querySelectorAll(".answer");
const option_1=document.querySelector("#option_1");
const option_2=document.querySelector("#option_2");
const option_3=document.querySelector("#option_3");
const option_4=document.querySelector("#option_4");
const questionEle=document.querySelector("#question");
const sumbitBtn=document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;


const loadQuiz = ()=>{
    const {question,options} = quizData[currentQuiz];
    questionEle.innerHTML=`${currentQuiz+1}: ${question}`;
    let index = 1;
    for (curOption of options) {
      window[`option_${index}`].innerText = curOption;
      index++;
    }
};
loadQuiz();
 
const getSelectedOption=()=>{
    let ans_index;
    answerEle.forEach((curOption,index)=>{
      if(curOption.checked){
        ans_index=index;
      }
    });
    return ans_index;
};

function uncheckPrevies(){
  answerEle.forEach((curElem)=>{
       curElem.checked=false;
  })
};

sumbitBtn.addEventListener("click",()=>{
     const selectedOptionIndex = getSelectedOption();
     console.log(selectedOptionIndex);
     if(selectedOptionIndex===quizData[currentQuiz].correctAnswer){
         score=score+1;
         console.log(`score:${score}`);
     }
     currentQuiz++;
     if(currentQuiz < quizData.length){
      uncheckPrevies();
      loadQuiz();
     }else {
      quiz.style.height = "auto";
      quiz.style.width = "30rem";
      quiz.innerHTML = `
      <div class="result">
          <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
          <p>Congratulations on completing the quiz! 🎉</p>
          <button class="reload-button" onclick="location.reload()">Play Again 🔁</button>
      </div>
      `;
  }
});






  