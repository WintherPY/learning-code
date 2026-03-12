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
        explanation: "This is HTML (HyperText Markup Language). It structures web pages using tags."
    },
    {
        code: `console.log('Hello, World!');`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Java"],
        correct: 1,
        explanation: "This is JavaScript. console.log() outputs text to the console."
    },
    {
        code: `print('Hello, World!')`,
        question: "What programming language is this code written in?",
        options: ["C#", "Python", "JavaScript"],
        correct: 1,
        explanation: "This is Python. print() outputs text to the console."
    },
    {
        code: `def greet(name):
    return "Hello, " + name`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "Python", "Java"],
        correct: 1,
        explanation: "This is Python. Uses 'def' keyword and indentation for functions."
    },
    {
        code: `function greet(name) {
    return "Hello, " + name;
}`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Java"],
        correct: 1,
        explanation: "This is JavaScript. Uses 'function' keyword and braces for code blocks."
    },
    {
        code: `<div class="container">
    <p>This is a paragraph</p>
</div>`,
        question: "What programming language is this code written in?",
        options: ["CSS", "Python", "HTML"],
        correct: 2,
        explanation: "This is HTML. Uses tags like <div> and <p> for structure."
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
    const codeDisplay = document.getElementById('code-display');
    if (codeDisplay) {
        codeDisplay.textContent = question.code;
    }
    
    // Update question
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = question.question;
    }
    
    // Create option buttons
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.onclick = () => selectOption(index);
            optionsContainer.appendChild(button);
        });
    }
    
    // Reset state
    const feedbackSection = document.getElementById('feedback-section');
    if (feedbackSection) {
        feedbackSection.style.display = 'none';
    }
    
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.style.display = 'block';
    
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.style.display = 'none';
    
    answered = false;
    selectedOptionIndex = null;
}

// ===== SELECT OPTION =====
function selectOption(index) {
    if (answered) return;
    selectedOptionIndex = index;
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
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
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedOptionIndex === question.correct) {
        buttons[selectedOptionIndex].classList.add('correct');
        totalCorrect++;
        feedbackText.innerHTML = `<strong>✓ Correct!</strong><br>${question.explanation}`;
        feedbackSection.className = 'feedback correct';
    } else {
        buttons[selectedOptionIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        feedbackText.innerHTML = `<strong>✗ Incorrect</strong><br>Correct: ${question.options[question.correct]}<br><br>${question.explanation}`;
        feedbackSection.className = 'feedback incorrect';
    }
    
    feedbackSection.style.display = 'block';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
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
            <p>Score: ${totalCorrect}/${quizData.length} (${percentage}%)</p>
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
    
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = `
        <section class="code-section">
            <h2>Code Snippet:</h2>
            <pre><code id="code-display"></code></pre>
        </section>
        <section class="question-section">
            <h3 id="question-text"></h3>
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
    
    loadQuestion();
}
