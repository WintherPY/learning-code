// ===== COURSES DATABASE =====
const coursesDatabase = {
    'html-css': {
        id: 'html-css',
        title: 'HTML & CSS Basics',
        description: 'Learn the fundamentals of web structure and styling',
        difficulty: 'Beginner',
        duration: '2 hours',
        icon: '🌐',
        questions: [
            {
                type: "identify",
                code: `<h1>Hello World</h1>`,
                question: "What does this code do?",
                options: ["Creates a large heading", "Creates a paragraph", "Creates a button"],
                correct: 0,
                explanation: "This is HTML. The <h1> tag creates the largest heading on a webpage.",
                facts: "Headings help organize content. H1 is the most important!",
                codeBehavior: "This displays: Hello World as a big title on the page.",
                codeEditor: false,
                language: "html"
            },
            {
                type: "identify",
                code: `<p>This is a paragraph</p>`,
                question: "What does this code do?",
                options: ["Creates text/paragraph", "Creates a heading", "Creates a button"],
                correct: 0,
                explanation: "The <p> tag creates a paragraph - normal text content.",
                facts: "Paragraphs are used for regular text on websites.",
                codeBehavior: "This displays: This is a paragraph as normal readable text.",
                codeEditor: false,
                language: "html"
            },
            {
                type: "identify",
                code: `<button>Click me</button>`,
                question: "What does this code create?",
                options: ["A clickable button", "A text input", "A link"],
                correct: 0,
                explanation: "The <button> tag creates a button that users can click.",
                facts: "Buttons are interactive elements on websites!",
                codeBehavior: "This displays: Click me as a clickable button.",
                codeEditor: false,
                language: "html"
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
                language: "html"
            }
        ]
    },
    'javascript': {
        id: 'javascript',
        title: 'JavaScript Fundamentals',
        description: 'Master the basics of JavaScript programming',
        difficulty: 'Beginner',
        duration: '3 hours',
        icon: '⚡',
        questions: [
            {
                type: "identify",
                code: `console.log("Hello");`,
                question: "What does this code do?",
                options: ["Prints text to console", "Creates a variable", "Makes a button"],
                correct: 0,
                explanation: "console.log() prints/displays text to the browser console.",
                facts: "Programmers use console.log() to debug their code!",
                codeBehavior: "This prints: Hello to the console for programmers to see.",
                codeEditor: true,
                language: "javascript"
            },
            {
                type: "identify",
                code: `const x = 5;
console.log(x);`,
                question: "What does this code do?",
                options: ["Creates a container", "Stores the number 5 in a variable, then prints it", "Creates a button"],
                correct: 1,
                explanation: "const creates a variable. x holds the value 5. console.log prints it.",
                facts: "Variables are like labeled boxes!",
                codeBehavior: "This stores 5 in x, then prints: 5 to the console.",
                codeEditor: true,
                language: "javascript"
            },
            {
                type: "error-find",
                code: `const name = "John"
console.log(name)`,
                question: "Find the error - what's missing?",
                errorAnswer: "semicolon",
                explanation: "Both lines are missing semicolons (;) at the end.",
                facts: "Semicolons tell JavaScript: 'This statement is complete!'",
                codeBehavior: "Even though this might work, it's bad practice without semicolons.",
                codeEditor: true,
                language: "javascript"
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
                facts: "Conditional logic makes programs smart!",
                codeBehavior: "Since 5 > 3 is true, this prints: '5 is bigger'",
                codeEditor: true,
                language: "javascript"
            },
            {
                type: "identify",
                code: `const numbers = [1, 2, 3];
console.log(numbers[0]);`,
                question: "What does this code output?",
                options: ["[1, 2, 3]", "1", "3"],
                correct: 1,
                explanation: "Arrays store multiple values. numbers[0] gets the first element (1).",
                facts: "Arrays are counted starting from 0, not 1!",
                codeBehavior: "This prints: 1 (the first element of the array)",
                codeEditor: true,
                language: "javascript"
            }
        ]
    },
    'web-dev': {
        id: 'web-dev',
        title: 'Web Development Essentials',
        description: 'Combine HTML, CSS, and JavaScript to build websites',
        difficulty: 'Intermediate',
        duration: '4 hours',
        icon: '🚀',
        questions: [
            {
                type: "identify",
                code: `<form>
  <input type="text" placeholder="Enter name">
  <button type="submit">Submit</button>
</form>`,
                question: "What does this code create?",
                options: ["A form with an input field and submit button", "A paragraph", "A heading"],
                correct: 0,
                explanation: "Forms allow users to input data and submit it.",
                facts: "Forms are essential for user interaction on websites!",
                codeBehavior: "This creates a form where users can enter text and submit.",
                codeEditor: false,
                language: "html"
            },
            {
                type: "error-find",
                code: `function greet(name) {
    return "Hello, " + name
}`,
                question: "Find the error - what's missing?",
                errorAnswer: "semicolon",
                explanation: "Line 2 is missing a semicolon at the end of the return statement.",
                facts: "Every statement should end with a semicolon!",
                codeBehavior: "This function would still work in many environments, but it's not proper syntax.",
                codeEditor: true,
                language: "javascript"
            },
            {
                type: "identify",
                code: `const handleClick = () => {
  console.log("Button clicked!");
};`,
                question: "What is this code?",
                options: ["A class definition", "An arrow function", "An HTML element"],
                correct: 1,
                explanation: "Arrow functions are a modern way to write functions in JavaScript.",
                facts: "Arrow functions are concise and commonly used in modern web development!",
                codeBehavior: "This creates a function that logs a message when called.",
                codeEditor: true,
                language: "javascript"
            },
            {
                type: "identify",
                code: `<style>
  body {
    background-color: blue;
    color: white;
  }
</style>`,
                question: "What does this code do?",
                options: ["Styles the body element", "Creates a form", "Creates a button"],
                correct: 0,
                explanation: "<style> tags contain CSS rules that style HTML elements.",
                facts: "CSS makes websites look beautiful!",
                codeBehavior: "This makes the page background blue and text white.",
                codeEditor: false,
                language: "html"
            },
            {
                type: "error-find",
                code: `<div class=container>
  <h1>Title</h1>
</div>`,
                question: "Find the error - what's wrong?",
                errorAnswer: "quotes",
                explanation: "The class attribute value should be in quotes: class=\"container\"",
                facts: "HTML attributes must always have quoted values!",
                codeBehavior: "This would cause an HTML parsing error.",
                codeEditor: false,
                language: "html"
            }
        ]
    }
};

// ===== Q&A DATABASE =====
const qaDatabase = {
    'html-css': [
        {
            q: "What is HTML?",
            a: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of a website."
        },
        {
            q: "What is CSS?",
            a: "CSS (Cascading Style Sheets) is used to style HTML elements. It controls the layout, colors, fonts, and overall appearance of a website."
        },
        {
            q: "What's the difference between div and span?",
            a: "div is a block-level element that takes up the full width available, while span is an inline element that only takes up as much space as necessary."
        }
    ],
    'javascript': [
        {
            q: "What are variables in JavaScript?",
            a: "Variables are containers for storing data values. You can declare variables using const, let, or var, and assign values to them."
        },
        {
            q: "What's the difference between == and ===?",
            a: "== checks for value equality (with type coercion), while === checks for both value and type equality (strict comparison)."
        },
        {
            q: "What are arrow functions?",
            a: "Arrow functions (=>) are a concise syntax for writing functions in JavaScript. They are commonly used in modern web development."
        }
    ],
    'web-dev': [
        {
            q: "What is the DOM?",
            a: "The DOM (Document Object Model) is a programming interface for web documents. It represents the page so programs can change the document structure and content."
        },
        {
            q: "What is responsive design?",
            a: "Responsive design means a website looks good and functions properly on all devices (desktop, tablet, mobile) by using flexible layouts and media queries."
        },
        {
            q: "What is Git?",
            a: "Git is a version control system that allows developers to track changes in code, collaborate with others, and manage different versions of a project."
        }
    ]
};

// ===== TASKS DATABASE =====
const tasksDatabase = {
    'html-css': [
        {
            title: "Create a Simple Webpage",
            description: "Create an HTML page with a heading, paragraph, and button",
            difficulty: "easy",
            points: 50
        },
        {
            title: "Style a Form",
            description: "Create a form and style it using CSS to make it look professional",
            difficulty: "medium",
            points: 100
        },
        {
            title: "Build a Responsive Layout",
            description: "Create a 2-column layout that becomes 1-column on mobile devices",
            difficulty: "hard",
            points: 150
        }
    ],
    'javascript': [
        {
            title: "Calculator App",
            description: "Build a simple calculator that performs basic arithmetic",
            difficulty: "easy",
            points: 50
        },
        {
            title: "Todo List",
            description: "Create a todo list app where users can add and delete tasks",
            difficulty: "medium",
            points: 100
        },
        {
            title: "Weather App",
            description: "Build an app that fetches and displays weather data from an API",
            difficulty: "hard",
            points: 150
        }
    ],
    'web-dev': [
        {
            title: "Personal Portfolio",
            description: "Build your personal website showcasing your projects",
            difficulty: "medium",
            points: 100
        },
        {
            title: "E-commerce Product Page",
            description: "Create a product page with images, description, and add to cart button",
            difficulty: "hard",
            points: 150
        },
        {
            title: "Blog Platform",
            description: "Build a blog where users can create, read, and delete posts",
            difficulty: "hard",
            points: 200
        }
    ]
};

// ===== RESOURCES DATABASE =====
const resourcesDatabase = {
    'html-css': [
        {
            title: "MDN Web Docs - HTML",
            description: "Comprehensive HTML documentation and guides"
        },
        {
            title: "CSS Tricks",
            description: "Articles and tutorials about CSS techniques and best practices"
        },
        {
            title: "HTML5 Specification",
            description: "Official HTML5 standards and specifications"
        }
    ],
    'javascript': [
        {
            title: "JavaScript.info",
            description: "Complete JavaScript tutorial from basics to advanced"
        },
        {
            title: "MDN JavaScript Guide",
            description: "Official Mozilla guide to JavaScript"
        },
        {
            title: "Eloquent JavaScript",
            description: "Free online book about JavaScript programming"
        }
    ],
    'web-dev': [
        {
            title: "Web Development Roadmap",
            description: "A guide to becoming a full-stack web developer"
        },
        {
            title: "DEV Community",
            description: "A community of developers sharing articles and tips"
        },
        {
            title: "Codepen",
            description: "Showcase and explore HTML, CSS, and JavaScript creations"
        }
    ]
};

// ===== QUIZ STATE =====
let leaderboard = [];
let currentPlayerName = '';
let currentCourseId = '';
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let totalScore = 0;
let answered = false;
let selectedOptionIndex = null;
let quizInProgress = false;
let currentSection = 'course';

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadLeaderboard();
    setupNavigation();
    showCourseSelection();
});

// ===== NAVIGATION SETUP =====
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!quizInProgress) {
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                currentSection = item.dataset.section;
                showSection(currentSection);
            }
        });
    });
}

// ===== SHOW SECTION =====
function showSection(section) {
    const contentArea = document.getElementById('content-area');
    
    switch(section) {
        case 'course':
            showCourseSelection();
            break;
        case 'qa':
            showQASection();
            break;
        case 'tasks':
            showTasksSection();
            break;
        case 'resources':
            showResourcesSection();
            break;
    }
}

// ===== SHOW COURSE SELECTION =====
function showCourseSelection() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="course-selection-screen">
            <h2>📚 Choose Your Course</h2>
            <div class="courses-grid">
                ${Object.values(coursesDatabase).map(course => `
                    <div class="course-card" onclick="startCourse('${course.id}')">
                        <span class="course-badge">${course.difficulty}</span>
                        <h3 class="course-title">${course.icon} ${escapeHtml(course.title)}</h3>
                        <p class="course-description">${escapeHtml(course.description)}</p>
                        <div class="course-info">
                            <div class="info-item">⏱️ ${course.duration}</div>
                            <div class="info-item">📖 ${course.questions.length} lessons</div>
                        </div>
                        <button class="btn-start-course">Start Course</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ===== START COURSE =====
function startCourse(courseId) {
    currentCourseId = courseId;
    const course = coursesDatabase[courseId];
    shuffledQuestions = [...course.questions].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    totalScore = 0;
    quizInProgress = true;
    
    document.getElementById('breadcrumb-course').textContent = course.title;
    updateProgress();
    loadQuestion();
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
    
    document.getElementById('lesson-title').textContent = `Lesson ${lessonNumber}`;
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
                        <input type="text" id="error-input" placeholder="Type the error you found..." class="error-input"/>
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
        
        setTimeout(() => {
            alert('Quiz restarting. Answer carefully next time!');
            quizInProgress = false;
            showCourseSelection();
        }, 2000);
        return;
    }
    
    feedbackDiv.style.display = 'block';
    document.getElementById('btn-submit').style.display = 'none';
    document.getElementById('btn-next').style.display = 'block';
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
            showCourseSelection();
        }, 2000);
        return;
    }
    
    errorInput.disabled = true;
    document.querySelector('.btn-submit').style.display = 'none';
    document.getElementById('next-btn-error').style.display = 'block';
    document.getElementById('next-btn-error').onclick = nextQuestion;
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
    const course = coursesDatabase[currentCourseId];
    
    addToLeaderboard(currentPlayerName, totalScore, course.title);
    
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
            <p style="color: #666; margin-bottom: 10px;">${escapeHtml(course.title)}</p>
            
            <div class="completion-score">
                Your Score: ${totalScore}/${total} points
            </div>
            
            <p class="completion-message">${message}</p>
            
            <button class="btn-restart" onclick="backToCourses()">Back to Courses</button>
        </div>
    `;
    
    quizInProgress = false;
}

// ===== BACK TO COURSES =====
function backToCourses() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(i => i.classList.remove('active'));
    navItems[0].classList.add('active');
    currentSection = 'course';
    showCourseSelection();
}

// ===== SHOW Q&A SECTION =====
function showQASection() {
    const contentArea = document.getElementById('content-area');
    const qaDatas = qaDatabase[currentCourseId] || qaDatabase['html-css'];
    
    contentArea.innerHTML = `
        <div class="qa-section">
            <h2>❓ Questions & Answers</h2>
            <div class="qa-list">
                ${qaDatas.map((item, index) => `
                    <div class="qa-card">
                        <div class="qa-question" onclick="toggleQA(${index})">
                            <span>${escapeHtml(item.q)}</span>
                            <span class="qa-toggle" id="toggle-${index}">▼</span>
                        </div>
                        <div class="qa-answer" id="answer-${index}">
                            ${escapeHtml(item.a)}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ===== TOGGLE Q&A =====
function toggleQA(index) {
    const answer = document.getElementById(`answer-${index}`);
    const toggle = document.getElementById(`toggle-${index}`);
    answer.classList.toggle('show');
    toggle.classList.toggle('open');
}

// ===== SHOW TASKS SECTION =====
function showTasksSection() {
    const contentArea = document.getElementById('content-area');
    const tasks = tasksDatabase[currentCourseId] || tasksDatabase['html-css'];
    
    contentArea.innerHTML = `
        <div class="tasks-section">
            <h2>✅ Daily Tasks & Challenges</h2>
            <div class="tasks-list">
                ${tasks.map(task => `
                    <div class="task-card">
                        <span class="task-difficulty ${task.difficulty}">${task.difficulty.toUpperCase()}</span>
                        <h3 class="task-title">${escapeHtml(task.title)}</h3>
                        <p class="task-description">${escapeHtml(task.description)}</p>
                        <p class="task-points">+${task.points} points</p>
                        <button class="btn-task" onclick="startTask('${escapeHtml(task.title)}')">Start Task</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ===== START TASK =====
function startTask(taskTitle) {
    alert(`Starting task: ${taskTitle}\n\nThis would open the task in a code editor. Great job focusing on challenges!`);
}

// ===== SHOW RESOURCES SECTION =====
function showResourcesSection() {
    const contentArea = document.getElementById('content-area');
    const resources = resourcesDatabase[currentCourseId] || resourcesDatabase['html-css'];
    
    contentArea.innerHTML = `
        <div class="resources-section">
            <h2>📖 Learning Resources</h2>
            <div class="resources-grid">
                ${resources.map(resource => `
                    <div class="resource-card">
                        <h3 class="resource-title">${escapeHtml(resource.title)}</h3>
                        <p class="resource-description">${escapeHtml(resource.description)}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
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

// ===== UPDATE USER INFO =====
function updateUserInfo() {
    const avatar = document.getElementById('user-avatar');
    const username = document.getElementById('current-username');
    
    if (avatar) avatar.textContent = currentPlayerName.charAt(0).toUpperCase();
    if (username) username.textContent = currentPlayerName;
}

// ===== LEADERBOARD FUNCTIONS =====
function loadLeaderboard() {
    const stored = localStorage.getItem('codemaster-leaderboard');
    leaderboard = stored ? JSON.parse(stored) : [];
}

function saveLeaderboard() {
    localStorage.setItem('codemaster-leaderboard', JSON.stringify(leaderboard));
}

function addToLeaderboard(name, score, course) {
    leaderboard.push({
        name: name,
        score: score,
        course: course,
        date: new Date().toLocaleDateString()
    });
    saveLeaderboard();
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

// ===== INITIAL SETUP =====
function initializeApp() {
    // Show name entry or course selection
    if (!currentPlayerName) {
        showNameEntry();
    } else {
        showCourseSelection();
    }
}

function showNameEntry() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="name-entry-screen">
            <h2>Welcome to CodeMaster</h2>
            <p class="tagline">Master Programming with Professional Courses</p>
            
            <div class="input-group">
                <label for="player-name">Enter Your Name</label>
                <input type="text" id="player-name" placeholder="Your name..." maxlength="30" autocomplete="off" />
            </div>
            
            <button class="btn-start" onclick="startWithName()">Continue</button>
            
            <div class="leaderboard-section" style="margin-top: 40px; text-align: center;">
                <h3 style="margin-bottom: 20px;">🏆 Top Players</h3>
                <div class="leaderboard-list" style="background: #f0f9ff; padding: 20px; border-radius: 8px;">
                    ${renderTopPlayers()}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('player-name').focus();
    document.getElementById('player-name').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startWithName();
    });
}

function startWithName() {
    const nameInput = document.getElementById('player-name');
    const name = nameInput.value.trim();
    
    if (!name || name.length < 2) {
        alert('Please enter a valid name (at least 2 characters)');
        return;
    }
    
    currentPlayerName = name;
    updateUserInfo();
    showCourseSelection();
}

function renderTopPlayers() {
    const top5 = leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
    
    if (top5.length === 0) {
        return '<p style="color: #999; font-style: italic;">No scores yet. Start a course to be #1!</p>';
    }
    
    return top5.map((entry, index) => `
        <div class="leaderboard-item">
            <span class="leaderboard-rank">#${index + 1}</span>
            <span class="leaderboard-name">${escapeHtml(entry.name)}</span>
            <span class="leaderboard-score">${entry.score} pts</span>
        </div>
    `).join('');
}

// Start the app
setTimeout(initializeApp, 100);
