// ===== QUIZ DATA - Beginner to Intermediate Programming =====

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

// ===== UTILITY FUNCTIONS - Safe DOM Access =====
function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with id '${id}' not found`);
        return null;
    }
    return element;
}

function getAllElements(selector) {
    return document.querySelectorAll(selector);
}

function getMainContent() {
    return document.querySelector('main');
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
});

// ===== LOAD QUESTION =====
function loadQuestion() {
    // Check if quiz is complete
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
    
    // Clear and populate options
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
    
    // Reset feedback
    const feedbackSection = getElement('feedback-section');
    if (feedbackSection) {
        feedbackSection.style.display = 'none';
    }
    
    // Reset button states
    const submitBtn = getElement('submit-btn');
    const nextBtn = getElement('next-btn');
    if (submitBtn) submitBtn.style.display = 'block';
    if (nextBtn) nextBtn.style.display = 'none';
    
    // Reset state
    answered = false;
    selectedOptionIndex = null;
}

// ===== SELECT OPTION =====
function selectOption(index) {
    if (answered) return;
    
    selectedOptionIndex = index;
    const buttons = getAllElements('.option-btn');
    
    // Remove previous selection
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // Mark selected button
    if (buttons[index]) {
        buttons[index].classList.add('selected');
    }
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
    
    // Get feedback elements
    const feedbackSection = getElement('feedback-section');
    const feedbackText = getElement('feedback-text');
    
    // Safety check
    if (!feedbackSection || !feedbackText) return;
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check answer
    const isCorrect = selectedOptionIndex === question.correct;
    
    if (isCorrect) {
        // Correct answer
        if (buttons[selectedOptionIndex]) {
            buttons[selectedOptionIndex].classList.add('correct');
        }
        totalCorrect++;
        
        feedbackText.innerHTML = `<strong>✓ Correct!</strong><br>${question.explanation}`;
        feedbackSection.className = 'feedback correct';
    } else {
        // Incorrect answer
        if (buttons[selectedOptionIndex]) {
            buttons[selectedOptionIndex].classList.add('incorrect');
        }
        if (buttons[question.correct]) {
            buttons[question.correct].classList.add('correct');
        }
        
        feedbackText.innerHTML = `<strong>✗ Incorrect</strong><br>The correct answer is: <strong>${question.options[question.correct]}</strong><br><br>${question.explanation}`;
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
    if (!mainContent) return;
    
    const percentage = Math.round((totalCorrect / quizData.length) * 100);
    
    let message = '';
    if (percentage === 100) {
        message = '<p>Perfect score! You are a programming language expert! 🚀</p>';
    } else if (percentage >= 80) {
        message = '<p>Excellent work! You know your programming languages well! 👏</p>';
    } else if (percentage >= 60) {
        message = '<p>Good job! Keep practicing to improve! 📚</p>';
    } else {
        message = '<p>Keep learning! Try again to improve your score! 💪</p>';
    }
    
    mainContent.innerHTML = `
        <div class="completion-screen">
            <h2>Quiz Complete! 🎉</h2>
            <div class="score-summary">
                <p>You got <strong>${totalCorrect} out of ${quizData.length}</strong> questions correct</p>
                <p>Score: <span`*

