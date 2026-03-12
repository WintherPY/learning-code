// ===== BEGINNER-FRIENDLY QUIZ DATA =====
const allQuizQuestions = [
    // EASY - Module 1
    {
        type: "identify",
        code: `<h1>Hello World</h1>`,
        question: "What does this code do?",
        options: ["Creates a large heading", "Creates a paragraph", "Creates a button"],
        correct: 0,
        explanation: "This is HTML. The <h1> tag creates the largest heading on a webpage.",
        facts: "Headings help organize content. H1 is the most important, H2 is smaller, H3 is even smaller!",
        codeBehavior: "This displays: Hello World as a big title on the page.",
        codeEditor: false,
        language: "html",
        editorHint: "Try different heading sizes: h1, h2, h3",
        suggestions: [
            { example: "<h2>Smaller heading</h2>", desc: "Makes a smaller heading" },
            { example: "<h3>Even smaller</h3>", desc: "Makes an even smaller heading" }
        ]
    },
    {
        type: "identify",
        code: `<p>This is a paragraph</p>`,
        question: "What does this code do?",
        options: ["Creates text/paragraph", "Creates a heading", "Creates a button"],
        correct: 0,
        explanation: "The <p> tag creates a paragraph - normal text content.",
        facts: "Paragraphs are used for regular text on websites. Every article you read uses <p> tags!",
        codeBehavior: "This displays: This is a paragraph as normal readable text.",
        codeEditor: false,
        language: "html",
        editorHint: "Paragraphs are just text containers",
        suggestions: [
            { example: "<p>My name is John</p>", desc: "A simple sentence" },
            { example: "<p>I love coding!</p>", desc: "Text about feelings" }
        ]
    },
    {
        type: "identify",
        code: `<button>Click me</button>`,
        question: "What does this code create?",
        options: ["A clickable button", "A text input", "A link"],
        correct: 0,
        explanation: "The <button> tag creates a button that users can click.",
        facts: "Buttons are interactive! When you click 'Login' or 'Submit', that's a button!",
        codeBehavior: "This displays: Click me as a clickable button.",
        codeEditor: false,
        language: "html",
        editorHint: "Buttons need text inside them",
        suggestions: [
            { example: "<button>Submit</button>", desc: "A submit button" },
            { example: "<button>Delete</button>", desc: "A delete button" }
        ]
    },
    {
        type: "error-find",
        code: `<h1>Title</h1>`,
        question: "There are NO errors in this code. Type: no error",
        errorAnswer: "no error",
        explanation: "Correct! This code is perfect - every tag is closed properly.",
        facts: "Good HTML always closes every opening tag!",
        codeBehavior: "This displays a proper heading with no issues.",
        codeEditor: false,
        language: "html"
    },
    {
        type: "identify",
        code: `console.log("Hello");`,
        question: "What does this code do?",
        options: ["Prints text to console", "Creates a variable", "Makes a button"],
        correct: 0,
        explanation: "console.log() prints/displays text to the browser console.",
        facts: "Programmers use console.log() to see what their code is doing!",
        codeBehavior: "This prints: Hello to the console for programmers to see.",
        codeEditor: true,
        language: "javascript",
        editorHint: "Try typing different messages",
        suggestions: [
            { example: 'console.log("My name");', desc: "Print your name" },
            { example: 'console.log("I am learning!");', desc: "Print a message" }
        ]
    },
    // MEDIUM - Module 2
    {
        type: "identify",
        code: `const x = 5;
console.log(x);`,
        question: "What does this code do?",
        options: ["Creates a container", "Stores the number 5 in a variable, then prints it", "Creates a button"],
        correct: 1,
        explanation: "const creates a variable (a container for data). x holds the value 5. console.log prints it.",
        facts: "Variables are like labeled boxes - you put data in them and use the label later!",
        codeBehavior: "This stores 5 in x, then prints: 5 to the console.",
        codeEditor: true,
        language: "javascript",
        editorHint: "Try different numbers or names",
        suggestions: [
            { example: 'const age = 25;\nconsole.log(age);', desc: "Store and print an age" },
            { example: 'const name = "Alice";\nconsole.log(name);', desc: "Store and print a name" }
        ]
    },
    {
        type: "error-find",
        code: `const name = "John"
console.log(name)`,
        question: "Find the error - what's missing?",
        errorAnswer: "semicolon",
        explanation: "Both lines are missing semicolons (;) at the end. JavaScript statements should end with ;",
        facts: "Semicolons tell JavaScript: 'This statement is complete!'",
        codeBehavior: "Even though this might work, it's bad practice without semicolons.",
        codeEditor: true,
        language: "javascript"
    },
    {
        type: "identify",
        code: `<div>
  <h1>Title</h1>
  <p>Text here</p>
</div>`,
        question: "What is the <div> doing?",
        options: ["Creating a container to group other elements", "Creating a paragraph", "Creating a heading"],
        correct: 0,
        explanation: "<div> is a container/box. It groups other elements together for organization.",
        facts: "Divs are like invisible boxes - they organize your webpage layout!",
        codeBehavior: "This creates a box containing a heading and a paragraph.",
        codeEditor: false,
        language: "html",
        editorHint: "Divs are containers",
        suggestions: [
            { example: '<div>\n  <h1>Header</h1>\n</div>', desc: "Box with heading" },
            { example: '<div>\n  <p>Text</p>\n  <p>More text</p>\n</div>', desc: "Box with paragraphs" }
        ]
    },
    {
        type: "error-find",
        code: `<h1>Title
<p>Paragraph</p>`,
        question: "Find the error - what tag is not closed?",
        errorAnswer: "h1",
        explanation: "The <h1> tag is missing its closing tag </h1>",
        facts: "In HTML, almost every opening tag needs a closing tag!",
        codeBehavior: "Without proper closing, the page might look wrong.",
        codeEditor: false,
        language: "html"
    },
    {
        type: "identify",
        code: `if (5 > 3) {
  console.log("5 is bigger");
}`,
        question: "What does this code do?",
        options: ["Checks if 5 is bigger than 3, if yes, prints a message", "Creates a variable", "Creates a button"],
        correct: 0,
        explanation: "if() checks a condition. If true, it runs the code inside the braces {}",
        facts: "Conditional logic makes programs smart - they can make decisions!",
        codeBehavior: "Since 5 > 3 is true, this prints: '5 is bigger'",
        codeEditor: true,
        language: "javascript",
        editorHint: "Try changing the numbers",
        suggestions: [
            { example: 'if (10 > 5) {\n  console.log("yes");\n}', desc: "Check 10 vs 5" },
            { example: 'if (3 > 5) {\n  console.log("no");\n}', desc: "Check 3 vs 5" }
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

// ===== NAME ENTRY SCREEN =====
function showNameEntryScreen() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="name-entry-screen">
            <h2>Welcome to CodeMaster</h2>
            <p class="tagline">Professional Coding Training Platform</p>
            
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
            
            <button class="btn-start" onclick="startQuiz()">Start Course</button>
            
            <div class="leaderboard-section">
                <h3>🏆 Top 5 Players</h3>
                <div class="leaderboard-list">
                    ${renderLeaderboard()}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('player-name').focus();
    document.getElementById('player-name').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startQuiz();
    });
}

// ===== START QUIZ =====
function startQuiz() {
    const nameInput = document.getElementById('player-name');
    const name = nameInput.value.trim();
    
    if (!name || name.length < 2) {
        alert('Please enter a valid name (at least 2 characters)');
        return;
    }
    
    currentPlayerName = name;
    shuffledQuestions = [...allQuizQuestions].sort(() => Math.random() - 0.5);
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
    
    let lesssonNumber = currentQuestionIndex + 1;
    document.getElementById('lesson-title').textContent = `Lesson ${lesssonNumber}`;
    updateProgress();
    
    let questionContent = '';
    
    if (question.type === 'error-find') {
        questionContent = `
            <div class="lesson-container">
                <div class="lesson-panel">
                    <h3><span class="icon">🔍</span> Find the Error</h3>
                    <div class="code-display">
                        <pre>${escapeHtml(question.code)}</pre>
                    </div>
                    
                    <p class="question-title">${escapeHtml(question.question)}</p>
                    
                    <div class="input-group">
                        <input 
                            type="text" 
                            id="error-input" 
                            placeholder="Type the error you found..."
                            class="error-input"
                        />
                    </div>
                    
                    <div id="feedback-error" style="display: none;"></div>
                    
                    <div class="action-buttons">
                        <button class="btn-submit" onclick="submitErrorAnswer()">Submit Answer</button>
                        <button class="btn-next" id="next-btn-error">Next Question</button>
                    </div>
                </div>
                
                <div class="editor-panel">
                    <h3><span class="icon">📝</span> Code Playground</h3>
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
                    <h3><span class="icon">📝</span> Code Playground</h3>
                    <div class="editor-status" id="editor-status">
                        <span class="status-dot"></span>
                        <span>Complete lesson to unlock</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    contentArea.innerHTML = questionContent;
    
    if (question.type === 'error-find') {
        document.getElementById('error-input').focus();
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
    buttons[index].classList.add('selected');
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
        
        // Restart on wrong answer
        setTimeout(() => {
            alert('Quiz restarting. Answer carefully next time!');
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
        
        // Restart on wrong answer
        setTimeout(() => {
            alert('Quiz restarting. Answer carefully next time!');
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
        message = 'Perfect score! You are a coding master! 🚀';
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
            <h2>Course Complete!</h2>
            
            <div class="completion-score">
                Your Score: ${totalScore}/${total} points
            </div>
            
            <p class="completion-message">${message}</p>
            
            <button class="btn-restart" onclick="location.reload()">Try Again</button>
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
