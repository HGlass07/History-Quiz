/*possible question selection, 15 in total, with 10 being randomly chosen for a given round*/
let questions = [
    {
        question: "Which emperor built the wall that stretches across northern Britain?",
        answers: [
            { text: "Hadrian", correct: true},
            { text: "Constantine", correct: false},
            { text: "Romulus", correct: false},
            { text: "Augustus", correct: false},
        ]
    },
    {
        question: "Who did the Romans fight in the Punic Wars?",
        answers: [
            { text: "Greece", correct: false},
            { text: "Egypt", correct: false},
            { text: "Carthage", correct: true},
            { text: "Persia", correct: false},
        ]
    },
    {
        question: "What is another name for the Colosseum?",
        answers: [
            { text: "The Roman Arena", correct: false},
            { text: "The Circus Maximus", correct: false},
            { text: "The Flavian Amphetheater", correct: true},
            { text: "The Gladiators Arena", correct: false},
        ]
    },
    {
        question: "According to one legend, Aeneas founded Rome, where was he from?",
        answers: [
            { text: "Syracuse", correct: false},
            { text: "Alexandria", correct: false},
            { text: "Athens", correct: false},
            { text: "Troy", correct: true},
        ]
    },
    {
        question: "In the Roman Republic, how many Consuls were there?",
        answers: [
            { text: "Two", correct: true},
            { text: "Three", correct: false},
            { text: "One", correct: false},
            { text: "Four", correct: false},
        ]
    },
    {
        question: "What was the Roman name for the greek goddess Artemis?",
        answers: [
            { text: "Minerva", correct: false},
            { text: "Diana", correct: true},
            { text: "Demeter", correct: false},
            { text: "Juno", correct: false},
        ]
    },
    {
        question: "What equipment did a retiarius gladiator use?",
        answers: [
            { text: "Sword and Shield", correct: false},
            { text: "Net and Trident", correct: true},
            { text: "Two Swords", correct: false},
            { text: "Spear and Shield", correct: false},
        ]
    },
    {
        question: "What was the dome of the Pantheon building made from?",
        answers: [
            { text: "Concrete", correct: true},
            { text: "Marble", correct: false},
            { text: "Limestone", correct: false},
            { text: "Brick", correct: false},
        ]
    },
    {
        question: "When the Roman empire split, what became the capital of the eastern half?",
        answers: [
            { text: "Thessalonica", correct: false},
            { text: "Damascus", correct: false},
            { text: "Constantinople", correct: true},
            { text: "Nicea", correct: false},
        ]
    },
    {
        question: "Who sacked Rome in the year 410AD?",
        answers: [
            { text: "The Huns", correct: false},
            { text: "The Goths", correct: true},
            { text: "The Franks", correct: false},
            { text: "The Lombards", correct: false},
        ]
    },
    {
        question: "Which leader did Julius Ceasar defeat at the siege of Alesia?",
        answers: [
            { text: "Brennus", correct: false},
            { text: "Vortigern", correct: false},
            { text: "Alaric", correct: false},
            { text: "Vercingetorix", correct: true},
        ]
    },
    {
        question: "Augustus Ceasar and Marc Anothony were members of the second triumvirate, who was the third?",
        answers: [
            { text: "Pompey Magnus", correct: false},
            { text: "Julius Caesar", correct: false},
            { text: "Marcus Lepidus", correct: true},
            { text: "Marcus Crassus", correct: false},
        ]
    },
    {
        question: "Queen Boudica rebelled against the Romans, which tribe was she from?",
        answers: [
            { text: "Catuvellauni", correct: false},
            { text: "Brigantes", correct: false},
            { text: "Atrebates", correct: false},
            { text: "Iceni", correct: true},
        ]
    },
    {
        question: "Under which emperor did Rome reach it's greatest extent?",
        answers: [
            { text: "Trajan", correct: true},
            { text: "Aurelian", correct: false},
            { text: "Diocletian", correct: false},
            { text: "Marcus Aurelius", correct: false},
        ]
    },
    {
        question: "Which gods made up the 'Capitoline Triad'?",
        answers: [
            { text: "Jupiter, Mars, Neptune", correct: false},
            { text: "Jupiter, Juno, Minerva", correct: true},
            { text: "Mars, Venus, Pluto", correct: false},
            { text: "Mercury, Vulcan, Ceres", correct: false},
        ]
    }                           
];

let answerButtons = document.getElementById("answer-buttons");
let playAgain = document.getElementById("play-again");
let questionArea = document.getElementById("question");


/**DOM load event listener */
document.addEventListener('DOMContentLoaded', function () {
    answerButtons.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            nextQuestion();
        }
    });
    playAgain.addEventListener("click", ()=>{
        startQuiz();
    });

    startQuiz();
});

/*Fisher-Yates sorting algorithm, to select questions to be displayed at random, 
subsequent questions are selected from those that have not already been displayed*/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/*function to start quiz, or restart once finished, includes question randomisation function call*/
function startQuiz(){
    score = 0;
    currentQuestionIndex = 0;
    shuffleArray(questions);
    displayQuestion();
    playAgain.style.display = "none";
}

/*question display function*/
function displayQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionArea.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

/*select answer function*/
function selectAnswer(event){
    let selectedAnswer = event.target;
    let isCorrect = selectedAnswer.dataset.correct === "true";
    if(isCorrect){
        selectedAnswer.classList.add("correct");
        score++;
    }else{
        selectedAnswer.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}

/**hides placeholder answer options**/
function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**function to proceed to next question until end of question list, when score is shown */
function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < 10){
        displayQuestion();
    }else{
        displayScore();
    }
}

/**show score function, message depending on points scored */
function displayScore(){
    resetState();
        if(score > 5 && score < 10) {
            questionArea.innerHTML = `Well done! you scored ${score} out of 10`;
        } else if(score === 10) {
            questionArea.innerHTML = `Well done! you scored ${score} out of 10, you're a Rome expert!`;
        } else {
            questionArea.innerHTML = `You scored ${score} out of 10, better luck next time!`
        }
    playAgain.innerHTML = "Play Again";
    playAgain.style.display = "block";
    if (playAgain === true) {
        startQuiz();
    }
}
