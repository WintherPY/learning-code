// ===== BEGINNER-FRIENDLY QUIZ DATA WITH ACTUAL ERRORS =====
const quizData = [
    {
        type: "identify",
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
        explanation: "This is HTML (HyperText Markup Language).",
        facts: "HTML is used by every website on the internet. Companies like Facebook, Google, and Amazon use HTML to structure their web pages.",
        codeBehavior: "This code creates a basic web page with a title and a heading.",
        codeEditor: true,
        language: "html"
    },
    {
        type: "behavior",
        code: `const message = "Hello";
console.log(message);`,
        question: "What does this code do?",
        options: ["Creates a variable", "Prints 'Hello' to the console", "Creates a function"],
        correct: 1,
        explanation: "This code creates a variable and prints its value.",
        facts: "JavaScript is used by 98% of all websites for interactivity.",
        codeBehavior: "This code declares a variable 'message' with the value 'Hello', then outputs it to the browser console.",
        codeEditor: true,
        language: "javascript"
    },
    {
        type: "error",
        code: `function greet(name) {
    return "Hello, " + name
}
console.log(greet("Alice"))`,
        question: "Find the error in this code - Type what is missing",
        errorAnswer: "semicolon",
        explanation: "Line 2 is missing a semicolon at the end of the return statement.",
        facts: "Python doesn't require semicolons, but JavaScript does. This is one of the most common beginner mistakes!",
        codeBehavior: "This function would still work in many JavaScript environments, but proper syntax requires the semicolon.",
        codeEditor: true,
        language: "javascript"
    },
    {
        type: "identify",
        code: `def add(a, b):
    return a + b`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "Python", "Java"],
        correct: 1,
        explanation: "This is Python, a simple and readable language.",
        facts: "Python powers machine learning at Google, Instagram, Netflix, and Spotify.",
        codeBehavior: "This function takes two numbers and returns their sum.",
        codeEditor: false,
        language: "python"
    },
    {
        type: "behavior",
        code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`,
        question: "What does this code output?",
        options: ["[1,2,3,4,5]", "[2,4,6,8,10]", "Error"],
        correct: 1,
        explanation: "The map() function creates a new array with each element doubled.",
        facts: "Array methods like map() are powerful in JavaScript.",
        codeBehavior: "This code creates a new array where each number is multiplied by 2: [2, 4, 6, 8, 10].",
        codeEditor: true,
        language: "javascript"
    },
    {
        type: "error",
        code: `const x = 10
const y = 20
console.log(x + y)`,
        question: "Find the error - Type what is missing",
        errorAnswer: "semicolon",
        explanation: "All three lines are missing semicolons at the end.",
        facts: "Modern JavaScript tools can auto-format your code to add semicolons automatically.",
        codeBehavior: "This code will still run because JavaScript has automatic semicolon insertion.",
        codeEditor: true,
        language: "javascript"
    },
    {
        type: "identify",
        code: `body {
    background-color: #3498db;
    color: white;
    font-size: 16px;
}`,
        question: "What programming language is this code written in?",
        options: ["HTML", "CSS", "JavaScript"],
        correct: 1,
        explanation: "This is CSS (Cascading Style Sheets), used for styling.",
        facts: "CSS is used by every website to make things look beautiful.",
        codeBehavior: "This code sets the background color to blue, text color to white, and font size to 16 pixels.",
        codeEditor: false,
        language: "css"
    },
    {
        type: "behavior",
        code: `if (10 > 5) {
    console.log("10 is greater than 5");
} else {
    console.log("5 is greater than 10");
}`,
        question: "What does this code output?",
        options: ["5 is greater than 10", "10 is greater than 5", "Error"],
        correct: 1,
        explanation: "The if statement checks the condition (10 > 5), which is true.",
        facts: "Conditional logic is used everywhere in programming.",
        codeBehavior: "Since 10 is greater than 5, the code prints '10 is greater than 5'.",
        codeEditor: true,
        language: "javascript"
    },
    {
        type: "error",
        code: `function sayHello {
    return "Hello";
}`,
        question: "Find the error - Type what is missing",
        errorAnswer: "parentheses",
        explanation: "JavaScript function syntax requires parentheses after the function name: function sayHello().",
        facts: "Function syntax is strict in most programming languages to help avoid bugs.",
        codeBehavior: "This code will throw a syntax error because parentheses are required.",
        codeEditor: true,
        language: "javascript"
    },
    {
        type: "identify",
        code: `<div class="container">
    <h1>Welcome</h1>
    <p>This is a paragraph</p>
    <button>Click Me</button>
</div>`,
        question: "What programming language is this code written in?",
        options: ["CSS", "JavaScript", "HTML"],
        correct: 2,
        explanation: "This is HTML, which structures web page content.",
        facts: "HTML works together with CSS and JavaScript.",
        codeBehavior: "This creates a container with a heading, paragraph, and clickable button.",
        codeEditor: true,
        language: "html"
    }
];

// ===== QUIZ STATE =====
let leaderboard = [];
let currentPlayerName = '';
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let totalScore = 0;
let answered = false;
let selectedOptionIndex = null;
let quizInProgress = false;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadLeaderboard();
    showNameEntryScreen();
});

// ===== LEADERBOARD FUNCTIONS =====
function loadLeaderboard() {
    const stored = localStorage.getItem('codemaster-leaderboard');
    leaderboard = stored ? JSON.parse(stored) : [];
}

function saveLeaderboard() {
    localStorage.setItem('codemaster-leaderboard', JSON.stringify(leaderboard));
}

function addToLeaderboard(name, score) {
    leaderboard.push({
        name: name,
        score: score,
        date: new Date().toLocaleDateString()
    });
    saveLeaderboard();
}

function getTop5Leaderboard() {
    return leaderboard
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
}

function renderLeaderboard() {
    const top5 = getTop5Leaderboard();
    if (top5.length === 0) {
        return '<div class="empty-leaderboard">No scores yet. Be the first to take the course!</div>';
    }
    
    return top5.map((entry, index) => `
        <div class="leaderboard-item">
            <span class="leaderboard-rank">#${index + 1}</span>
            <span class="leaderboard-name">${escapeHtml(entry.name)}</span>
            <span class="leaderboard-score">${entry.score} pts</span>
        </div>
    `).join('');
}

// ===== SHOW NAME ENTRY SCREEN =====
function showNameEntryScreen() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="name-entry-screen">
            <h2>Welcome to Learning Code</h2>
            <p class="tagline">Interactive Programming Quiz</p>
            
            <div class="input-group">
                <label for="player-name">Enter Your Name</label>
                <input 
                    type="text" 
                    id="player-name" 
                    placeholder="Your name..." 
                    maxlength="30"
                    autocomplete="off"
                />
            </div>
            
            <button class="btn-start" onclick="startQuizWithName()">Start Quiz</button>
            
            <div class="leaderboard-section">
                <h3>🏆 Top Players</h3>
                <div class="leaderboard-list">
                    ${renderLeaderboard()}
                </div>
            </div>
        </div>
    `;
    
    const nameInput = document.getElementById('player-name');
    if (nameInput) {
        nameInput.focus();
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') startQuizWithName();
        });
    }
}

// ===== START QUIZ WITH NAME =====
function startQuizWithName() {
    const nameInput = document.getElementById('player-name');
    const name = nameInput.value.trim();
    
    if (!name || name.length < 2) {
        alert('Please enter a valid name (at least 2 characters)');
        return;
    }
    
    currentPlayerName = name;
    shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    totalScore = 0;
    quizInProgress = true;
    answered = false;
    
    updateUserInfo();
    loadQuestion();
}

// ===== UPDATE USER INFO =====
function updateUserInfo() {
    const avatar = document.getElementById('user-avatar');
    const username = document.getElementById('current-username');
    
    if (avatar) avatar.textContent = currentPlayerName.charAt(0).toUpperCase();
    if (username) username.textContent = currentPlayerName;
}

// ===== LOAD QUESTION =====
function loadQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showCompletion();
        return;
    }
    
    const question = shuffledQuestions[currentQuestionIndex];
    const contentArea = document.getElementById('content-area');
    const lessonNumber = currentQuestionIndex + 1;
    
    document.getElementById('lesson-title').textContent = `Question ${lessonNumber}`;
    updateProgress();
    
    let questionContent = '';
    
    if (question.type === 'error') {
        questionContent = `
            <div class="lesson-container">
                <div class="lesson-panel">
                    <h3><span class="icon">🔍</span> Find the Error</h3>
                    <div class="code-display">
                        <pre>${escapeHtml(question.code)}</pre>
                    </div>
                    <p class="question-title">${escapeHtml(question.question)}</p>
                    <div class="options-list">
                        <input 
                            type="text" 
                            id="error-input" 
                            placeholder="Type what is missing or wrong..."
                            class="error-input-field"
                        />
                    </div>
                    <div id="feedback-error" style="display: none;"></div>
                    <div class="action-buttons">
                        <button class="btn-submit" onclick="submitErrorAnswer()">Submit Answer</button>
                        <button class="btn-next" id="next-btn-error">Next Question</button>
                    </div>
                </div>
                <div class="editor-panel">
                    <h3><span class="icon">💻</span> Code Playground</h3>
                    <div class="editor-status">
                        <span class="status-dot"></span>
                        <span>Complete lesson to unlock</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        questionContent = `
            <div class="lesson-container">
                <div class="lesson-panel">
                    <h3><span class="icon">❓</span> Question</h3>
                    <div class="code-display">
                        <pre>${escapeHtml(question.code)}</pre>
                    </div>
                    <p class="question-title">${escapeHtml(question.question)}</p>
                    <div class="options-list" id="options-list"></div>
                    <div id="feedback" style="display: none;"></div>
                    <div class="action-buttons">
                        <button class="btn-submit" id="btn-submit" onclick="submitAnswer()">Submit Answer</button>
                        <button class="btn-next" id="btn-next" onclick="nextQuestion()">Next Question</button>
                    </div>
                </div>
                <div class="editor-panel">
                    <h3><span class="icon">💻</span> Code Playground</h3>
                    <div class="editor-status" id="editor-status">
                        <span class="status-dot"></span>
                        <span>Complete lesson to unlock</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    contentArea.innerHTML = questionContent;
    
    if (question.type === 'error') {
        const errorInput = document.getElementById('error-input');
        if (errorInput) {
            errorInput.focus();
        }
    } else {
        renderOptions(question);
    }
    
    answered = false;
    selectedOptionIndex = null;
}

// ===== RENDER OPTIONS =====
function renderOptions(question) {
    const optionsList = document.getElementById('options-list');
    if (!optionsList) return;
    
    optionsList.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        button.dataset.index = index;
        optionsList.appendChild(button);
    });
}

// ===== SELECT OPTION =====
function selectOption(index) {
    if (answered) return;
    
    selectedOptionIndex = index;
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    if (buttons[index]) {
        buttons[index].classList.add('selected');
    }
}

// ===== SUBMIT ANSWER =====
function submitAnswer() {
    if (selectedOptionIndex === null) {
        alert('Please select an answer first');
        return;
    }
    
    if (answered) return;
    
    answered = true;
    const question = shuffledQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-button');
    const feedbackDiv = document.getElementById('feedback');
    const submitBtn = document.getElementById('btn-submit');
    const nextBtn = document.getElementById('btn-next');
    
    buttons.forEach(btn => btn.disabled = true);
    
    const isCorrect = selectedOptionIndex === question.correct;
    
    if (isCorrect) {
        buttons[selectedOptionIndex].classList.add('correct');
        totalScore++;
        document.getElementById('total-score').textContent = totalScore;
        
        feedbackDiv.innerHTML = `
            <div class="feedback-box correct">
                <strong>✓ Correct! Well done!</strong>
                <div class="feedback-details">${escapeHtml(question.explanation)}</div>
            </div>
        `;
        
        feedbackDiv.style.display = 'block';
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    } else {
        buttons[selectedOptionIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        
        feedbackDiv.innerHTML = `
            <div class="feedback-box incorrect">
                <strong>✗ Incorrect</strong>
                <div class="feedback-details">The correct answer is: <strong>${escapeHtml(question.options[question.correct])}</strong></div>
            </div>
        `;
        
        feedbackDiv.style.display = 'block';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Quiz restarting. Answer carefully next time!');
            quizInProgress = false;
            currentPlayerName = '';
            showNameEntryScreen();
        }, 2000);
    }
}

// ===== SUBMIT ERROR ANSWER =====
function submitErrorAnswer() {
    const errorInput = document.getElementById('error-input');
    const userAnswer = errorInput.value.trim().toLowerCase();
    const question = shuffledQuestions[currentQuestionIndex];
    const feedbackDiv = document.getElementById('feedback-error');
    const submitBtn = document.querySelector('.btn-submit');
    const nextBtn = document.getElementById('next-btn-error');
    
    if (!userAnswer) {
        alert('Please type your answer');
        return;
    }
    
    if (answered) return;
    
    answered = true;
    const correctAnswer = question.errorAnswer.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    
    if (isCorrect) {
        totalScore++;
        document.getElementById('total-score').textContent = totalScore;
        
        feedbackDiv.innerHTML = `
            <div class="feedback-box correct">
                <strong>✓ Correct! Well done!</strong>
                <div class="feedback-details">${escapeHtml(question.explanation)}</div>
            </div>
        `;
        feedbackDiv.style.display = 'block';
        
        errorInput.disabled = true;
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    } else {
        feedbackDiv.innerHTML = `
            <div class="feedback-box incorrect">
                <strong>✗ Incorrect</strong>
                <div class="feedback-details">The error was: <strong>${escapeHtml(question.errorAnswer)}</strong></div>
            </div>
        `;
        feedbackDiv.style.display = 'block';
        
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Quiz restarting. Answer carefully next time!');
            quizInProgress = false;
            currentPlayerName = '';
            showNameEntryScreen();
        }, 2000);
    }
}

// ===== NEXT QUESTION =====
function nextQuestion() {
    currentQuestionIndex++;
    answered = false;
    loadQuestion();
}

// ===== UPDATE PROGRESS =====
function updateProgress() {
    const total = shuffledQuestions.length;
    const current = currentQuestionIndex + 1;
    const percentage = (current / total) * 100;
    
    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('progress-text').textContent = `${current}/${total}`;
}

// ===== SHOW COMPLETION =====
function showCompletion() {
    const contentArea = document.getElementById('content-area');
    const total = shuffledQuestions.length;
    
    addToLeaderboard(currentPlayerName, totalScore);
    
    let message = '';
    if (totalScore === total) {
        message = 'Perfect score! You are a code master! 🚀';
    } else if (totalScore >= Math.ceil(total * 0.8)) {
        message = 'Excellent! You have strong coding skills! 👏';
    } else if (totalScore >= Math.ceil(total * 0.6)) {
        message = 'Good job! Keep practicing! 📚';
    } else {
        message = 'Keep learning and practicing! 💪';
    }
    
    contentArea.innerHTML = `
        <div class="completion-screen">
            <div class="completion-badge">🎉</div>
            <h2>Quiz Complete!</h2>
            
            <div class="completion-score">
                Your Score: ${totalScore}/${total} points
            </div>
            
            <p class="completion-message">${message}</p>
            
            <button class="btn-restart" onclick="location.reload()">Play Again</button>
        </div>
    `;
    
    quizInProgress = false;
}

// ===== UTILITY FUNCTION =====
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
