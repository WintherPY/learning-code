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
                code: `const message = "Hello";
console.log(message);`,
                question: "What does this code output?",
                options: ["Hello", "message", "undefined"],
                correct: 0,
                explanation: "Variables store values. console.log prints that value.",
                codeBehavior: "Outputs: Hello"
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
                code: `const arr = [1, 2, 3];
console.log(arr[0]);`,
                question: "What does this output?",
                options: ["1", "3", "undefined"],
                correct: 0,
                explanation: "Arrays are indexed starting at 0.",
                codeBehavior: "Outputs: 1"
            },
            {
                type: "behavior",
                code: `const x = "5";
console.log(typeof x);`,
                question: "What does this output?",
                options: ["string", "number", "5"],
                correct: 0,
                explanation: "typeof checks variable type. '5' in quotes is a string.",
                codeBehavior: "Outputs: string"
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
                code: `const nums = [1,2,3,4,5];
const doubled = nums.map(n => n * 2);
console.log(doubled);`,
                question: "What is doubled?",
                options: ["[2,4,6,8,10]", "[1,2,3,4,5]", "undefined"],
                correct: 0,
                explanation: "map() transforms each element by multiplying by 2.",
                codeBehavior: "doubled = [2,4,6,8,10]"
            },
            {
                type: "behavior",
                code: `const obj = { name: "John", age: 30 };
console.log(obj.name);`,
                question: "What does this output?",
                options: ["John", "30", "undefined"],
                correct: 0,
                explanation: "Objects store key-value pairs accessed with dot notation.",
                codeBehavior: "Outputs: John"
            },
            {
                type: "identify",
                code: `const result = async () => {
    const data = await fetch(url);
    return data;
};`,
                question: "What is this pattern?",
                options: ["Async/await pattern", "Loop", "Class"],
                correct: 0,
                explanation: "Async/await handles asynchronous operations.",
                codeBehavior: "Fetches data asynchronously"
            },
            {
                type: "behavior",
                code: `const users = [{id:1},{id:2}];
const ids = users.map(u => u.id);
console.log(ids);`,
                question: "What is ids?",
                options: ["[1, 2]", "[[1],[2]]", "undefined"],
                correct: 0,
                explanation: "map() extracts properties from object arrays.",
                codeBehavior: "ids = [1, 2]"
            },
            {
                type: "behavior",
                code: `const sum = [1,2,3,4].reduce((a,b) => a + b, 0);
console.log(sum);`,
                question: "What does this output?",
                options: ["10", "[1,2,3,4]", "undefined"],
                correct: 0,
                explanation: "reduce() sums all array elements together.",
                codeBehavior: "Outputs: 10"
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
                code: `<!DOCTYPE html>
<html>
<head><title>Page</title></head>
<body><h1>Hello</h1></body>
</html>`,
                question: "What does DOCTYPE do?",
                options: ["Declares HTML version", "Creates heading", "Styles page"],
                correct: 0,
                explanation: "DOCTYPE tells browser it's HTML5.",
                codeBehavior: "Ensures proper rendering"
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
            },
            {
                type: "identify",
                code: `<form>
    <input type="text" placeholder="Name">
    <button type="submit">Send</button>
</form>`,
                question: "What does this create?",
                options: ["A form with input and button", "Just a button", "Just an input"],
                correct: 0,
                explanation: "Forms collect user input.",
                codeBehavior: "Creates interactive form"
            },
            {
                type: "identify",
                code: `<a href="page.html">Click here</a>`,
                question: "What does this create?",
                options: ["A hyperlink", "A button", "A heading"],
                correct: 0,
                explanation: "The <a> tag creates links to other pages.",
                codeBehavior: "Creates clickable link"
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
                code: `const x = "5";
console.log(typeof x);`,
                question: "What does this output?",
                options: ["string", "number", "5"],
                correct: 0,
                explanation: "typeof checks variable type.",
                codeBehavior: "Outputs: string"
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
                code: `const {name} = {name: "John", age: 30};
console.log(name);`,
                question: "What does this output?",
                options: ["John", "30", "undefined"],
                correct: 0,
                explanation: "Destructuring extracts values from objects.",
                codeBehavior: "Outputs: John"
            },
            {
                type: "identify",
                code: `class User {
    constructor(name) { this.name = name; }
}`,
                question: "What is this?",
                options: ["Class definition", "Object", "Function"],
                correct: 0,
                explanation: "Classes are blueprints for objects.",
                codeBehavior: "Creates reusable object templates"
            },
            {
                type: "behavior",
                code: `const arr = [1, 2, 3];
console.log(arr.length);`,
                question: "What does this output?",
                options: ["3", "undefined", "1"],
                correct: 0,
                explanation: "The length property tells us how many items are in an array.",
                codeBehavior: "Outputs: 3"
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
                type: "identify",
                code: `.box { 
    display: flex;
    justify-content: center;
}`,
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
                type: "identify",
                code: `div { grid-template-columns: 1fr 1fr 1fr; }`,
                question: "What layout is this?",
                options: ["CSS Grid with 3 equal columns", "Flexbox", "Float layout"],
                correct: 0,
                explanation: "Grid creates responsive layouts.",
                codeBehavior: "Creates 3-column layout"
            },
            {
                type: "identify",
                code: `body { background-color: #f0f0f0; }`,
                question: "What does this do?",
                options: ["Sets background to light gray", "Sets text color", "Creates border"],
                correct: 0,
                explanation: "#f0f0f0 is a hex color code for light gray.",
                codeBehavior: "Changes page background color"
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

// ===== NEW CODE EDITOR FUNCTIONS =====
// This detects what programming language is in the code snippet
function detectLanguageFromCode(code) {
    code = code.toLowerCase();
    if (code.includes('<!doctype') || code.includes('<html') || code.includes('</')) {
        return 'HTML';
    }
    if (code.includes('body {') || code.includes('color:') || code.includes('background')) {
        return 'CSS';
    }
    return 'JavaScript';
}

// This gets a helpful placeholder text based on the language
function getPlaceholderForLanguage(language) {
    const placeholders = {
        'JavaScript': `// Try running the example code!\nconst message = "Hello!";\nconsole.log(message);`,
        'HTML': `<!-- Try modifying the example! -->\n<h1>Hello World</h1>\n<p>Welcome!</p>`,
        'CSS': `/* Try changing the colors! */\nbody {\n  background-color: #f0f0f0;\n}`
    };
    return placeholders[language] || placeholders['JavaScript'];
}

// This safely runs the code the user writes
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
        // Capture console output
        let capturedOutput = '';
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;

        // When user uses console.log, capture the text
        console.log = function(...args) {
            capturedOutput += args.map(arg => {
                if (typeof arg === 'object') return JSON.stringify(arg, null, 2);
                return String(arg);
            }).join(' ') + '\n';
        };

        // When user uses console.error, capture it
        console.error = function(...args) {
            capturedOutput += '❌ Error: ' + args.join(' ') + '\n';
        };

        // When user uses console.warn, capture it
        console.warn = function(...args) {
            capturedOutput += '⚠️ Warning: ' + args.join(' ') + '\n';
        };

        // Actually run the code (in a safe way)
        new Function(code)();

        // Restore the original console functions
        console.log = originalLog;
        console.error = originalError;
        console.warn = originalWarn;

        // Show the output
        outputDiv.style.display = 'block';
        if (capturedOutput) {
            outputContent.innerHTML = '<span style="color: #c3e88d;">' + capturedOutput.replace(/\n/g, '<br>') + '</span>';
        } else {
            outputContent.innerHTML = '<span style="color: #00d680;">✓ Code executed successfully (no console output)</span>';
        }

    } catch (error) {
        // If there's an error, show it to the user
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
    
    // Detect what language this code is
    const language = detectLanguageFromCode(question.code);
    
    // Create the HTML for the question (left side) and editor (right side)
    let questionContent = `
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
                <h3><span class="icon">💻</span> Code Editor</h3>
                <div class="editor-status">
                    <span class="status-dot"></span>
                    <span id="language-badge">${language}</span>
                </div>
                
                <textarea 
                    id="code-editor" 
                    class="code-editor" 
                    placeholder="${getPlaceholderForLanguage(language)}"
                    spellcheck="false">
                </textarea>
                
                <div class="action-buttons">
                    <button class="btn-submit" onclick="runCode()">▶️ Run Code</button>
                </div>
                
                <div id="code-output" style="display:none;">
                    <h4 style="color: #ffffff; margin: 10px 0;">Output:</h4>
                    <div id="output-content" class="code-output"></div>
                </div>
            </div>
        </div>
    `;
    
    contentArea.innerHTML = questionContent;
    
    // Fill in the answer options
    renderOptions(question);
    
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
                <div class="feedback-details">${escapeHtml(question.explanation)}</div>
            </div>
        `;
        
        feedbackDiv.style.display = 'block';
        submitBtn.disabled = true;
        
        // Update leaderboard and restart quiz
        setTimeout(() => {
            addOrUpdateLeaderboard(currentPlayerName, currentSessionScore);
            alert('Quiz restarting. Try again!');
            quizInProgress = false;
            currentCourseId = '';
            showCourseSelection();
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
    const course = coursesData[currentCourseId];
    
    // Update leaderboard
    addOrUpdateLeaderboard(currentPlayerName, currentSessionScore);
    
    let message = '';
    if (currentSessionScore === total) {
        message = 'Perfect score! You are a code master! 🚀';
    } else if (currentSessionScore >= Math.ceil(total * 0.8)) {
        message = 'Excellent! Strong skills! 👏';
    } else if (currentSessionScore >= Math.ceil(total * 0.6)) {
        message = 'Good job! Keep practicing! 📚';
    } else {
        message = 'Keep learning! You can do it! 💪';
    }
    
    contentArea.innerHTML = `
        <div class="completion-screen">
            <div class="completion-badge">🎉</div>
            <h2>${escapeHtml(course.name)} - Complete!</h2>
            
            <div class="completion-score">
                Your Score: ${currentSessionScore}/${total} points
            </div>
            
            <p class="completion-message">${message}</p>
            
            <button class="btn-restart" onclick="backToCourseSelection()">← Back to Courses</button>
            <button class="btn-restart" onclick="location.reload()">🔄 Start Over</button>
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
