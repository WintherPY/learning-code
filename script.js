// ===== QUIZ DATA =====
const quizData = [
    {
        code: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>`,
        question: "What programming language is this code written in?",
        options: ["CSS", "HTML", "JavaScript"],
        correct: 1,
        explanation: "This is HTML (HyperText Markup Language). It structures web pages using tags like <html>, <body>, and <h1>."
    },
    {
        code: `console.log('Hello, World!');`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Java"],
        correct: 1,
        explanation: "This is JavaScript. console.log() outputs text to the browser console."
    },
    {
        code: `print('Hello, World!')`,
        question: "What programming language is this code written in?",
        options: ["C#", "Python", "JavaScript"],
        correct: 1,
        explanation: "This is Python. The print() function outputs text."
    },
    {
        code: `def greet(name):
    return "Hello, " + name`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "Python", "Java"],
        correct: 1,
        explanation: "This is Python. Uses 'def' keyword and indentation instead of braces."
    },
    {
        code: `function greet(name) {
    return "Hello, " + name;
}`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Java"],
        correct: 1,
        explanation: "This is JavaScript. Uses 'function' keyword and curly braces."
    },
    {
        code: `<div class="container">
    <p>This is a paragraph</p>
    <button>Click me</button>
</div>`,
        question: "What programming language is this code written in?",
        options: ["CSS", "Python", "HTML"],
        correct: 2,
        explanation: "This is HTML. Uses tags like <div>, <p>, and <button> for structure."
    },
    {
        code: `body {
    background-color: blue;
    color: white;
    padding: 20px;
}`,
        question: "What programming language is this code written in?",
        options: ["HTML", "CSS", "Python"],
        correct: 1,
        explanation: "This is CSS. Styles HTML elements with properties like background-color and color."
    },
    {
        code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`,
        question: "What does this code do?",
        options: ["Prints [1,2,3,4,5]", "Multiplies each number by 2, creates [2,4,6,8,10]", "Adds numbers together"],
        correct: 1,
        explanation: "Uses map() to create a new array where each element is multiplied by 2."
    },
    {
        code: `.header {
    color: white;
    background-color: #333;
    padding: 20px;
}`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "CSS", "HTML"],
        correct: 1,
        explanation: "This is CSS. The dot (.) is a class selector targeting elements with class='header'."
    },
    {
        code: `const age = 20;
if (age >= 18) {
    console.log("You are an adult");
}`,
        question: "What does this code do?",
        options: ["Declares a variable", "Checks if age >= 18, prints 'You are an adult'", "Creates a function"],
        correct: 1,
        explanation: "Checks if age is 18 or older. Since age is 20, it prints the message."
    },
    {
        code: `<input type="text" placeholder="Enter your name" />
<button>Submit</button>`,
        question: "What programming language is this code written in?",
        options: ["CSS", "JavaScript", "HTML"],
        correct: 2,
        explanation: "This is HTML. Creates a text input and button for user interaction."
    },
    {
        code: `const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => console.log(fruit));`,
        question: "What does this code do?",
        options: ["Stores fruits in array", "Loops through and prints each fruit", "Creates a function"],
        correct: 1,
        explanation: "Uses forEach() to loop through the array and print each fruit name."
    },
    {
        code: `function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));`,
        question: "What does this code do?",
        options: ["Prints false", "Checks if 4 is even and prints true", "Divides numbers"],
        correct: 1,
        explanation: "Uses modulo operator (%) to check if 4 is even. 4 % 2 === 0 is true."
    },
    {
        code: `const name = "Alice";
const age = 25;
const msg = name + " is " + age + " years old";
console.log(msg);`,
        question: "What does this code do?",
        options: ["Prints variable names", "Combines strings to print 'Alice is 25 years old'", "Creates array"],
        correct: 1,
        explanation: "Concatenates strings and variables to create a message."
    },
    {
        code: `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);`,
        question: "What does this code do?",
        options: ["Prints array length", "Adds all numbers together and prints 15", "Multiplies numbers"],
        correct: 1,
        explanation: "Uses reduce() to add all numbers: 1+2+3+4+5 = 15."
    },
    {
        code: `#header {
    text-align: center;
    font-size: 24px;
}`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "CSS", "HTML"],
        correct: 1,
        explanation: "This is CSS. The hash (#) is an ID selector targeting id='header'."
    }
];

// ===== QUIZ STATE =====
let currentQuestionIndex = 0;
let totalCorrect = 0;
let answered = false;
let selectedOptionIndex = null;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', initializeQuiz);

function initializeQuiz() {
    console.log('Quiz initializing...');
    loadQuestion();
}

// ===== LOAD QUESTION =====
function loadQuestion() {
    console.log('Loading question', currentQuestionIndex);
    
    if (currentQuestionIndex >= quizData.length) {
        showCompletion();
        return;
    }

    const question = quizData[currentQuestionIndex];
    
    if (!question || !question.code) {
        console.error('Invalid question data');
        return;
    }
    
    // Update code display
    const codeDisplay = document.getElementById('code-display');
    if (codeDisplay) {
        codeDisplay.textContent = question.code;
    } else {
        console.error('Code display element not found');
    }
    
    // Update question text
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = question.question;
    } else {
        console.error('Question text element not found');
    }
    
    // Create option buttons
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.setAttribute('data-index', index);
            button.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(button);
        });
    } else {
        console.error('Options container not found');
    }
    
    // Hide feedback
    const feedbackSection = document.getElementById('feedback-section');
    if (feedbackSection) {
        feedbackSection.style.display = 'none';
    }
    
    // Reset button states
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    if (submitBtn) {
        submitBtn.style.display = 'block';
        submitBtn.disabled = false;
    }
    if (nextBtn) {
        nextBtn.style.display = 'none';
        nextBtn.disabled = false;
    }
    
    answered = false;
    selectedOptionIndex = null;
}

// ===== SELECT OPTION =====
function selectOption(index) {
    if (answered) return;
    
    selectedOptionIndex = index;
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach(btn => btn.classList.remove('selected'));
    if (buttons[index]) {
        buttons[index].classList.add('selected');
    }
}

// ===== SUBMIT ANSWER =====
function submitAnswer() {
    if (selectedOptionIndex === null) {
        alert('Please select an answer');
        return;
    }
    
    if (answered) return;
    
    answered = true;
    const question = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const feedbackSection = document.getElementById('feedback-section');
    const feedbackText = document.getElementById('feedback-text');
    
    if (!feedbackSection || !feedbackText) {
        console.error('Feedback elements not found');
        return;
    }
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedOptionIndex === question.correct) {
        buttons[selectedOptionIndex].classList.add('correct');
        totalCorrect++;
        feedbackText.innerHTML = `<strong>✓ Correct!</strong><br><br>${question.explanation}`;
        feedbackSection.className = 'feedback correct';
    } else {
        buttons[selectedOptionIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        feedbackText.innerHTML = `<strong>✗ Incorrect</strong><br><br>The correct answer is: <strong>${question.options[question.correct]}</strong><br><br>${question.explanation}`;
        feedbackSection.className = 'feedback incorrect';
    }
    
    feedbackSection.style.display = 'block';
    
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'block';
}

// ===== NEXT QUESTION =====
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// ===== SHOW COMPLETION =====
function showCompletion() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) {
        console.error('Main content not found');
        return;
    }
    
    const percentage = Math.round((totalCorrect / quizData.length) * 100);
    
    let message = '';
    if (percentage === 100) message = 'Perfect score! You are a programming language expert! 🚀';
    else if (percentage >= 80) message = 'Excellent! You know your programming languages well! 👏';
    else if (percentage >= 60) message = 'Good job! Keep practicing! 📚';
    else message = 'Keep learning! Try again to improve! 💪';
    
    mainContent.innerHTML = `
        <div class="completion-screen">
            <h2>Quiz Complete! 🎉</h2>
            <div class="score-summary">
                <p>You got <strong>${totalCorrect} out of ${quizData.length}</strong> questions correct</p>
                <p>Score: <span class="score-percentage">${percentage}%</span></p>
            </div>
            <div class="performance-message">
                <p>${message}</p>
            </div>
            <button class="restart-btn" onclick="restartQuiz()">Restart Quiz</button>
        </div>
    `;
}

// ===== RESTART QUIZ =====
function restartQuiz() {
    currentQuestionIndex = 0;
    totalCorrect = 0;
    answered = false;
    selectedOptionIndex = null;
    
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <section class="code-section">
                <h2>Code Snippet:</h2>
                <pre id="code-wrapper"><code id="code-display">// Loading...</code></pre>
            </section>

            <section class="question-section">
                <h3 id="question-text">What programming language is this code written in?</h3>
                <div class="options-container" id="options-container"></div>
            </section>

            <div class="feedback" id="feedback-section" style="display: none;">
                <p id="feedback-text"></p>
            </div>

            <div class="action-buttons">
                <button class="submit-btn" id="submit-btn" onclick="submitAnswer()">Submit Answer</button>
                <button class="next-btn" id="next-btn" onclick="nextQuestion()" style="display: none;">Next Question →</button>
            </div>
        `;
    }
    
    loadQuestion();
}
