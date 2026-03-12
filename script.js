// ===== QUIZ DATA - Beginner to Intermediate Programming =====

const quizData = [
    // BEGINNER LEVEL
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
        explanation: "This is HTML (HyperText Markup Language). It's used to structure web pages with tags like <html>, <body>, and <h1>."
    },
    {
        code: `body {
    background-color: blue;
    font-size: 16px;
    margin: 0;
}`,
        question: "What programming language is this code written in?",
        options: ["HTML", "CSS", "Python"],
        correct: 1,
        explanation: "This is CSS (Cascading Style Sheets). It's used to style HTML elements with properties like background-color and font-size."
    },
    {
        code: `function greet(name) {
    return "Hello, " + name;
}`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Java"],
        correct: 1,
        explanation: "This is JavaScript. It uses the 'function' keyword to define reusable blocks of code."
    },
    {
        code: `def greet(name):
    return "Hello, " + name`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "Python", "Java"],
        correct: 1,
        explanation: "This is Python. It uses the 'def' keyword for functions and indentation for code blocks."
    },
    {
        code: `<div class="container">
    <p>This is a paragraph</p>
    <button>Click me</button>
</div>`,
        question: "What programming language is this code written in?",
        options: ["CSS", "Python", "HTML"],
        correct: 2,
        explanation: "This is HTML. It uses tags like <div>, <p>, and <button> to create page structure."
    },
    {
        code: `.header {
    color: white;
    background-color: #333;
    padding: 20px;
    border-radius: 5px;
}`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "CSS", "HTML"],
        correct: 1,
        explanation: "This is CSS. The dot (.) indicates a class selector that styles elements with color, background-color, padding, and border-radius properties."
    },
    {
        code: `const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Ruby"],
        correct: 1,
        explanation: "This is JavaScript. It uses 'const' for variables, array literals, and the forEach method with arrow function syntax."
    },
    {
        code: `numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "Python", "Java"],
        correct: 1,
        explanation: "This is Python. It uses list syntax, for-in loop, and print() function with indentation."
    },
    {
        code: `<input type="text" placeholder="Enter your name" />
<select>
    <option>Option 1</option>
    <option>Option 2</option>
</select>`,
        question: "What programming language is this code written in?",
        options: ["CSS", "JavaScript", "HTML"],
        correct: 2,
        explanation: "This is HTML. It defines form elements like <input> and <select> tags for user interaction."
    },
    {
        code: `button:hover {
    background-color: green;
    transform: scale(1.1);
    cursor: pointer;
}`,
        question: "What programming language is this code written in?",
        options: ["HTML", "CSS", "Python"],
        correct: 1,
        explanation: "This is CSS. The ':hover' pseudo-class applies styles when a user hovers over a button element."
    },
    // INTERMEDIATE LEVEL
    {
        code: `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Java"],
        correct: 1,
        explanation: "This is JavaScript. It shows a recursive function that calculates Fibonacci numbers."
    },
    {
        code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "Python", "C++"],
        correct: 1,
        explanation: "This is Python. It uses 'def' for functions, colons, and indentation instead of braces."
    },
    {
        code: `class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a sound");
    }
}`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Java"],
        correct: 1,
        explanation: "This is JavaScript (ES6 class syntax). It defines a class with a constructor and methods."
    },
    {
        code: `class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        print(self.name + " makes a sound")`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "Python", "C#"],
        correct: 1,
        explanation: "This is Python. It defines a class with __init__ constructor and methods using 'self' parameter and indentation."
    },
    {
        code: `const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
}`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Java"],
        correct: 1,
        explanation: "This is JavaScript. It shows async/await syntax for handling asynchronous operations like API calls."
    }
];

// ===== QUIZ STATE =====
let currentQuestionIndex = 0;
let totalCorrect = 0;
let answered = false;
let selectedOptionIndex = null;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
});

// ===== LOAD QUESTION =====
function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showCompletion();
        return;
    }

    const question = quizData[currentQuestionIndex];
    
    // Update code display
    document.getElementById('code-display').textContent = question.code;
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    
    // Clear previous options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
    
    // Hide feedback and reset buttons
    document.getElementById('feedback-section').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
    
    answered = false;
    selectedOptionIndex = null;
}

// ===== SELECT OPTION =====
function selectOption(index) {
    if (answered) return;
    
    selectedOptionIndex = index;
    const buttons = document.querySelectorAll('.option-btn');
    
    // Remove previous selection
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // Mark selected button
    buttons[index].classList.add('selected');
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
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedOptionIndex === question.correct) {
        // Correct answer
        buttons[selectedOptionIndex].classList.add('correct');
        totalCorrect++;
        
        feedbackText.innerHTML = `<strong>✓ Correct!</strong><br>${question.explanation}`;
        feedbackSection.className = 'feedback correct';
        
        // Show next button
        document.getElementById('submit-btn').style.display = 'none';
        document.getElementById('next-btn').style.display = 'block';
    } else {
        // Incorrect answer
        buttons[selectedOptionIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        
        feedbackText.innerHTML = `<strong>✗ Incorrect</strong><br>The correct answer is: <strong>${question.options[question.correct]}</strong><br><br>${question.explanation}`;
        feedbackSection.className = 'feedback incorrect';
        
        // Show next button anyway to continue
        document.getElementById('submit-btn').style.display = 'none';
        document.getElementById('next-btn').style.display = 'block';
    }
    
    feedbackSection.style.display = 'block';
}

// ===== NEXT QUESTION =====
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// ===== SHOW COMPLETION =====
function showCompletion() {
    const mainContent = document.querySelector('main');
    const percentage = Math.round((totalCorrect / quizData.length) * 100);
    
    mainContent.innerHTML = `
        <div class="completion-screen">
            <h2>Quiz Complete! 🎉</h2>
            <div class="score-summary">
                <p>You got <strong>${totalCorrect} out of ${quizData.length}</strong> questions correct</p>
                <p>Score: <span class="score-percentage">${percentage}%</span></p>
            </div>
            <div class="performance-message">
                ${percentage === 100 ? '<p>Perfect score! You are a programming language expert! 🚀</p>' : 
                  percentage >= 80 ? '<p>Excellent work! You know your programming languages well! 👏</p>' :
                  percentage >= 60 ? '<p>Good job! Keep practicing to improve! 📚</p>' :
                  '<p>Keep learning! Try again to improve your score! 💪</p>'}
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
    
    // Restore main content
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = `
        <section class="code-section">
            <h2>Code Snippet:</h2>
            <pre><code id="code-display">// Loading...</code></pre>
        </section>

        <section class="question-section">
            <h3 id="question-text">What programming language is this code written in?</h3>
            
            <div class="options-container" id="options-container">
                <!-- Options will be generated here -->
            </div>
        </section>

        <div class="feedback" id="feedback-section" style="display: none;">
            <p id="feedback-text"></p>
        </div>

        <div class="action-buttons">
            <button class="submit-btn" id="submit-btn" onclick="submitAnswer()">Submit Answer</button>
            <button class="next-btn" id="next-btn" onclick="nextQuestion()" style="display: none;">Next Question →</button>
        </div>
    `;
    
    loadQuestion();
}
