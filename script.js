// ===== QUIZ DATA - 16 Questions =====
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
        explanation: "This is JavaScript. console.log() outputs text to the console browser."
    },
    {
        code: `print('Hello, World!')`,
        question: "What programming language is this code written in?",
        options: ["C#", "Python", "JavaScript"],
        correct: 1,
        explanation: "This is Python. The print() function outputs text and uses no semicolon."
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
        explanation: "This is JavaScript. Uses 'function' keyword and curly braces for code blocks."
    },
    {
        code: `<div class="container">
    <p>This is a paragraph</p>
    <button>Click me</button>
</div>`,
        question: "What programming language is this code written in?",
        options: ["CSS", "Python", "HTML"],
        correct: 2,
        explanation: "This is HTML. Uses tags like <div>, <p>, and <button> to create page structure."
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
        explanation: "This is CSS. Used to style HTML elements with properties like background-color, color, and padding."
    },
    {
        code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`,
        question: "What does this code do?",
        options: ["Prints the array", "Multiplies each number by 2 creating [2,4,6,8,10]", "Adds all numbers"],
        correct: 1,
        explanation: "This uses the map() function to create a new array where each number is multiplied by 2."
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
        explanation: "This is CSS. The dot (.) is a class selector. It styles all elements with the 'header' class."
    },
    {
        code: `const age = 20;
if (age >= 18) {
    console.log("You are an adult");
}`,
        question: "What does this code do?",
        options: ["Prints 'You are an adult'", "Checks if age is 18 or older, prints message if true", "Stores age in a variable"],
        correct: 1,
        explanation: "This checks if the age variable is 18 or greater. Since age is 20, it prints 'You are an adult'."
    },
    {
        code: `<input type="text" placeholder="Enter your name" />
<button>Submit</button>`,
        question: "What programming language is this code written in?",
        options: ["CSS", "JavaScript", "HTML"],
        correct: 2,
        explanation: "This is HTML. Creates a text input field and a submit button for user interaction."
    },
    {
        code: `const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => console.log(fruit));`,
        question: "What does this code do?",
        options: ["Prints entire array", "Loops through each fruit and prints it", "Creates new array"],
        correct: 1,
        explanation: "Uses forEach() to loop through the array and print each fruit: apple, banana, orange."
    },
    {
        code: `function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));`,
        question: "What does this code do?",
        options: ["Prints false", "Checks if 4 is even and prints true", "Divides 4 by 2"],
        correct: 1,
        explanation: "The modulo operator (%) checks if a number is even. 4 % 2 === 0 is true, so it prints true."
    },
    {
        code: `const name = "Alice";
const age = 25;
const message = name + " is " + age + " years old";
console.log(message);`,
        question: "What does this code do?",
        options: ["Prints variable names", "Combines strings and variables to print 'Alice is 25 years old'", "Creates an array"],
        correct: 1,
        explanation: "Concatenates (combines) strings and variables to create: 'Alice is 25 years old'."
    },
    {
        code: `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
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
        explanation: "This is CSS. The hash (#) is an ID selector that targets an element with id='header'."
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
    loadQuestion();
    setupEventListeners();
}

function setupEventListeners() {
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && answered) nextQuestion();
    });
}

// ===== SAFE DOM ACCESS =====
function getElement(id) {
    return document.getElementById(id) || null;
}

function getAllElements(selector) {
    return document.querySelectorAll(selector) || [];
}

function getMainContent() {
    return document.querySelector('main');
}

// ===== LOAD QUESTION =====
function loadQuestion() {
    // Check if quiz complete
    if (currentQuestionIndex >= quizData.length) {
        showCompletion();
        return;
    }

    const question = quizData[currentQuestionIndex];
    
    // Update code display
    const codeDisplay = getElement('code-display');
    if (codeDisplay) {
        codeDisplay.textContent = question.code;
    }
    
    // Update question text
    const questionText = getElement('question-text');
    if (questionText) {
        questionText.textContent = question.question;
    }
    
    // Create option buttons
    const optionsContainer = getElement('options-container');
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
    }
    
    // Reset feedback display
    const feedbackSection = getElement('feedback-section');
    if (feedbackSection) {
        feedbackSection.style.display = 'none';
    }
    
    // Reset button states
    const submitBtn = getElement('submit-btn');
    const nextBtn = getElement('next-btn');
    
    if (submitBtn) {
        submitBtn.style.display = 'block';
        submitBtn.disabled = false;
    }
    if (nextBtn) {
        nextBtn.style.display = 'none';
        nextBtn.disabled = false;
    }
    
    // Reset quiz state
    answered = false;
    selectedOptionIndex = null;
}

// ===== SELECT OPTION =====
function selectOption(index) {
    if (answered) return;
    
    selectedOptionIndex = index;
    const buttons = getAllElements('.option-btn');
    
    buttons.forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
}

// ===== SUBMIT ANSWER =====
function submitAnswer() {
    // Validate selection
    if (selectedOptionIndex === null) {
        alert('Please select an answer first');
        return;
    }
    
    // Prevent double submission
    if (answered) return;
    
    answered = true;
    
    // Get current question
    const question = quizData[currentQuestionIndex];
    const buttons = getAllElements('.option-btn');
    const feedbackSection = getElement('feedback-section');
    const feedbackText = getElement('feedback-text');
    
    // Validate feedback elements exist
    if (!feedbackSection || !feedbackText) {
        console.error('Feedback elements not found');
        return;
    }
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check if answer is correct
    const isCorrect = selectedOptionIndex === question.correct;
    
    if (isCorrect) {
        // Correct answer
        buttons[selectedOptionIndex].classList.add('correct');
        totalCorrect++;
        
        feedbackText.innerHTML = `<strong>✓ Correct!</strong><br><br>${question.explanation}`;
        feedbackSection.className = 'feedback correct';
    } else {
        // Incorrect answer
        buttons[selectedOptionIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        
        feedbackText.innerHTML = `<strong>✗ Incorrect</strong><br><br>The correct answer is: <strong>${question.options[question.correct]}</strong><br><br>${question.explanation}`;
        feedbackSection.className = 'feedback incorrect';
    }
    
    // Show feedback
    feedbackSection.style.display = 'block';
    
    // Update button visibility
    const submitBtn = getElement('submit-btn');
    const nextBtn = getElement('next-btn');
    
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
    const mainContent = getMainContent();
    if (!mainContent) {
        console.error('Main content not found');
        return;
    }
    
    const percentage = Math.round((totalCorrect / quizData.length) * 100);
    
    let performanceMessage = '';
    let emoji = '';
    
    if (percentage === 100) {
        performanceMessage = 'Perfect score! You are a programming language expert!';
        emoji = '🚀';
    } else if (percentage >= 80) {
        performanceMessage = 'Excellent work! You know your programming languages well!';
        emoji = '👏';
    } else if (percentage >= 60) {
        performanceMessage = 'Good job! Keep practicing to improve!';
        emoji = '📚';
    } else {
        performanceMessage = 'Keep learning! Try again to improve your score!';
        emoji = '💪';
    }
    
    mainContent.innerHTML = `
        <div class="completion-screen">
            <h2>Quiz Complete! 🎉</h2>
            <div class="score-summary">
                <p>You got <strong>${totalCorrect} out of ${quizData.length}</strong> questions correct</p>
                <p>Score: <span class="score-percentage">${percentage}%</span></p>
            </div>
            <div class="performance-message">
                <p>${performanceMessage} ${emoji}</p>
            </div>
            <button class="restart-btn" onclick="restartQuiz()">Restart Quiz</button>
        </div>
    `;
}

// ===== RESTART QUIZ =====
function restartQuiz() {
    // Reset state
    currentQuestionIndex = 0;
    totalCorrect = 0;
    answered = false;
    selectedOptionIndex = null;
    
    // Restore main content
    const mainContent = getMainContent();
    if (mainContent) {
        mainContent.innerHTML = `
            <section class="code-section">
                <h2>Code Snippet:</h2>
                <pre><code id="code-display">// Loading...</code></pre>
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
    
    // Load first question
    loadQuestion();
}
