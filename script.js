// ===== QUIZ DATA - Programming Language Identification =====

const quizData = [
    {
        code: `console.log("Hello, World!");`,
        question: "What programming language is this?",
        options: ["Python", "JavaScript", "Java"],
        correct: 1,
        explanation: "This is JavaScript. The console.log() function is used for output in JavaScript."
    },
    {
        code: `print("Hello, World!")`,
        question: "What programming language is this?",
        options: ["JavaScript", "Python", "C++"],
        correct: 1,
        explanation: "This is Python. Python uses the print() function for output."
    },
    {
        code: `System.out.println("Hello, World!");`,
        question: "What programming language is this?",
        options: ["C#", "Python", "Java"],
        correct: 2,
        explanation: "This is Java. System.out.println() is Java's print statement."
    },
    {
        code: `echo "Hello, World!";`,
        question: "What programming language is this?",
        options: ["JavaScript", "PHP", "Ruby"],
        correct: 1,
        explanation: "This is PHP. The echo statement outputs text in PHP."
    },
    {
        code: `puts "Hello, World!"`,
        question: "What programming language is this?",
        options: ["Python", "Ruby", "Java"],
        correct: 1,
        explanation: "This is Ruby. The puts method outputs text in Ruby."
    },
    {
        code: `#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
        question: "What programming language is this?",
        options: ["Java", "C++", "C#"],
        correct: 1,
        explanation: "This is C++. It uses #include for libraries and std::cout for output."
    },
    {
        code: `package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}`,
        question: "What programming language is this?",
        options: ["Rust", "Go", "Kotlin"],
        correct: 1,
        explanation: "This is Go. It uses package main, import, and fmt.Println for output."
    },
    {
        code: `def hello():
    print("Hello, World!")
hello()`,
        question: "What programming language is this?",
        options: ["JavaScript", "Python", "C#"],
        correct: 1,
        explanation: "This is Python. Functions are defined with def and use indentation for blocks."
    },
    {
        code: `fn main() {
    println!("Hello, World!");
}`,
        question: "What programming language is this?",
        options: ["Go", "Rust", "C++"],
        correct: 1,
        explanation: "This is Rust. It uses fn for functions and println! macro for output."
    },
    {
        code: `function hello() {
    console.log("Hello, World!");
}
hello();`,
        question: "What programming language is this?",
        options: ["Python", "Java", "JavaScript"],
        correct: 2,
        explanation: "This is JavaScript. It uses function keyword and console.log() for output."
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
    setupEventListeners();
});

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && answered) {
            nextQuestion();
        }
    });
}

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
    
    // Hide feedback
    document.getElementById('feedback-section').style.display = 'none';
    
    answered = false;
    selectedOptionIndex = null;
    
    // Update progress
    updateProgress();
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
    } else {
        // Incorrect answer
        buttons[selectedOptionIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        
        feedbackText.innerHTML = `<strong>✗ Incorrect</strong><br>The correct answer is: <strong>${question.options[question.correct]}</strong><br><br>${question.explanation}`;
        feedbackSection.className = 'feedback incorrect';
    }
    
    feedbackSection.style.display = 'block';
    updateProgress();
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
                ${percentage === 100 ? '<p>Perfect score! You are a programming language expert! ���</p>' : 
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
            <h3 id="question-text">What language is this code written in?</h3>
            
            <div class="options-container" id="options-container">
                <!-- Options will be generated here -->
            </div>
        </section>

        <div class="feedback" id="feedback-section" style="display: none;">
            <p id="feedback-text"></p>
        </div>

        <div class="action-buttons">
            <button class="submit-btn" onclick="submitAnswer()">Submit Answer</button>
            <button class="next-btn" id="next-btn" onclick="nextQuestion()" style="display: none;">Next Question →</button>
        </div>
    `;
    
    loadQuestion();
}

// ===== UPDATE PROGRESS =====
function updateProgress() {
    const progress = currentQuestionIndex + 1;
    const percentage = Math.round((progress / quizData.length) * 100);
    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('progress-text').textContent = `${progress}/${quizData.length}`;
}

// ===== SHOW NEXT BUTTON WHEN ANSWERED =====
document.addEventListener('DOMContentLoaded', function() {
    // Observer to show/hide next button
    const observer = new MutationObserver(() => {
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn && answered) {
            nextBtn.style.display = 'block';
        } else if (nextBtn && !answered) {
            nextBtn.style.display = 'none';
        }
    });
});
