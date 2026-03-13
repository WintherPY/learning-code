// ===== COURSES DATABASE WITH DETAILED ERROR INFO =====
const coursesData = {
    // BEGINNER COURSES
    'beginner-general': {
        id: 'beginner-general',
        name: 'Beginner: General',
        category: 'Beginner',
        difficulty: 'Beginner',
        description: 'Start from scratch with basic programming concepts',
        questions: [
            {
                type: "identify",
                code: `<h1>Hello World</h1>`,
                question: "What does this code do?",
                options: ["Creates a large heading", "Creates a paragraph", "Creates a button"],
                correct: 0,
                explanation: "This creates a large heading on a webpage.",
                codeBehavior: "Displays: Hello World as a big title"
            },
            {
                type: "identify",
                code: `console.log("Hello");`,
                question: "What does this code do?",
                options: ["Prints text", "Creates a variable", "Makes a button"],
                correct: 0,
                explanation: "This prints text to the console.",
                codeBehavior: "Displays: Hello in the developer console"
            },
            {
                type: "identify",
                code: `const x = 5;`,
                question: "What is this code doing?",
                options: ["Creating a variable named x with value 5", "Creating a function", "Creating a list"],
                correct: 0,
                explanation: "This creates a variable that stores the number 5.",
                codeBehavior: "Stores the value 5 in a container called x"
            },
            {
                type: "identify",
                code: `body { background-color: blue; }`,
                question: "What does this code do?",
                options: ["Changes background to blue", "Changes text to blue", "Creates a button"],
                correct: 0,
                explanation: "This CSS rule changes the page background color to blue.",
                codeBehavior: "Makes the entire webpage background blue"
            },
            {
                type: "identify",
                code: `<button>Click Me</button>`,
                question: "What does this create?",
                options: ["A clickable button", "A text field", "A heading"],
                correct: 0,
                explanation: "This creates an interactive button on the webpage.",
                codeBehavior: "Shows a button labeled 'Click Me'"
            }
        ]
    },
    
    // NOVICE COURSES
    'novice-general': {
        id: 'novice-general',
        name: 'Novice: General',
        category: 'Novice',
        difficulty: 'Novice',
        description: 'Build on basics with variables, functions, and logic',
        questions: [
            {
                type: "behavior",
                code: `const message = "Hello";\nconsole.log(message);`,
                question: "What does this code output?",
                options: ["Hello", "message", "undefined"],
                correct: 0,
                explanation: "Variables store values. console.log prints that value.",
                codeBehavior: "Outputs: Hello"
            },
            {
                type: "error",
                code: `const x = 10\nconst y = 20\nconsole.log(x + y)`,
                question: "Find the error - Type what's missing",
                errorAnswer: "semicolon",
                errorInfo: {
                    errorType: "Missing Semicolons",
                    description: "All three lines are missing semicolons at the end of statements.",
                    errorLines: [
                        { line: 1, original: "const x = 10", corrected: "const x = 10;", position: "end of line" },
                        { line: 2, original: "const y = 20", corrected: "const y = 20;", position: "end of line" },
                        { line: 3, original: "console.log(x + y)", corrected: "console.log(x + y);", position: "end of line" }
                    ],
                    tip: "In JavaScript, statements should end with a semicolon (;)"
                },
                explanation: "All statements need semicolons.",
                codeBehavior: "Code will work but violates JavaScript best practices"
            },
            {
                type: "behavior",
                code: `if (5 > 3) { console.log("yes"); }`,
                question: "What does this output?",
                options: ["yes", "no", "error"],
                correct: 0,
                explanation: "5 is greater than 3, so the condition is true.",
                codeBehavior: "Outputs: yes"
            },
            {
                type: "identify",
                code: `function add(a, b) { return a + b; }`,
                question: "What does this function do?",
                options: ["Adds two numbers", "Creates a variable", "Prints text"],
                correct: 0,
                explanation: "This function takes two inputs and returns their sum.",
                codeBehavior: "When called with add(3,4), returns 7"
            },
            {
                type: "behavior",
                code: `const arr = [1, 2, 3];\nconsole.log(arr[0]);`,
                question: "What does this output?",
                options: ["1", "3", "undefined"],
                correct: 0,
                explanation: "Arrays are indexed starting at 0.",
                codeBehavior: "Outputs: 1"
            }
        ]
    },
    
    // EXPERT COURSES
    'expert-general': {
        id: 'expert-general',
        name: 'Expert: General',
        category: 'Expert',
        difficulty: 'Expert',
        description: 'Master advanced concepts and optimization',
        questions: [
            {
                type: "behavior",
                code: `const nums = [1,2,3,4,5];\nconst doubled = nums.map(n => n * 2);`,
                question: "What is doubled?",
                options: ["[2,4,6,8,10]", "[1,2,3,4,5]", "undefined"],
                correct: 0,
                explanation: "map() transforms each element.",
                codeBehavior: "doubled = [2,4,6,8,10]"
            },
            {
                type: "error",
                code: `function test {\n    return "value";\n}`,
                question: "Find the error - Type what's missing",
                errorAnswer: "parentheses",
                errorInfo: {
                    errorType: "Missing Parentheses",
                    description: "Function declaration requires parentheses after the function name.",
                    errorLines: [
                        { line: 1, original: "function test {", corrected: "function test() {", position: "after 'test'" }
                    ],
                    tip: "All functions need parentheses: function name() { ... }"
                },
                explanation: "Functions require parentheses: function name()",
                codeBehavior: "Syntax error - code won't run"
            },
            {
                type: "behavior",
                code: `const obj = { name: "John", age: 30 };\nconsole.log(obj.name);`,
                question: "What does this output?",
                options: ["John", "30", "undefined"],
                correct: 0,
                explanation: "Objects store key-value pairs accessed with dot notation.",
                codeBehavior: "Outputs: John"
            },
            {
                type: "identify",
                code: `const result = async () => {\n    const data = await fetch(url);\n    return data;\n};`,
                question: "What is this pattern?",
                options: ["Async/await pattern", "Loop", "Class"],
                correct: 0,
                explanation: "Async/await handles asynchronous operations.",
                codeBehavior: "Fetches data asynchronously"
            },
            {
                type: "behavior",
                code: `const users = [{id:1},{id:2}];\nconst ids = users.map(u => u.id);`,
                question: "What is ids?",
                options: ["[1, 2]", "[[1],[2]]", "undefined"],
                correct: 0,
                explanation: "map() extracts properties from object arrays.",
                codeBehavior: "ids = [1, 2]"
            }
        ]
    },

    // HTML COURSE
    'html-course': {
        id: 'html-course',
        name: 'HTML',
        category: 'Language',
        difficulty: 'Mixed',
        description: 'Master HTML markup and semantic elements',
        questions: [
            {
                type: "identify",
                code: `<!DOCTYPE html>\n<html>\n<head><title>Page</title></head>\n<body><h1>Hello</h1></body>\n</html>`,
                question: "What does DOCTYPE do?",
                options: ["Declares HTML version", "Creates heading", "Styles page"],
                correct: 0,
                explanation: "DOCTYPE tells browser it's HTML5.",
                codeBehavior: "Ensures proper rendering"
            },
            {
                type: "behavior",
                code: `<form>\n    <input type="text" placeholder="Name">\n    <button type="submit">Send</button>\n</form>`,
                question: "What does this create?",
                options: ["A form with input and button", "Just a button", "Just an input"],
                correct: 0,
                explanation: "Forms collect user input.",
                codeBehavior: "Creates interactive form"
            },
            {
                type: "error",
                code: `<div class=container>\n    <h1>Title</h1>\n</div>`,
                question: "Find the error - Type what's wrong",
                errorAnswer: "quotes",
                errorInfo: {
                    errorType: "Missing Quotes",
                    description: "HTML attribute values must be enclosed in quotes.",
                    errorLines: [
                        { line: 1, original: '<div class=container>', corrected: '<div class="container">', position: "around 'container'" }
                    ],
                    tip: "Always wrap attribute values in quotes: class=\"value\""
                },
                explanation: "Attribute values must be in quotes.",
                codeBehavior: "class=container should be class=\"container\""
            },
            {
                type: "identify",
                code: `<img src="photo.jpg" alt="Description">`,
                question: "What is the alt attribute for?",
                options: ["Describes image if not loaded", "Resizes image", "Adds border"],
                correct: 0,
                explanation: "alt provides alternative text for accessibility.",
                codeBehavior: "Shows text if image fails to load"
            },
            {
                type: "identify",
                code: `<section><article><h2>News</h2></article></section>`,
                question: "What is this semantic structure?",
                options: ["Proper semantic HTML", "Invalid nesting", "Style tags"],
                correct: 0,
                explanation: "Semantic tags improve structure and SEO.",
                codeBehavior: "Good practice for organization"
            }
        ]
    },

    // JAVASCRIPT COURSE
    'javascript-course': {
        id: 'javascript-course',
        name: 'JavaScript',
        category: 'Language',
        difficulty: 'Mixed',
        description: 'Learn JavaScript ES6+ and advanced concepts',
        questions: [
            {
                type: "behavior",
                code: `const x = "5";\nconsole.log(typeof x);`,
                question: "What does this output?",
                options: ["string", "number", "5"],
                correct: 0,
                explanation: "typeof checks variable type.",
                codeBehavior: "Outputs: string"
            },
            {
                type: "error",
                code: `const arr = [1,2,3]\narr.push(4)\nconsole.log(arr)`,
                question: "Find the error - Type what's missing",
                errorAnswer: "semicolon",
                errorInfo: {
                    errorType: "Missing Semicolons",
                    description: "All three statements are missing semicolons.",
                    errorLines: [
                        { line: 1, original: "const arr = [1,2,3]", corrected: "const arr = [1,2,3];", position: "end of line" },
                        { line: 2, original: "arr.push(4)", corrected: "arr.push(4);", position: "end of line" },
                        { line: 3, original: "console.log(arr)", corrected: "console.log(arr);", position: "end of line" }
                    ],
                    tip: "Missing semicolons violate JavaScript best practices"
                },
                explanation: "Missing semicolons.",
                codeBehavior: "Code still runs due to automatic insertion"
            },
            {
                type: "identify",
                code: `const add = (a, b) => a + b;`,
                question: "What is this?",
                options: ["Arrow function", "Regular function", "Class"],
                correct: 0,
                explanation: "Arrow functions are concise syntax for functions.",
                codeBehavior: "Can be called as add(3,4) returns 7"
            },
            {
                type: "behavior",
                code: `const {name} = {name: "John", age: 30};\nconsole.log(name);`,
                question: "What does this output?",
                options: ["John", "30", "undefined"],
                correct: 0,
                explanation: "Destructuring extracts values from objects.",
                codeBehavior: "Outputs: John"
            },
            {
                type: "identify",
                code: `class User {\n    constructor(name) { this.name = name; }\n}`,
                question: "What is this?",
                options: ["Class definition", "Object", "Function"],
                correct: 0,
                explanation: "Classes are blueprints for objects.",
                codeBehavior: "Creates reusable object templates"
            }
        ]
    },

    // CSS COURSE
    'css-course': {
        id: 'css-course',
        name: 'CSS',
        category: 'Language',
        difficulty: 'Mixed',
        description: 'Master CSS styling and layout techniques',
        questions: [
            {
                type: "identify",
                code: `#header { color: red; }`,
                question: "What does # mean?",
                options: ["ID selector", "Class selector", "Tag selector"],
                correct: 0,
                explanation: "# selects elements by ID.",
                codeBehavior: "Targets element with id=\"header\""
            },
            {
                type: "behavior",
                code: `.box { \n    display: flex;\n    justify-content: center;\n}`,
                question: "What does this do?",
                options: ["Centers content horizontally", "Makes box red", "Hides box"],
                correct: 0,
                explanation: "Flexbox centers items.",
                codeBehavior: "Centers child elements"
            },
            {
                type: "identify",
                code: `button:hover { background: blue; }`,
                question: "What is :hover?",
                options: ["Pseudo-class for mouse over", "Class name", "ID selector"],
                correct: 0,
                explanation: "Pseudo-classes target element states.",
                codeBehavior: "Changes background when hovering"
            },
            {
                type: "error",
                code: `body color: red;`,
                question: "Find the error - Type what's missing",
                errorAnswer: "braces",
                errorInfo: {
                    errorType: "Missing Braces",
                    description: "CSS rules require curly braces to enclose the property definitions.",
                    errorLines: [
                        { line: 1, original: "body color: red;", corrected: "body { color: red; }", position: "needs { } around properties" }
                    ],
                    tip: "CSS syntax: selector { property: value; }"
                },
                explanation: "CSS needs { } for rules.",
                codeBehavior: "Should be body { color: red; }"
            },
            {
                type: "identify",
                code: `div { grid-template-columns: 1fr 1fr 1fr; }`,
                question: "What layout is this?",
                options: ["CSS Grid with 3 equal columns", "Flexbox", "Float layout"],
                correct: 0,
                explanation: "Grid creates responsive layouts.",
                codeBehavior: "Creates 3-column layout"
            }
        ]
    }
};

// ===== QUIZ STATE =====
let leaderboard = [];
let currentPlayerName = '';
let currentCourseId = '';
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let currentSessionScore = 0;
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
    const stored = localStorage.getItem('learning-code-leaderboard');
    leaderboard = stored ? JSON.parse(stored) : [];
}

function saveLeaderboard() {
    localStorage.setItem('learning-code-leaderboard', JSON.stringify(leaderboard));
}

function addOrUpdateLeaderboard(name, scoreToAdd) {
    let playerEntry = leaderboard.find(entry => entry.name.toLowerCase() === name.toLowerCase());
    
    if (playerEntry) {
        playerEntry.score += scoreToAdd;
        playerEntry.attempts = (playerEntry.attempts || 0) + 1;
        playerEntry.lastUpdate = new Date().toLocaleDateString();
    } else {
        leaderboard.push({
            name: name,
            score: scoreToAdd,
            attempts: 1,
            lastUpdate: new Date().toLocaleDateString()
        });
    }
    
    saveLeaderboard();
    updateSidebarCourses();
}

function getTop10Leaderboard() {
    return leaderboard
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
}

function renderLeaderboard() {
    const top10 = getTop10Leaderboard();
    if (top10.length === 0) {
        return '<div class="empty-leaderboard">No scores yet. Be the first!</div>';
    }
    
    return top10.map((entry, index) => `
        <div class="leaderboard-item">
            <span class="leaderboard-rank">#${index + 1}</span>
            <span class="leaderboard-name">${escapeHtml(entry.name)}</span>
            <span class="leaderboard-score">${entry.score} pts</span>
        </div>
    `).join('');
}

// ===== SIDEBAR NAVIGATION =====
function updateSidebarCourses() {
    const sidebarNav = document.getElementById('sidebar-nav');
    if (!sidebarNav) return;
    
    const courses = Object.values(coursesData);
    
    sidebarNav.innerHTML = courses.map(course => {
        const isActive = currentCourseId === course.id ? 'active' : '';
        return `
            <div class="nav-item ${isActive}" onclick="selectCourse('${course.id}')">
                <div class="nav-category">${course.category}</div>
                <div class="nav-name">${escapeHtml(course.name)}</div>
            </div>
        `;
    }).join('');
}

function selectCourse(courseId) {
    if (quizInProgress) return;
    currentCourseId = courseId;
    updateSidebarCourses();
    showCourseSelection();
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
            
            <button class="btn-start" onclick="proceedToCourses()">Continue</button>
            
            <div class="leaderboard-section">
                <h3>🏆 Top 10 Players</h3>
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
            if (e.key === 'Enter') proceedToCourses();
        });
    }
}

function proceedToCourses() {
    const nameInput = document.getElementById('player-name');
    const name = nameInput.value.trim();
    
    if (!name || name.length < 2) {
        alert('Please enter a valid name (at least 2 characters)');
        return;
    }
    
    currentPlayerName = name;
    updateUserInfo();
    updateSidebarCourses();
    showCourseSelection();
}

// ===== UPDATE USER INFO =====
function updateUserInfo() {
    const avatar = document.getElementById('user-avatar');
    const username = document.getElementById('current-username');
    const userLevel = document.querySelector('.user-level');
    
    if (avatar) avatar.textContent = currentPlayerName.charAt(0).toUpperCase();
    if (username) username.textContent = currentPlayerName;
    if (userLevel) userLevel.textContent = currentCourseId ? 'In Course' : 'Select Course';
}

// ===== SHOW COURSE SELECTION =====
function showCourseSelection() {
    const contentArea = document.getElementById('content-area');
    
    if (!currentCourseId) {
        // Show all courses
        const courses = Object.values(coursesData);
        contentArea.innerHTML = `
            <div class="course-selection-screen">
                <h2>📚 Select Your Course</h2>
                <div class="courses-grid">
                    ${courses.map(course => `
                        <div class="course-card" onclick="startCourse('${course.id}')">
                            <span class="course-badge ${course.difficulty.toLowerCase()}">${course.difficulty}</span>
                            <h3 class="course-title">${escapeHtml(course.name)}</h3>
                            <p class="course-description">${escapeHtml(course.description)}</p>
                            <div class="course-info">
                                <div class="info-item">📝 ${course.questions.length} questions</div>
                            </div>
                            <button class="btn-start-course">Start Course</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        // Show selected course
        const course = coursesData[currentCourseId];
        contentArea.innerHTML = `
            <div class="course-selection-screen">
                <h2>📚 ${escapeHtml(course.name)}</h2>
                <div class="courses-grid">
                    <div class="course-card">
                        <span class="course-badge ${course.difficulty.toLowerCase()}">${course.difficulty}</span>
                        <h3 class="course-title">${escapeHtml(course.name)}</h3>
                        <p class="course-description">${escapeHtml(course.description)}</p>
                        <div class="course-info">
                            <div class="info-item">📝 ${course.questions.length} questions</div>
                        </div>
                        <button class="btn-start-course" onclick="startCourse('${course.id}')">Start Quiz</button>
                        <button class="btn-start-course" style="margin-top: 10px; background: #999;" onclick="backToCourseSelection()">← Back</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    document.getElementById('breadcrumb-course').textContent = currentCourseId ? coursesData[currentCourseId].name : 'Courses';
    document.getElementById('lesson-title').textContent = 'Select';
}

function backToCourseSelection() {
    currentCourseId = '';
    updateUserInfo();
    updateSidebarCourses();
    showCourseSelection();
}

// ===== START COURSE =====
function startCourse(courseId) {
    currentCourseId = courseId;
    const course = coursesData[courseId];
    shuffledQuestions = [...course.questions].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    currentSessionScore = 0;
    quizInProgress = true;
    answered = false;
    
    document.getElementById('breadcrumb-course').textContent = course.name;
    updateUserInfo();
    updateSidebarCourses();
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
                        <span>Try the code here</span>
                    </div>
                    <textarea id="code-editor" class="code-editor" placeholder="Write your code here..."></textarea>
                    <button class="btn-submit" onclick="runCode()">▶️ Run Code</button>
                    <div id="code-output" class="code-output" style="display: none;">
                        <div id="output-content" class="output-content"></div>
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
                    <div class="editor-status">
                        <span class="status-dot"></span>
                        <span>Try the code here</span>
                    </div>
                    <textarea id="code-editor" class="code-editor" placeholder="Write your code here..."></textarea>
                    <button class="btn-submit" onclick="runCode()">▶️ Run Code</button>
                    <div id="code-output" class="code-output" style="display: none;">
                        <div id="output-content" class="output-content"></div>
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
        currentSessionScore++;
        document.getElementById('total-score').textContent = currentSessionScore;
        
        feedbackDiv.innerHTML = `
            <div class="feedback-box correct">
                <strong>✓ Correct!</strong>
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
                <div class="feedback-details">Correct answer: <strong>${escapeHtml(question.options[question.correct])}</strong></div>
            </div>
        `;
        
        feedbackDiv.style.display = 'block';
        submitBtn.disabled = true;
        
        // UPDATE LEADERBOARD EVEN ON FAILURE
        setTimeout(() => {
            addOrUpdateLeaderboard(currentPlayerName, currentSessionScore);
            alert('Quiz restarting. Try again!');
            quizInProgress = false;
            currentCourseId = '';
            showCourseSelection();
        }, 2000);
    }
}

// ===== SUBMIT ERROR ANSWER - WITH DETAILED FEEDBACK =====
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
        currentSessionScore++;
        document.getElementById('total-score').textContent = currentSessionScore;
        
        // Build detailed error feedback with location information
        let detailedFeedback = `
            <div class="feedback-box correct">
                <strong>✓ Correct! You found the error!</strong>
                <div class="feedback-details">
                    <strong style="color: inherit; display: block; margin-top: 12px;">Error Type:</strong>
                    ${escapeHtml(question.errorInfo.errorType)}
                    
                    <strong style="color: inherit; display: block; margin-top: 12px;">Problem:</strong>
                    ${escapeHtml(question.errorInfo.description)}
        `;
        
        // Show error locations
        if (question.errorInfo.errorLines && question.errorInfo.errorLines.length > 0) {
            detailedFeedback += '<strong style="color: inherit; display: block; margin-top: 12px;">Error Location(s):</strong>';
            
            question.errorInfo.errorLines.forEach((errorLine, idx) => {
                detailedFeedback += `
                    <div style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.1); border-radius: 6px; font-family: 'Fira Code', monospace; font-size: 0.9em;">
                        <div style="color: #ef4444; margin-bottom: 5px;"><strong>Line ${errorLine.line} ❌</strong></div>
                        <div style="margin-bottom: 8px;">${escapeHtml(errorLine.original)}</div>
                        <div style="text-align: center; color: #666;">↓ Position: ${escapeHtml(errorLine.position)}</div>
                        <div style="color: #10b981; margin-top: 8px;"><strong>✓ Corrected:</strong></div>
                        <div>${escapeHtml(errorLine.corrected)}</div>
                    </div>
                `;
            });
        }
        
        // Add tip
        detailedFeedback += `
                    <strong style="color: inherit; display: block; margin-top: 12px;">💡 Tip:</strong>
                    ${escapeHtml(question.errorInfo.tip)}
                    
                    <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.1);">
                        <strong style="color: inherit;">Explanation:</strong>
                        <div>${escapeHtml(question.explanation)}</div>
                    </div>
                </div>
            </div>
        `;
        
        feedbackDiv.innerHTML = detailedFeedback;
        feedbackDiv.style.display = 'block';
        
        errorInput.disabled = true;
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    } else {
        // Show incorrect feedback with hint about correct answer
        let detailedFeedback = `
            <div class="feedback-box incorrect">
                <strong>✗ Not quite right</strong>
                <div class="feedback-details">
                    <strong style="color: inherit; display: block; margin-top: 12px;">Hint:</strong>
                    Look for: <strong>${escapeHtml(question.errorAnswer)}</strong>
                    
                    <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.2);">
                        <strong style="color: inherit;">Error Info:</strong>
                        <div style="margin-top: 8px;">${escapeHtml(question.errorInfo.description)}</div>
                    </div>
                </div>
            </div>
        `;
        
        feedbackDiv.innerHTML = detailedFeedback;
        feedbackDiv.style.display = 'block';
    }
}

// ===== NEXT QUESTION =====
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// ===== UPDATE PROGRESS =====
function updateProgress() {
    const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) progressFill.style.width = progress + '%';
    if (progressText) progressText.textContent = `${currentQuestionIndex}/${shuffledQuestions.length}`;
}

// ===== SHOW COMPLETION SCREEN =====
function showCompletion() {
    addOrUpdateLeaderboard(currentPlayerName, currentSessionScore);
    
    const contentArea = document.getElementById('content-area');
    const percentage = Math.round((currentSessionScore / shuffledQuestions.length) * 100);
    let badge = '🎓';
    let message = 'Great effort!';
    
    if (percentage === 100) {
        badge = '🏆';
        message = 'Perfect Score! You are a master!';
    } else if (percentage >= 80) {
        badge = '⭐';
        message = 'Excellent work!';
    } else if (percentage >= 60) {
        badge = '👍';
        message = 'Good job!';
    }
    
    document.getElementById('lesson-title').textContent = 'Completed';
    
    contentArea.innerHTML = `
        <div class="completion-screen">
            <h2>Quiz Complete!</h2>
            <div class="completion-badge">${badge}</div>
            <div class="completion-score">Score: ${currentSessionScore}/${shuffledQuestions.length}</div>
            <div class="completion-score" style="font-size: 1.2em;">${percentage}%</div>
            <p class="completion-message">${message}</p>
            <button class="btn-restart" onclick="backToCourseSelection()">← Back to Courses</button>
            <button class="btn-restart" onclick="location.reload()">🔄 Restart</button>
        </div>
    `;
    
    quizInProgress = false;
    currentCourseId = '';
}

// ===== NEW CODE EDITOR FUNCTIONS =====
function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputDiv = document.getElementById('code-output');
    const outputContent = document.getElementById('output-content');
    
    if (!code.trim()) {
        outputContent.innerHTML = '<span style="color: #ff6b6b;">⚠️ Please write some code first!</span>';
        outputDiv.style.display = 'block';
        return;
    }

    try {
        // Check if it's CSS code (contains CSS properties)
        if ((code.includes('{') && code.includes('}')) || code.includes(':')) {
            // Check if it looks like CSS (has selectors and properties)
            if (!code.includes('function') && !code.includes('const') && !code.includes('let') && !code.includes('var')) {
                // It's CSS - wrap it in HTML and render in iframe
                outputDiv.style.display = 'block';
                
                let htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            ${code}
                        </style>
                    </head>
                    <body>
                        <h1>CSS Preview</h1>
                        <p>This is a paragraph styled with your CSS.</p>
                        <div style="margin: 20px 0;">Sample content area</div>
                        <button>Sample Button</button>
                    </body>
                    </html>
                `;
                
                let iframe = document.getElementById('code-iframe');
                if (!iframe) {
                    iframe = document.createElement('iframe');
                    iframe.id = 'code-iframe';
                    iframe.style.width = '100%';
                    iframe.style.height = '200px';
                    iframe.style.border = '1px solid #2a2d3a';
                    iframe.style.borderRadius = '6px';
                    iframe.style.background = '#ffffff';
                    outputContent.innerHTML = '';
                    outputContent.appendChild(iframe);
                }
                
                iframe.contentDocument.open();
                iframe.contentDocument.write(htmlContent);
                iframe.contentDocument.close();
                return;
            }
        }
        
        // Check if it's HTML code (contains HTML tags)
        if (code.includes('<') && code.includes('>')) {
            // It's HTML - render it in an iframe
            outputDiv.style.display = 'block';
            
            // Create a complete HTML document if needed
            let htmlContent = code;
            if (!code.includes('<!DOCTYPE') && !code.includes('<html')) {
                htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: Arial, sans-serif; padding: 10px; }
                        </style>
                    </head>
                    <body>
                        ${code}
                    </body>
                    </html>
                `;
            }
            
            // Create or update the iframe
            let iframe = document.getElementById('code-iframe');
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.id = 'code-iframe';
                iframe.style.width = '100%';
                iframe.style.height = '200px';
                iframe.style.border = '1px solid #2a2d3a';
                iframe.style.borderRadius = '6px';
                iframe.style.background = '#ffffff';
                outputContent.innerHTML = '';
                outputContent.appendChild(iframe);
            }
            
            // Write the HTML to the iframe
            iframe.contentDocument.open();
            iframe.contentDocument.write(htmlContent);
            iframe.contentDocument.close();
            
        } else {
            // It's JavaScript - execute it normally
            outputDiv.style.display = 'block';
            
            let capturedOutput = '';
            const originalLog = console.log;
            const originalError = console.error;
            const originalWarn = console.warn;

            // Capture console output
            console.log = function(...args) {
                capturedOutput += args.map(arg => {
                    if (typeof arg === 'object') return JSON.stringify(arg, null, 2);
                    return String(arg);
                }).join(' ') + '\n';
            };

            console.error = function(...args) {
                capturedOutput += '❌ Error: ' + args.join(' ') + '\n';
            };

            console.warn = function(...args) {
                capturedOutput += '⚠️ Warning: ' + args.join(' ') + '\n';
            };

            // Run the JavaScript code
            new Function(code)();

            // Restore console
            console.log = originalLog;
            console.error = originalError;
            console.warn = originalWarn;

            // Show the output
            if (capturedOutput) {
                outputContent.innerHTML = '<span style="color: #c3e88d;">' + capturedOutput.replace(/\n/g, '<br>') + '</span>';
            } else {
                outputContent.innerHTML = '<span style="color: #00d680;">✓ Code executed successfully (no console output)</span>';
            }
        }

    } catch (error) {
        console.log = originalLog;
        console.error = originalError;
        console.warn = originalWarn;
        
        outputDiv.style.display = 'block';
        outputContent.innerHTML = `
            <span style="color: #ff6b6b;">
                <strong>❌ Error:</strong><br/>
                ${error.name}: ${error.message}
            </span>
        `;
    }
}

// ===== HELPER FUNCTION =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
// ===== EXIT COURSE FUNCTIONALITY =====

// Get the exit button element
const exitBtn = document.getElementById('exit-course-btn');

// Function to show the exit button (called when course starts)
function showExitButton() {
    if (exitBtn) {
        exitBtn.style.display = 'block';
    }
}

// Function to hide the exit button (called when returning to menu)
function hideExitButton() {
    if (exitBtn) {
        exitBtn.style.display = 'none';
    }
}

// Function to create and show the confirmation dialog
function showExitConfirmation() {
    // Create a modal/overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    // Create the dialog box
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        background: white;
        border-radius: 12px;
        padding: 30px;
        max-width: 400px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        text-align: center;
    `;

    // Add content to the dialog
    dialog.innerHTML = `
        <h2 style="color: #1a1a1a; margin-bottom: 15px; font-size: 1.5em;">Exit Course?</h2>
        <p style="color: #666; margin-bottom: 20px; font-size: 1em; line-height: 1.5;">
            Are you sure you want to exit? Your progress will <strong>NOT</strong> be saved.
        </p>
        <div style="display: flex; gap: 12px;">
            <button id="cancel-exit-btn" style="
                flex: 1;
                padding: 12px 20px;
                background: #666;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 0.95em;
                transition: all 0.3s ease;
                font-family: 'Inter', sans-serif;
            ">
                Cancel
            </button>
            <button id="confirm-exit-btn" style="
                flex: 1;
                padding: 12px 20px;
                background: #ef4444;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 0.95em;
                transition: all 0.3s ease;
                font-family: 'Inter', sans-serif;
            ">
                Exit Course
            </button>
        </div>
    `;

    // Add the dialog to the overlay
    overlay.appendChild(dialog);

    // Add the overlay to the page
    document.body.appendChild(overlay);

    // Handle Cancel button
    document.getElementById('cancel-exit-btn').addEventListener('click', () => {
        overlay.remove();
    });

    // Handle Confirm Exit button
    document.getElementById('confirm-exit-btn').addEventListener('click', () => {
        overlay.remove();
        exitCourse();
    });

    // Add hover effects to buttons
    document.getElementById('cancel-exit-btn').addEventListener('mouseover', (e) => {
        e.target.style.background = '#555';
    });
    document.getElementById('cancel-exit-btn').addEventListener('mouseout', (e) => {
        e.target.style.background = '#666';
    });

    document.getElementById('confirm-exit-btn').addEventListener('mouseover', (e) => {
        e.target.style.background = '#dc2626';
    });
    document.getElementById('confirm-exit-btn').addEventListener('mouseout', (e) => {
        e.target.style.background = '#ef4444';
    });
}

// Function to actually exit the course
function exitCourse() {
    // Reset course data (don't save score)
    currentCourseId = null;
    currentQuestionIndex = 0;
    totalScore = 0;

    // Hide the exit button
    hideExitButton();

    // Show the course selection screen
    displayCourseSelection();
}

// Add click event listener to the exit button
if (exitBtn) {
    exitBtn.addEventListener('click', showExitConfirmation);
}
