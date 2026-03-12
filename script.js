// ===== ENHANCED QUIZ DATA WITH NEW QUESTION TYPES =====
const quizData = [
    // TYPE 1: Identify Language
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
        editorHint: "Try adding a <p>Hello</p> tag inside the body.",
        suggestions: ["Try changing the title text", "Add more HTML tags like <p>, <div>, or <button>"]
    },
    // TYPE 2: What Does This Code Do
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
        editorHint: "Try changing the message value or adding more console.log() lines.",
        suggestions: ["Try console.log() with different values", "Combine multiple variables into one message"]
    },
    // TYPE 3: Find The Error
    {
        type: "error",
        code: `function greet(name) {
    return "Hello, " + name
}
console.log(greet("Alice"));`,
        question: "Find the error in this code (Click on the code snippet when found)",
        options: ["Missing semicolon", "Missing curly brace", "No error"],
        correct: 0,
        explanation: "Line 2 is missing a semicolon at the end of the return statement.",
        facts: "Python doesn't require semicolons, but JavaScript does. This is one of the most common beginner mistakes!",
        codeBehavior: "This function would still work in many JavaScript environments, but proper syntax requires the semicolon.",
        codeEditor: true,
        editorHint: "Add the missing semicolon and try running it!",
        suggestions: ["Always end statements with semicolons", "Use a code editor that highlights syntax errors"]
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
        codeEditor: true,
        editorHint: "Try calling the function with different numbers like add(5, 3).",
        suggestions: ["Add more parameters to the function", "Create functions that do different operations"]
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
        editorHint: "Try changing the multiplier (n * 3) or using different operations (n + 1).",
        suggestions: ["Use map() with different operations", "Try filter() to select specific elements"]
    },
    {
        type: "error",
        code: `const x = 10
const y = 20
console.log(x + y)`,
        question: "Find the error (Click when found)",
        options: ["Missing semicolons", "Variable names are wrong", "No error"],
        correct: 0,
        explanation: "JavaScript code should end statements with semicolons (though often optional due to automatic insertion).",
        facts: "Modern JavaScript tools can auto-format your code to add semicolons automatically.",
        codeBehavior: "This code will still run correctly because JavaScript has automatic semicolon insertion.",
        codeEditor: true,
        editorHint: "Try adding semicolons to each line and run it again.",
        suggestions: ["Use a linter like ESLint to catch style issues", "Configure your editor to auto-format code"]
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
        codeEditor: true,
        editorHint: "Try changing the colors (use hex codes like #FF5733) or adjusting the font-size.",
        suggestions: ["Explore different color values", "Add more CSS properties like padding, margin, and border-radius"]
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
        editorHint: "Try changing the numbers or using different comparison operators (<, <=, ==).",
        suggestions: ["Experiment with different comparison operators", "Add more conditions using && (AND) and || (OR)"]
    },
    {
        type: "error",
        code: `function sayHello {
    return "Hello";
}`,
        question: "Find the error (Click when found)",
        options: ["Missing parentheses after function name", "Missing return statement", "No error"],
        correct: 0,
        explanation: "JavaScript function syntax requires parentheses after the function name: function sayHello().",
        facts: "Function syntax is strict in most programming languages to help avoid bugs.",
        codeBehavior: "This code will throw a syntax error because parentheses are required.",
        codeEditor: true,
        editorHint: "Add parentheses after 'sayHello' to fix it.",
        suggestions: ["Remember function syntax: function name() {}", "Use your browser's developer console to see syntax errors"]
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
        editorHint: "Try adding more HTML elements like <span>, <img>, or <a> tags.",
        suggestions: ["Combine HTML with CSS for styling", "Add JavaScript to make interactive elements"]
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
        editorHint: "Try using map() or filter() instead of forEach() to see different results.",
        suggestions: ["Use map() to transform array elements", "Use filter() to select specific elements"]
    }
];

// ===== QUIZ STATE =====
let currentQuestionIndex = 0;
let qaPoints = 0;
let codePoints = 0;
let answered = false;
let selectedOptionIndex = null;
let currentQuestionCorrect = false;
let codeSubmitted = false;

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
    }
    
    // Update question text
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = question.question;
    }
    
    // Show/hide find error button for error questions
    const findErrorBtn = document.getElementById('find-error-btn');
    if (findErrorBtn) {
        if (question.type === 'error') {
            findErrorBtn.style.display = 'inline-block';
            findErrorBtn.dataset.questionIndex = currentQuestionIndex;
        } else {
            findErrorBtn.style.display = 'none';
        }
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
    }
    
    // Hide feedback
    const feedbackSection = document.getElementById('feedback-section');
    if (feedbackSection) {
        feedbackSection.style.display = 'none';
    }
    
    // Disable code editor initially
    const codeEditor = document.getElementById('code-editor');
    if (codeEditor) {
        codeEditor.disabled = true;
        codeEditor.value = '';
    }
    
    const runCodeBtn = document.getElementById('run-code-btn');
    if (runCodeBtn) {
        runCodeBtn.disabled = true;
    }
    
    // Update editor info
    const editorInfo = document.getElementById('editor-info');
    if (editorInfo) {
        editorInfo.textContent = '(Available after correct answer)';
        editorInfo.style.color = '#999';
    }
    
    // Clear hints
    const editorHints = document.getElementById('editor-hints');
    if (editorHints) {
        editorHints.innerHTML = '';
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
    currentQuestionCorrect = false;
    codeSubmitted = false;
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

// ===== CHECK FOR ERROR (Error Finding Questions) =====
function checkForError() {
    const question = quizData[currentQuestionIndex];
    if (question.type !== 'error') return;
    
    // User found the error, award points
    selectedOptionIndex = question.correct;
    submitAnswer();
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
    
    const isCorrect = selectedOptionIndex === question.correct;
    
    if (isCorrect) {
        buttons[selectedOptionIndex].classList.add('correct');
        qaPoints++;
        currentQuestionCorrect = true;
        
        feedbackText.innerHTML = `<strong>✓ Correct!</strong>`;
        feedbackSection.className = 'feedback correct';
        
        // Enable code editor for correct answers
        const codeEditor = document.getElementById('code-editor');
        const runCodeBtn = document.getElementById('run-code-btn');
        const editorInfo = document.getElementById('editor-info');
        
        if (codeEditor && question.codeEditor) {
            codeEditor.disabled = false;
            runCodeBtn.disabled = false;
            editorInfo.textContent = '(You can test code here!)';
            editorInfo.style.color = '#28a745';
            
            // Show hints
            const editorHints = document.getElementById('editor-hints');
            if (editorHints && question.editorHint) {
                editorHints.innerHTML = `💡 <strong>Hint:</strong> ${question.editorHint}`;
            }
        }
    } else {
        buttons[selectedOptionIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        feedbackText.innerHTML = `<strong>✗ Incorrect</strong><br><br>The correct answer is: <strong>${question.options[question.correct]}</strong>`;
        feedbackSection.className = 'feedback incorrect';
    }
    
    // Add additional facts and suggestions
    const additionalFacts = document.getElementById('additional-facts');
    if (additionalFacts && isCorrect) {
        let factsHTML = `
            <strong>What this code does:</strong>
            <div class="fact-item">${question.codeBehavior}</div>
            
            <strong>Real-world facts:</strong>
            <div class="fact-item">${question.facts}</div>
        `;
        additionalFacts.innerHTML = factsHTML;
    }
    
    // Add code suggestions
    const codeSuggestions = document.getElementById('code-suggestions');
    if (codeSuggestions && isCorrect && question.suggestions) {
        let suggestionsHTML = '<strong>Things to try in the code editor:</strong>';
        question.suggestions.forEach(suggestion => {
            suggestionsHTML += `<div class="suggestion">→ ${suggestion}</div>`;
        });
        codeSuggestions.innerHTML = suggestionsHTML;
    }
    
    feedbackSection.style.display = 'block';
    
    updateScores();
    
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextBtn) {
        nextBtn.style.display = 'block';
        if (!currentQuestionCorrect) {
            nextBtn.textContent = 'Next Question →';
        } else if (quizData[currentQuestionIndex].codeEditor) {
            nextBtn.textContent = 'Skip Code (Next →)';
        }
    }
}

// ===== RUN CODE =====
function runCode() {
    if (!currentQuestionCorrect) {
        alert('You must answer the question correctly first!');
        return;
    }
    
    const codeEditor = document.getElementById('code-editor');
    const userCode = codeEditor.value.trim();
    
    if (!userCode) {
        alert('Please write some code to run!');
        return;
    }
    
    try {
        const outputText = document.getElementById('output-text');
        const codeOutput = document.getElementById('code-output');
        
        // Capture console.log output
        let output = '';
        const originalLog = console.log;
        console.log = function(...args) {
            output += args.join(' ') + '\n';
        };
        
        // Execute user code
        eval(userCode);
        
        // Restore console.log
        console.log = originalLog;
        
        if (output) {
            outputText.textContent = output;
            codeOutput.style.display = 'block';
            
            // Award code points
            if (!codeSubmitted) {
                codePoints++;
                codeSubmitted = true;
                updateScores();
                alert('🎉 Great job! Your code works! +1 Code Point');
            }
        } else {
            outputText.textContent = 'Code ran successfully (no output)';
            codeOutput.style.display = 'block';
        }
    } catch (error) {
        const outputText = document.getElementById('output-text');
        const codeOutput = document.getElementById('code-output');
        outputText.textContent = 'Error: ' + error.message;
        outputText.style.color = '#dc3545';
        codeOutput.style.display = 'block';
    }
}

// ===== CLEAR CODE =====
function clearCode() {
    const codeEditor = document.getElementById('code-editor');
    if (codeEditor) {
        codeEditor.value = '';
    }
    const codeOutput = document.getElementById('code-output');
    if (codeOutput) {
        codeOutput.style.display = 'none';
    }
}

// ===== UPDATE SCORES =====
function updateScores() {
    document.getElementById('qa-points').textContent = qaPoints;
    document.getElementById('code-points').textContent = codePoints;
    document.getElementById('total-points').textContent = qaPoints + codePoints;
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
    
    const totalPoints = qaPoints + codePoints;
    const maxPoints = quizData.length * 2; // Each question can give 2 points max
    const percentage = Math.round((totalPoints / maxPoints) * 100);
    
    let message = '';
    if (percentage === 100) message = 'Perfect score! You are a programming expert! 🚀';
    else if (percentage >= 80) message = 'Excellent! You have strong coding skills! 👏';
    else if (percentage >= 60) message = 'Good job! Keep practicing! 📚';
    else message = 'Keep learning and practicing! 💪';
    
    mainContent.innerHTML = `
        <div class="completion-screen">
            <h2>Quiz Complete! 🎉</h2>
            <div class="score-summary">
                <p>Q&A Points: <strong>${qaPoints}</strong></p>
                <p>Code Points: <strong>${codePoints}</strong></p>
                <p>Total Points: <span class="score-percentage">${totalPoints}/${maxPoints}</span></p>
                <p>Percentage: <strong>${percentage}%</strong></p>
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
    qaPoints = 0;
    codePoints = 0;
    answered = false;
    selectedOptionIndex = null;
    currentQuestionCorrect = false;
    codeSubmitted = false;
    
    updateScores();
    
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="quiz-container">
                <div class="editor-section">
                    <div class="editor-header">
                        <h3>Virtual Code Editor</h3>
                        <div class="editor-info" id="editor-info">(Available after correct answer)</div>
                    </div>
                    <textarea id="code-editor" class="code-editor" placeholder="Write your code here..." disabled></textarea>
                    <div class="editor-buttons">
                        <button id="run-code-btn" class="run-btn" onclick="runCode()" disabled>Run Code</button>
                        <button id="clear-code-btn" class="clear-btn" onclick="clearCode()">Clear</button>
                    </div>
                    <div id="editor-hints" class="editor-hints"></div>
                    <div id="code-output" class="code-output" style="display: none;">
                        <strong>Output:</strong>
                        <pre id="output-text"></pre>
                    </div>
                </div>

                <div class="questions-section">
                    <section class="code-section">
                        <h2>Code Snippet:</h2>
                        <div class="code-display-wrapper">
                            <pre id="code-wrapper"><code id="code-display">// Loading...</code></pre>
                            <button id="find-error-btn" class="find-error-btn" style="display: none;" onclick="checkForError()">Find Error</button>
                        </div>
                    </section>

                    <section class="question-section">
                        <h3 id="question-text">Loading question...</h3>
                        <div class="options-container" id="options-container"></div>
                    </section>

                    <div class="feedback" id="feedback-section" style="display: none;">
                        <p id="feedback-text"></p>
                        <div id="additional-facts" class="additional-facts"></div>
                        <div id="code-suggestions" class="code-suggestions"></div>
                    </div>

                    <div class="action-buttons">
                        <button class="submit-btn" id="submit-btn" onclick="submitAnswer()">Submit Answer</button>
                        <button class="next-btn" id="next-btn" onclick="nextQuestion()" style="display: none;">Next Question →</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    loadQuestion();
}
