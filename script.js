const quizData = [
    {
      question: 'Capital of France?',
      options: ['Paris', 'Lyon', 'Marseille', 'Nice'],
      answer: 'Paris'
    },
    {
      question: 'Largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      answer: 'Jupiter'
    },
    // Add more challenging questions here
  ];
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const submitBtn = document.getElementById('submit');
  const resultEl = document.getElementById('result');
  const timeRemainingEl = document.getElementById('time-remaining');
  const resetBtn = document.getElementById('reset');
  
  let currentQuestion = 0;
  let timeLeft = 30;
  let userScore = 0;
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function loadQuestion() {
    if (currentQuestion < quizData.length) {
      const currentQuizData = quizData[currentQuestion];
      questionEl.innerText = currentQuizData.question;
      optionsEl.innerHTML = '';
  
      const shuffledOptions = shuffleArray([...currentQuizData.options]);
  
      shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', selectOption);
        optionsEl.appendChild(button);
      });
    } else {
      endQuiz();
    }
  }
  
  function selectOption(e) {
    const selectedOption = e.target.innerText;
    const correctAnswer = quizData[currentQuestion].answer;
  
    if (selectedOption === correctAnswer) {
      resultEl.innerText = 'Correct!';
      resultEl.style.color = '#4CAF50'; // Green color for correct answers
      userScore += 1;
    } else {
      resultEl.innerText = `Incorrect! The correct answer is ${correctAnswer}.`;
      resultEl.style.color = '#f44336'; // Red color for incorrect answers
    }
  
    currentQuestion++;
    loadQuestion();
  }
  
  function startQuiz() {
    currentQuestion = 0;
    userScore = 0;
    resultEl.innerText = '';
    submitBtn.disabled = false;
    loadQuestion();
  
    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        timeRemainingEl.innerText = `Time remaining: ${timeLeft} seconds`;
      } else {
        clearInterval(intervalId);
        endQuiz();
      }
      timeLeft--;
    }, 1000);
  }
  
  function endQuiz() {
    resultEl.innerText = `Quiz completed! You scored ${userScore} out of ${quizData.length} questions.`;
    resultEl.style.color = '#1976d2'; // Dark blue color for result text
    submitBtn.disabled = true;
  }
  
  function resetQuiz() {
    timeLeft = 30;
    startQuiz();
  }
  
  submitBtn.addEventListener('click', selectOption);
  resetBtn.addEventListener('click', resetQuiz);
  startQuiz();
  