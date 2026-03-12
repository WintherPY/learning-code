// ===== ENHANCED QUIZ DATA WITH CONCRETE CODE EXAMPLES IN SUGGESTIONS =====
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
            { example: 'const name = "Alice";\nconsole.log(name);', desc: "Store a name and print it" },
            { example: 'const age = 25;\nconsole.log(age);', desc: "Store a number and print it" },
            { example: 'const x = 10;\nconst y = 20;\nconsole.log(x + y);', desc: "Add two numbers and print result" }
        ]
    },
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
        language: "javascript",
        editorHint: "💡 Always end statements with a semicolon (;) in JavaScript.",
        suggestions: [
            { example: 'return "Hello, " + name;', desc: "Fix: Add semicolon at end" },
            { example: 'const x = 10;\nconst y = 20;', desc: "All statements need semicolons" },
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
            { example: 'def greet(name):\n    return "Hello, " + name', desc: "Function that returns greeting" },
            { example: 'def multiply(a, b):\n    return a * b', desc: "Function that multiplies numbers" },
            { example: 'result = add(5, 3)\nprint(result)', desc: "Call function and print result" }
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
            { example: 'const nums = [1,2,3];\nconst squared = nums.map(n => n * n);\nconsole.log(squared);', desc: "Square each number" },
            { example: 'const nums = [1,2,3];\nconst tripled = nums.map(n => n * 3);\nconsole.log(tripled);', desc: "Multiply by 3" },
            { example: 'const nums = [10,20,30];\nconst halved = nums.map(n => n / 2);\nconsole.log(halved);', desc: "Divide by 2" }
        ]
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
        language: "javascript",
        editorHint: "💡 Best practice: Always add semicolons, even though they're sometimes optional.",
        suggestions: [
            { example: 'const x = 10;\nconst y = 20;\nconsole.log(x + y);', desc: "Properly formatted with semicolons" },
            { example: 'const name = "Bob";\nconst age = 30;\nconst combined = name + age;', desc: "Multiple statements with semicolons" },
            { example: 'const result = 5 + 5;\nconst final = result * 2;', desc: "Expressions need semicolons" }
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
            { example: 'h1 {\n    color: red;\n    font-size: 32px;\n}', desc: "Style headings" },
            { example: 'button {\n    background-color: #28a745;\n    padding: 10px 20px;\n}', desc: "Style buttons" },
            { example: '.container {\n    width: 100%;\n    margin: 0 auto;\n}', desc: "Style containers" }
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
            { example: 'if (20 < 30) {\n    console.log("30 is bigger");\n}', desc: "Check if one number is smaller" },
            { example: 'if (15 === 15) {\n    console.log("Equal");\n}', desc: "Check if numbers are equal" },
            { example: 'if (5 !== 10) {\n    console.log("Not equal");\n}', desc: "Check if not equal" }
        ]
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
        language: "javascript",
        editorHint: "💡 All functions need parentheses: function name() { ... }",
        suggestions: [
            { example: 'function sayHello() {\n    return "Hello";\n}', desc: "Fixed: Added parentheses" },
            { example: 'function add(a, b) {\n    return a + b;\n}', desc: "Function with parameters" },
            { example: 'function greet(name) {\n    return "Hi " + name;\n}', desc: "Function with parameter used" }
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
            { example: 'const nums = [1, 2, 3];\nnums.forEach(n => console.log(n * 2));', desc: "Print each number doubled" },
            { example: 'const colors = ["red", "blue"];\ncolors.forEach(c => console.log("Color: " + c));', desc: "Print with text" },
            { example: 'const items = ["a", "b", "c"];\nitems.forEach((item, index) => console.log(index + ": " + item));', desc: "Print with position number" }
        ]
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

// ===== CHECK FOR ERROR =====
function checkForError() {
    const question = quizData[currentQuestionIndex];
    if (question.type !== 'error') return;
    
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
            if (question.language === 'javascript') {
                runCodeBtn.disabled = false;
                editorInfo.textContent = '✨ JavaScript - Try the code!';
            } else if (question.language === 'html') {
                runCodeBtn.disabled = false;
                editorInfo.textContent = '✨ HTML - Try the code!';
            } else {
                runCodeBtn.disabled = true;
                editorInfo.textContent = '📖 View only (not executable)';
            }
            editorInfo.style.color = '#28a745';
            
            // Show hints
            const editorHints = document.getElementById('editor-hints');
            if (editorHints && question.editorHint) {
                editorHints.innerHTML = question.editorHint;
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
            <strong>📌 What this code does:</strong>
            <div class="fact-item">${question.codeBehavior}</div>
            
            <strong>🌍 Real-world facts:</strong>
            <div class="fact-item">${question.facts}</div>
        `;
        additionalFacts.innerHTML = factsHTML;
    }
    
    // Add code suggestions with actual examples
    const codeSuggestions = document.getElementById('code-suggestions');
    if (codeSuggestions && isCorrect && question.suggestions) {
        let suggestionsHTML = '<strong>🎯 Examples to try:</strong>';
        question.suggestions.forEach(sug => {
            const codeExample = sug.example.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            suggestionsHTML += `
                <div class="suggestion">
                    <div style="margin-bottom: 5px; font-size: 0.9em;">${sug.desc}:</div>
                    <span class="suggestion-code">${codeExample}</span>
                </div>
            `;
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
        } else if (quizData[currentQuestionIndex].codeEditor && quizData[currentQuestionIndex].language !== 'python' && quizData[currentQuestionIndex].language !== 'css') {
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
    
    const question = quizData[currentQuestionIndex];
    const codeEditor = document.getElementById('code-editor');
    const userCode = codeEditor.value.trim();
    
    if (!userCode) {
        alert('Please write some code to run!');
        return;
    }
    
    const outputText = document.getElementById('output-text');
    const codeOutput = document.getElementById('code-output');
    
    try {
        if (question.language === 'html') {
            outputText.innerHTML = userCode;
            codeOutput.style.display = 'block';
            
            if (!codeSubmitted) {
                codePoints++;
                codeSubmitted = true;
                updateScores();
                alert('🎉 Great job! Your HTML code is valid! +1 Code Point');
            }
        } 
        else if (question.language === 'javascript') {
            let output = '';
            const originalLog = console.log;
            console.log = function(...args) {
                output += args.join(' ') + '\n';
            };
            
            eval(userCode);
            
            console.log = originalLog;
            
            if (output) {
                outputText.textContent = output.trim();
            } else {
                outputText.textContent = 'Code ran successfully (no output)';
            }
            codeOutput.style.display = 'block';
            
            if (!codeSubmitted) {
                codePoints++;
                codeSubmitted = true;
                updateScores();
                alert('🎉 Great job! Your code works! +1 Code Point');
            }
        }
    } catch (error) {
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
    const maxPoints = quizData.length * 2;
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
                        <button id="run-code-btn" class="run-btn" onclick="runCode()" disabled>▶ Run Code</button>
                        <button id="clear-code-btn" class="clear-btn" onclick="clearCode()">🗑 Clear</button>
                    </div>
                    <div id="editor-hints" class="editor-hints"></div>
                    <div id="code-output" class="code-output" style="display: none;">
                        <strong>📤 Output:</strong>
                        <div id="output-text"></div>
                    </div>
                </div>

                <div class="questions-section">
                    <section class="code-section">
                        <h2>Code Snippet:</h2>
                        <div class="code-display-wrapper">
                            <pre id="code-wrapper"><code id="code-display">// Loading...</code></pre>
                            <button id="find-error-btn" class="find-error-btn" style="display: none;" onclick="checkForError()">🔍 Find Error</button>
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
