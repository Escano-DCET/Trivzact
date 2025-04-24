const quizData = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "Wo", correct: false },
            { text: "Wa", correct: false },
            { text: "H2O", correct: true },
            { text: "Ox", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Won", correct: false },
            { text: "Yen", correct: true },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false }
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Ribosome", correct: false },
            { text: "Endoplasmic Reticulum", correct: false }
        ]
    },
    {
        question: "What year did World War II end?",
        answers: [
            { text: "1943", correct: false },
            { text: "1945", correct: true },
            { text: "1950", correct: false },
            { text: "1939", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "What is the speed of light in a vacuum?",
        answers: [
            { text: "150,000 km/s", correct: false },
            { text: "300,000 km/s", correct: true },
            { text: "500,000 km/s", correct: false },
            { text: "200,000 km/s", correct: false }
        ]
    },
    {
        question: "What is the first element on the periodic table?",
        answers: [
            { text: "Helium", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Lithium", correct: false },
            { text: "Oxygen", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "George Bernard Shaw", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Go", correct: false },
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: [
            { text: "90", correct: false },
            { text: "100", correct: true },
            { text: "110", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Isaac Newton", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Perth", correct: false }
        ]
    },
    {
        question: "What is the value of Pi (π) to two decimal places?",
        answers: [
            { text: "3.10", correct: false },
            { text: "3.14", correct: true },
            { text: "3.16", correct: false },
            { text: "3.20", correct: false }
        ]
    },
    {
        question: "What type of animal is a kangaroo?",
        answers: [
            { text: "Reptile", correct: false },
            { text: "Marsupial", correct: true },
            { text: "Amphibian", correct: false },
            { text: "Bird", correct: false }
        ]
    }
];

const questionContainer = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.answers li');
const answersContainer = document.querySelector('.answers');
const feedback = document.querySelector('.answer-feedback');
const nextBtn = document.querySelector('.next-btn');
const scoreContainer = document.querySelector('.score-container');

let currentQuestionIndex = 0;
let score = 0;
let currentQuiz = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    if (currentQuestionIndex < currentQuiz.length) {
        const currentQuestionData = currentQuiz[currentQuestionIndex];
        questionContainer.textContent = currentQuestionData.question;

        const shuffledAnswers = [...currentQuestionData.answers];
        shuffleArray(shuffledAnswers);

        shuffledAnswers.forEach((answer, index) => {
            answerButtons[index].textContent = answer.text;
            answerButtons[index].dataset.correct = answer.correct;
            answerButtons[index].classList.remove('correct', 'incorrect');
            answerButtons[index].style.pointerEvents = 'auto';
        });
    } else {
        finishQuiz();
    }
}

function checkAnswer(selectedAnswer) {
    const isCorrect = selectedAnswer.dataset.correct === "true";
    if (isCorrect) {
        selectedAnswer.classList.add('correct');
        feedback.textContent = "Correct!";
        score++;
    } else {
        selectedAnswer.classList.add('incorrect');
        feedback.textContent = "Incorrect.";
        const correctAnswer = Array.from(answerButtons).find(button => button.dataset.correct === "true");
        if (correctAnswer) {
            correctAnswer.classList.add('correct');
        }
    }

    answerButtons.forEach(ans => ans.style.pointerEvents = 'none');
    feedback.style.display = 'block';
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    feedback.style.display = 'none';
    nextBtn.style.display = 'none';
    loadQuestion();
}

function startQuiz() {
    shuffleArray(quizData);
    currentQuiz = quizData.slice(0, Math.min(10, quizData.length));
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.textContent = "";
    loadQuestion();
}

function finishQuiz() {
    questionContainer.textContent = "Quiz Finished!";
    answerButtons.forEach(ans => ans.style.display = 'none');
    feedback.style.display = 'none';
    nextBtn.style.display = 'none';
    scoreContainer.textContent = `Your final score is: ${score} out of ${currentQuiz.length}`;
}

answerButtons.forEach(answer => {
    answer.addEventListener('click', function() {
        checkAnswer(this);
    });
});

nextBtn.addEventListener('click', nextQuestion);

startQuiz();