// ===== BEGINNER-FRIENDLY QUIZ DATA WITH RANDOMIZATION =====
const allQuizQuestions = [
    // EASY QUESTIONS (Start with these)
    {
        type: "identify",
        code: `<h1>Hello World</h1>`,
        question: "What does this code do?",
        options: ["Creates a large heading", "Creates a paragraph", "Creates a button"],
        correct: 0,
        explanation: "This is HTML. The &lt;h1&gt; tag creates the largest heading on a webpage.",
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
        explanation: "The &lt;p&gt; tag creates a paragraph - normal text content.",
        facts: "Paragraphs are used for regular text on websites. Every article you read uses &lt;p&gt; tags!",
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
        explanation: "The &lt;button&gt; tag creates a button that users can click.",
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
    // MEDIUM QUESTIONS (Introduced after easy ones)
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
        question: "What is the &lt;div&gt; doing?",
        options: ["Creating a container to group other elements", "Creating a paragraph", "Creating a heading"],
        correct: 0,
        explanation: "&lt;div&gt; is a container/box. It groups other elements together for organization.",
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
        explanation: "The &lt;h1&gt; tag is missing its closing tag &lt;/h1&gt;",
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
let leaderboard = JSON.parse(localStorage.getItem('codeQuizLeaderboard')) || [];
let currentPlayerName = '';
let shuffledQuestions = [];

// ===== QUIZ STATE =====
let currentQuestionIndex = 0;
let qaPoints = 0;
let codePoints = 0;
let answered = false;
let selectedOptionIndex = null;
let currentQuestionCorrect = false;
let codeSubmitted = false;
let quizStarted = false;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    showNameEntry();
});

function showNameEntry() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div style="text-align: center; padding: 50px 20px; background: #000; border-radius: 8px; max-width: 500px; margin: 50px auto;">
            <h2 style="color: #fff; margin-bottom: 30px;">🚀 Welcome to Learning Code!</h2>
            
            <div style="margin-bottom: 30px;">
                <input 
                    type="text" 
                    id="player-name-input" 
                    placeholder="Enter your name..." 
                    style="width: 100%; padding: 12px; font-size: 16px; border: 2px solid #00d4ff; 
                           border-radius: 6px; background: #0f1419; color: #00ff41;"
                    maxlength="20"
                />
            </div>
            
            <button 
                onclick="startQuizWithName()" 
                style="width: 100%; padding: 12px; font-size: 16px; font-weight: 600; 
                       background: #00d4ff; color: #000; border: none; border-radius: 6px; 
                       cursor: pointer; margin-bottom: 20px;"
            >
                Start Quiz
            </button>
            
            <div id="leaderboard-container" style="margin-top: 40px; text-align: left; color: #fff;">
                <h3 style="color: #00d4ff; margin-bottom: 15px;">🏆 Top 5 Players</h3>
                <div id="leaderboard" style="background: #0f1419; padding: 15px; border-radius: 6px; border: 1px solid #2a2d3a;">
                    ${getLeaderboardHTML()}
                </div>
            </div>
        </div>
    `;
    document.getElementById('player-name-input').focus();
}

function getLeaderboardHTML() {
    if (leaderboard.length === 0) {
        return '<p style="color: #999; margin: 0;">No scores yet. Be the first!</p>';
    }
    
    const top5 = leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
    return top5.map((entry, index) => `
        <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #2a2d3a;">
            <span>#${index + 1} ${entry.name}</span>
            <span style="color: #00d4ff; font-weight: 600;">${entry.score} pts</span>
        </div>
    `).join('');
}

function startQuizWithName() {
    const nameInput = document.getElementById('player-name-input');
    const name = nameInput.value.trim();
    
    if (!name) {
        alert('Please enter your name!');
        return;
    }
    
    currentPlayerName = name;
    quizStarted = true;
    
    // Shuffle questions
    shuffledQuestions = [...allQuizQuestions].sort(() => Math.random() - 0.5);
    
    currentQuestionIndex = 0;
    qaPoints = 0;
    codePoints = 0;
    
    initializeQuiz();
}

function initializeQuiz() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="score-display">
            <span>Player: <strong id="player-name">${currentPlayerName}</strong></span>
            <span>Q&A: <strong id="qa-points">0</strong></span>
            <span>Code: <strong id="code-points">0</strong></span>
            <span>Total: <strong id="total-points">0</strong></span>
        </div>
        
        <div class="quiz-container">
            <div class="code-section">
                <h2>Code Snippet:</h2>
                <pre id="code-wrapper"><code id="code-display">// Loading...</code></pre>
                <div id="error-input-section" style="display: none; margin-top: 15px;">
                    <input 
                        type="text" 
                        id="error-answer-input" 
                        placeholder="Type the error you found..."
                        style="width: 100%; padding: 10px; border: 2px solid #00d4ff; border-radius: 6px; background: #000; color: #00ff41; font-family: monospace;"
                    />
                    <button 
                        onclick="submitErrorAnswer()" 
                        style="width: 100%; margin-top: 10px; padding: 10px; background: #00d4ff; color: #000; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"
                    >
                        Submit Answer
                    </button>
                </div>
            </div>

            <section class="question-section">
                <h3 id="question-text">Loading question...</h3>
                <div class="options-container" id="options-container"></div>
            </section>

            <div class="feedback" id="feedback-section" style="display: none;">
                <p id="feedback-text"></p>
                <div id="additional-facts"></div>
            </div>

            <div class="action-buttons">
                <button class="submit-btn" id="submit-btn" onclick="submitAnswer()">Submit Answer</button>
                <button class="next-btn" id="next-btn" onclick="nextQuestion()" style="display: none;">Next Question →</button>
            </div>
        </div>
    `;
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showCompletion();
        return;
    }

    const question = shuffledQuestions[currentQuestionIndex];
    
    // Update code display
    document.getElementById('code-display').textContent = question.code;
    document.getElementById('question-text').textContent = question.question;
    
    // Show/hide error input
    const errorSection = document.getElementById('error-input-section');
    if (question.type === 'error-find') {
        errorSection.style.display = 'block';
        document.getElementById('error-answer-input').value = '';
        document.getElementById('options-container').innerHTML = '';
    } else {
        errorSection.style.display = 'none';
        
        const optionsContainer = document.getElementById('options-container');
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
    
    // Reset states
    document.getElementById('feedback-section').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
    
    answered = false;
    selectedOptionIndex = null;
    currentQuestionCorrect = false;
}

function selectOption(index) {
    if (answered) return;
    
    selectedOptionIndex = index;
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    if (buttons[index]) {
        buttons[index].classList.add('selected');
    }
}

function submitErrorAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    const userAnswer = document.getElementById('error-answer-input').value.trim().toLowerCase();
    const correctAnswer = question.errorAnswer.toLowerCase();
    
    const feedbackSection = document.getElementById('feedback-section');
    const feedbackText = document.getElementById('feedback-text');
    
    answered = true;
    
    if (userAnswer === correctAnswer) {
        qaPoints++;
        currentQuestionCorrect = true;
        feedbackText.innerHTML = `<strong style="color: #00ff41;">✓ Correct! Well done!</strong>`;
        feedbackSection.className = 'feedback correct';
    } else {
        feedbackText.innerHTML = `<strong style="color: #ff5555;">✗ Incorrect</strong><br>The error was: <strong>${question.errorAnswer}</strong>`;
        feedbackSection.className = 'feedback incorrect';
        
        // Restart on wrong answer
        setTimeout(() => {
            alert('Quiz restarting... Answer carefully next time!');
            showNameEntry();
        }, 2000);
        return;
    }
    
    feedbackSection.style.display = 'block';
    updateScores();
    
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('next-btn').textContent = 'Next Question →';
    
    document.getElementById('error-answer-input').disabled = true;
}

function submitAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    if (question.type === 'error-find') {
        return;
    }
    
    if (selectedOptionIndex === null) {
        alert('Please select an answer!');
        return;
    }
    
    if (answered) return;
    
    answered = true;
    const buttons = document.querySelectorAll('.option-btn');
    const feedbackSection = document.getElementById('feedback-section');
    const feedbackText = document.getElementById('feedback-text');
    
    buttons.forEach(btn => btn.disabled = true);
    
    const isCorrect = selectedOptionIndex === question.correct;
    
    if (isCorrect) {
        buttons[selectedOptionIndex].classList.add('correct');
        qaPoints++;
        currentQuestionCorrect = true;
        feedbackText.innerHTML = `<strong style="color: #00ff41;">✓ Correct!</strong>`;
        feedbackSection.className = 'feedback correct';
    } else {
        buttons[selectedOptionIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        feedbackText.innerHTML = `<strong style="color: #ff5555;">✗ Incorrect</strong><br>The correct answer is: <strong>${question.options[question.correct]}</strong>`;
        feedbackSection.className = 'feedback incorrect';
        
        // Restart on wrong answer
        setTimeout(() => {
            alert('Quiz restarting... Be more careful!');
            showNameEntry();
        }, 2000);
        return;
    }
    
    feedbackSection.style.display = 'block';
    updateScores();
    
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('next-btn').textContent = 'Next Question →';
}

function updateScores() {
    document.getElementById('qa-points').textContent = qaPoints;
    document.getElementById('code-points').textContent = codePoints;
    document.getElementById('total-points').textContent = qaPoints + codePoints;
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showCompletion() {
    const totalScore = qaPoints + codePoints;
    
    // Add to leaderboard
    leaderboard.push({
        name: currentPlayerName,
        score: totalScore,
        date: new Date().toLocaleDateString()
    });
    localStorage.setItem('codeQuizLeaderboard', JSON.stringify(leaderboard));
    
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div style="text-align: center; padding: 50px 20px; background: #000; border-radius: 8px; max-width: 600px; margin: 50px auto;">
            <h2 style="color: #00ff41; margin-bottom: 20px;">🎉 Quiz Complete!</h2>
            
            <div style="background: #0f1419; padding: 30px; border-radius: 6px; border: 1px solid #2a2d3a; margin-bottom: 30px;">
                <p style="color: #fff; font-size: 18px; margin: 10px 0;">Player: <strong>${currentPlayerName}</strong></p>
                <p style="color: #fff; font-size: 18px; margin: 10px 0;">Total Score: <strong style="color: #00d4ff;">${totalScore} points</strong></p>
                <p style="color: #999; font-size: 14px; margin-top: 20px;">Questions answered: ${shuffledQuestions.length}</p>
            </div>
            
            <button 
                onclick="location.reload()" 
                style="width: 100%; padding: 12px; font-size: 16px; font-weight: 600; 
                       background: #00d4ff; color: #000; border: none; border-radius: 6px; 
                       cursor: pointer; margin-bottom: 20px;"
            >
                Play Again
            </button>
        </div>
    `;
}
