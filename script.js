// ===== BEGINNER-FRIENDLY QUIZ DATA - ORIGINAL WORKING VERSION =====
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
        language: "html",
        editorHint: "💡 Try adding a paragraph tag with text inside the body.",
        suggestions: [
            { example: "<p>This is a paragraph</p>", desc: "Creates text content" },
            { example: "<button>Click Me</button>", desc: "Creates a clickable button" },
            { example: "<h2>Subheading</h2>", desc: "Creates a smaller heading" }
        ]
    },
    {
        type: "behavior",
        code: `const message = "Hello";
console.log(message);`,
        question: "What does this code do?",
        options: ["Creates a variable", "Prints 'Hello' to the console", "Creates a function"],
        correct: 1,
        explanation: "This code creates a variable and prints its value.",
        facts: "JavaScript is used by 98% of all websites for interactivity. Google Chrome, Firefox, and Safari all run JavaScript.",
        codeBehavior: "This code declares a variable 'message' with the value 'Hello', then outputs it to the browser console.",
        codeEditor: true,
        language: "javascript",
        editorHint: "💡 Try logging different values or creating multiple variables.",
        suggestions: [
            { example: 'const name = "Alice";\\nconsole.log(name);', desc: "Store a name and print it" },
            { example: 'const age = 25;\\nconsole.log(age);', desc: "Store a number and print it" },
            { example: 'const x = 10;\\nconst y = 20;\\nconsole.log(x + y);', desc: "Add two numbers and print result" }
        ]
    },
    {
        type: "error",
        code: `function greet(name) {
    return "Hello, " + name
}
console.log(greet("Alice"));`,
        question: "Find the error in this code - Type the error you found",
        errorAnswer: "semicolon",
        explanation: "Line 2 is missing a semicolon at the end of the return statement.",
        facts: "Python doesn't require semicolons, but JavaScript does. This is one of the most common beginner mistakes!",
        codeBehavior: "This function would still work in many JavaScript environments, but proper syntax requires the semicolon.",
        codeEditor: true,
        language: "javascript",
        editorHint: "💡 Always end statements with a semicolon (;) in JavaScript.",
        suggestions: [
            { example: 'return "Hello, " + name;', desc: "Fix: Add semicolon at end" },
            { example: 'const x = 10;\\nconst y = 20;', desc: "All statements need semicolons" },
            { example: 'console.log("test");', desc: "Even console.log needs a semicolon" }
        ]
    },
    {
        type: "identify",
        code: `def add(a, b):
    return a + b`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "Python", "Java"],
        correct: 1,
        explanation: "This is Python, a simple and readable language.",
        facts: "Python powers machine learning at Google, Instagram, Netflix, and Spotify. It's the language of AI and data science!",
        codeBehavior: "This function takes two numbers and returns their sum.",
        codeEditor: false,
        language: "python",
        editorHint: "💡 Python code cannot be run in browsers, but you can learn the syntax here.",
        suggestions: [
            { example: 'def greet(name):\\n    return "Hello, " + name', desc: "Function that returns greeting" },
            { example: 'def multiply(a, b):\\n    return a * b', desc: "Function that multiplies numbers" },
            { example: 'result = add(5, 3)\\nprint(result)', desc: "Call function and print result" }
        ]
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
        facts: "Array methods like map() are powerful in JavaScript, used by companies like Netflix for data processing.",
        codeBehavior: "This code creates a new array where each number is multiplied by 2: [2, 4, 6, 8, 10].",
        codeEditor: true,
        language: "javascript",
        editorHint: "💡 The map() function transforms each element in an array.",
        suggestions: [
            { example: 'const nums = [1,2,3];\\nconst squared = nums.map(n => n * n);\\nconsole.log(squared);', desc: "Square each number" },
            { example: 'const nums = [1,2,3];\\nconst tripled = nums.map(n => n * 3);\\nconsole.log(tripled);', desc: "Multiply by 3" },
            { example: 'const nums = [10,20,30];\\nconst halved = nums.map(n => n / 2);\\nconsole.log(halved);', desc: "Divide by 2" }
        ]
    },
    {
        type: "error",
        code: `const x = 10
const y = 20
console.log(x + y)`,
        question: "Find the error - Type what's missing",
        errorAnswer: "semicolon",
        explanation: "JavaScript code should end statements with semicolons (though often optional due to automatic insertion).",
        facts: "Modern JavaScript tools can auto-format your code to add semicolons automatically.",
        codeBehavior: "This code will still run correctly because JavaScript has automatic semicolon insertion.",
        codeEditor: true,
        language: "javascript",
        editorHint: "💡 Best practice: Always add semicolons, even though they're sometimes optional.",
        suggestions: [
            { example: 'const x = 10;\\nconst y = 20;\\nconsole.log(x + y);', desc: "Properly formatted with semicolons" },
            { example: 'const name = "Bob";\\nconst age = 30;\\nconst combined = name + age;', desc: "Multiple statements with semicolons" },
            { example: 'const result = 5 + 5;\\nconst final = result * 2;', desc: "Expressions need semicolons" }
        ]
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
        facts: "CSS is used by every website to make things look beautiful. Bootstrap and Tailwind are popular CSS frameworks used by millions.",
        codeBehavior: "This code sets the background color to blue, text color to white, and font size to 16 pixels.",
        codeEditor: false,
        language: "css",
        editorHint: "💡 CSS cannot be executed in the browser editor, but you can learn the syntax.",
        suggestions: [
            { example: 'h1 {\\n    color: red;\\n    font-size: 32px;\\n}', desc: "Style headings" },
            { example: 'button {\\n    background-color: #28a745;\\n    padding: 10px 20px;\\n}', desc: "Style buttons" },
            { example: '.container {\\n    width: 100%;\\n    margin: 0 auto;\\n}', desc: "Style containers" }
        ]
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
        facts: "Conditional logic is used everywhere in programming - in video games, banking apps, and AI systems.",
        codeBehavior: "Since 10 is indeed greater than 5, the code prints '10 is greater than 5'.",
        codeEditor: true,
        language: "javascript",
        editorHint: "💡 Try changing the numbers or using different comparison operators.",
        suggestions: [
            { example: 'if (20 < 30) {\\n    console.log("30 is bigger");\\n}', desc: "Check if one number is smaller" },
            { example: 'if (15 === 15) {\\n    console.log("Equal");\\n}', desc: "Check if numbers are equal" },
            { example: 'if (5 !== 10) {\\n    console.log("Not equal");\\n}', desc: "Check if not equal" }
        ]
    },
    {
        type: "error",
        code: `function sayHello {
    return "Hello";
}`,
        question: "Find the error - Type what's missing",
        errorAnswer: "parentheses",
        explanation: "JavaScript function syntax requires parentheses after the function name: function sayHello().",
        facts: "Function syntax is strict in most programming languages to help avoid bugs.",
        codeBehavior: "This code will throw a syntax error because parentheses are required.",
        codeEditor: true,
        language: "javascript",
        editorHint: "💡 All functions need parentheses: function name() { ... }",
        suggestions: [
            { example: 'function sayHello() {\\n    return "Hello";\\n}', desc: "Fixed: Added parentheses" },
            { example: 'function add(a, b) {\\n    return a + b;\\n}', desc: "Function with parameters" },
            { example: 'function greet(name) {\\n    return "Hi " + name;\\n}', desc: "Function with parameter used" }
        ]
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
        facts: "HTML works together with CSS and JavaScript - HTML = structure, CSS = style, JavaScript = behavior.",
        codeBehavior: "This creates a container with a heading, paragraph, and clickable button.",
        codeEditor: true,
        language: "html",
        editorHint: "💡 Try adding more HTML elements to build your structure.",
        suggestions: [
            { example: '<img src="image.jpg" alt="Picture">', desc: "Add an image" },
            { example: '<a href="https://google.com">Link</a>', desc: "Create a clickable link" },
            { example: '<input type="text" placeholder="Enter name">', desc: "Add an input field" }
        ]
    },
    {
        type: "behavior",
        code: `const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => {
    console.log(fruit);
});`,
        question: "What does this code do?",
        options: ["Creates an array", "Prints each fruit to the console", "Returns the first fruit"],
        correct: 1,
        explanation: "forEach() loops through each item in the array and executes the function.",
        facts: "Loop methods like forEach() are fundamental in programming and used in every real-world application.",
        codeBehavior: "This code prints: apple, banana, orange (each on a new line).",
        codeEditor: true,
        language: "javascript",
        editorHint: "💡 forEach() loops through each item in an array.",
        suggestions: [
            { example: 'const nums = [1, 2, 3];\\nnums.forEach(n => console.log(n * 2));', desc: "Print each number doubled" },
            { example: 'const colors = ["red", "blue"];\\ncolors.forEach(c => console.log("Color: " + c));', desc: "Print with text" },
            { example: 'const items = ["a", "b", "c"];\\nitems.forEach((item, index) => console.log(index + ": " + item));', desc: "Print with position number" }
        ]
    }
];

// ===== LEADERBOARD STORAGE =====
let leaderboard = [];
let currentPlayerName = '';
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let totalScore = 0;
let answered = false;
let selectedOptionIndex = null;
let errorInputValue = '';
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
            <p class="tagline">Master Programming - Interactive Quiz</p>
            
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
    nameInput.focus();
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startQuizWithName();
    });
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
                            placeholder="Type the error you found..."
                            style="padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1em; font-family: 'Inter', sans-serif; width: 100%; margin-bottom: 15px;"
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
    errorInputValue = '';
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
    } else {
        buttons[selectedOptionIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        
        feedbackDiv.innerHTML = `
            <div class="feedback-box incorrect">
                <strong>✗ Incorrect</strong>
                <div class="feedback-details">The correct answer is: <strong>${escapeHtml(question.options[question.correct])}</strong></div>
            </div>
        `;
        
        setTimeout(() => {
            alert('Quiz restarting. Answer carefully next time!');
            quizInProgress = false;
            showNameEntryScreen();
        }, 2000);
        return;
    }
    
    feedbackDiv.style.display = 'block';
    document.getElementById('btn-submit').style.display = 'none';
    document.getElementById('btn-next').style.display = 'block';
    document.getElementById('btn-next').focus();
}

// ===== SUBMIT ERROR ANSWER =====
function submitErrorAnswer() {
    const errorInput = document.getElementById('error-input');
    const userAnswer = errorInput.value.trim().toLowerCase();
    const question = shuffledQuestions[currentQuestionIndex];
    const feedbackDiv = document.getElementById('feedback-error');
    
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
    } else {
        feedbackDiv.innerHTML = `
            <div class="feedback-box incorrect">
                <strong>✗ Incorrect</strong>
                <div class="feedback-details">The error was: <strong>${escapeHtml(question.errorAnswer)}</strong></div>
            </div>
        `;
        feedbackDiv.style.display = 'block';
        
        setTimeout(() => {
            alert('Quiz restarting. Answer carefully next time!');
            quizInProgress = false;
            showNameEntryScreen();
        }, 2000);
        return;
    }
    
    errorInput.disabled = true;
    document.querySelector('.btn-submit').style.display = 'none';
    document.getElementById('next-btn-error').style.display = 'block';
    document.getElementById('next-btn-error').onclick = nextQuestion;
    document.getElementById('next-btn-error').focus();
}

// ===== NEXT QUESTION =====
function nextQuestion() {
    currentQuestionIndex++;
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

// ===== EDIT NAME MODAL =====
function showEditNameModal() {
    document.getElementById('edit-name-modal').style.display = 'flex';
    document.getElementById('edit-name-input').value = currentPlayerName;
    document.getElementById('edit-name-input').focus();
}

function closeEditNameModal() {
    document.getElementById('edit-name-modal').style.display = 'none';
}

function confirmEditName() {
    const newName = document.getElementById('edit-name-input').value.trim();
    
    if (!newName || newName.length < 2) {
        alert('Please enter a valid name (at least 2 characters)');
        return;
    }
    
    currentPlayerName = newName;
    updateUserInfo();
    closeEditNameModal();
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
