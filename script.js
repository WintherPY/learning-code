// ===== COURSES DATABASE WITH COLOR CODES =====
const coursesData = {
    'beginner-general': {
        id: 'beginner-general',
        name: 'Beginner: General',
        category: 'Beginner',
        difficulty: 'Beginner',
        description: 'Start from scratch with basic programming concepts',
        color: null,
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
    
    'novice-general': {
        id: 'novice-general',
        name: 'Novice: General',
        category: 'Novice',
        difficulty: 'Novice',
        description: 'Build on basics with variables, functions, and logic',
        color: null,
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
                type: "error",
                code: `const x = 10
const y = 20
console.log(x + y)`,
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
                code: `const arr = [1, 2, 3];
console.log(arr[0]);`,
                question: "What does this output?",
                options: ["1", "3", "undefined"],
                correct: 0,
                explanation: "Arrays are indexed starting at 0.",
                codeBehavior: "Outputs: 1"
            }
        ]
    },

    'expert-general': {
        id: 'expert-general',
        name: 'Expert: General',
        category: 'Expert',
        difficulty: 'Expert',
        description: 'Master advanced concepts and optimization',
        color: null,
        questions: [
            {
                type: "behavior",
                code: `const nums = [1,2,3,4,5];
const doubled = nums.map(n => n * 2);`,
                question: "What is doubled?",
                options: ["[2,4,6,8,10]", "[1,2,3,4,5]", "undefined"],
                correct: 0,
                explanation: "map() transforms each element.",
                codeBehavior: "doubled = [2,4,6,8,10]"
            },
            {
                type: "error",
                code: `function test {
    return "value";
}`,
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
const ids = users.map(u => u.id);`,
                question: "What is ids?",
                options: ["[1, 2]", "[[1],[2]]", "undefined"],
                correct: 0,
                explanation: "map() extracts properties from object arrays.",
                codeBehavior: "ids = [1, 2]"
            }
        ]
    },

    'html-course': {
        id: 'html-course',
        name: 'HTML',
        category: 'Language',
        difficulty: 'Mixed',
        description: 'Master HTML markup and semantic elements',
        color: '#E34C26',
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
                type: "behavior",
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
                type: "error",
                code: `<div class=container>
    <h1>Title</h1>
</div>`,
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

    'javascript-course': {
        id: 'javascript-course',
        name: 'JavaScript',
        category: 'Language',
        difficulty: 'Mixed',
        description: 'Learn JavaScript ES6+ and advanced concepts',
        color: '#F7DF1E',
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
                type: "error",
                code: `const arr = [1,2,3]
arr.push(4)
console.log(arr)`,
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
            }
        ]
    },

    'css-course': {
        id: 'css-course',
        name: 'CSS',
        category: 'Language',
        difficulty: 'Mixed',
        description: 'Master CSS styling and layout techniques',
        color: '#1572B6',
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

// ===== SIDEBAR NAVIGATION WITH COLOR CODING =====
function updateSidebarCourses() {
    const sidebarNav = document.getElementById('sidebar-nav');
    if (!sidebarNav) return;
    
    const courses = Object.values(coursesData);
    
    sidebarNav.innerHTML = courses.map(course => {
        const isActive = currentCourseId === course.id ? 'active' : '';
        let textColor = '#fff';
        let borderColor = 'transparent';
        
        // Apply colors for language courses
        if (course.id === 'html-course') {
            textColor = '#E34C26';
            borderColor = '#E34C26';
        } else if (course.id === 'javascript-course') {
            textColor = '#F7DF1E';
            borderColor = '#F7DF1E';
        } else if (course.id === 'css-course') {
            textColor = '#1572B6';
            borderColor = '#1572B6';
        }
        
        return `
            <div class="nav-item ${isActive}" 
                 onclick="handleCourseNavClick('${course.id}')"
                 style="border-left-color: ${borderColor};">
                <div class="nav-category" style="color: ${textColor};">${course.category}</div>
                <div class="nav-name" style="color: ${textColor};">${escapeHtml(course.name)}</div>
            </div>
        `;
    }).join('');
}

function handleCourseNavClick(courseId) {
    if (!quizInProgress) {
        selectCourse(courseId);
        return;
    }
    
    // If quiz in progress, show exit confirmation
    if (courseId !== currentCourseId) {
        const exitingCourse = coursesData[currentCourseId].name;
        document.getElementById('exit-message').textContent = `You are exiting "${exitingCourse}" course - Continue?`;
        document.getElementById('exit-course-modal').style.display = 'flex';
        window.pendingCourseId = courseId;
    }
}

function selectCourse(courseId) {
    if (quizInProgress) return;
    currentCourseId = courseId;
    updateSidebarCourses();
    showCourseSelection();
}

// ===== EXIT COURSE FUNCTIONS =====
function confirmExitCourse() {
    if (!quizInProgress && !currentPlayerName) {
        showNameEntryScreen();
        return;
    }
    
    if (!quizInProgress) {
        document.getElementById('main-page-exit-modal').style.display = 'flex';
        return;
    }
    
    const exitingCourse = coursesData[currentCourseId].name;
    document.getElementById('exit-message').textContent = `You are exiting "${exitingCourse}" course - Continue?`;
    document.getElementById('exit-course-modal').style.display = 'flex';
    window.pendingCourseId = '';
}

function closeExitCourseModal() {
    document.getElementById('exit-course-modal').style.display = 'none';
    window.pendingCourseId = '';
}

function closeMainPageExitModal() {
    document.getElementById('main-page-exit-modal').style.display = 'none';
}

function exitCourse() {
    quizInProgress = false;
    answered = false;
    currentQuestionIndex = 0;
    currentSessionScore = 0;
    
    const pendingCourseId = window.pendingCourseId;
    closeExitCourseModal();
    
    if (pendingCourseId === '') {
        location.reload();
    } else {
        currentCourseId = pendingCourseId;
        updateUserInfo();
        updateSidebarCourses();
        showCourseSelection();
    }
}

function confirmMainPageExit() {
    currentPlayerName = '';
    currentCourseId = '';
    closeMainPageExitModal();
    showNameEntryScreen();
}

// ===== SHOW NAME ENTRY SCREEN =====
function showNameEntryScreen() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="name-entry-screen">
            <h2>Welcome to Learning Code</h2>
            <p class="tagline">Interactive Programming Quiz Platform</p>
            
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
    
    document.getElementById('breadcrumb-course').textContent = 'Courses';
    document.getElementById('lesson-title').textContent = 'Welcome';
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
                    ${courses.map(course => {
                        let badgeClass = course.difficulty.toLowerCase();
                        let cardClass = '';
                        let titleClass = '';
                        let badgeHTML = '';
                        
                        if (course.id === 'html-course') {
                            badgeClass = 'html';
                            cardClass = ' html-course';
                            titleClass = ' html-title';
                            badgeHTML = `<span style="color: #E34C26; font-size: 1.3em;">📄</span>`;
                        } else if (course.id === 'javascript-course') {
                            badgeClass = 'javascript';
                            cardClass = ' javascript-course';
                            titleClass = ' javascript-title';
                            badgeHTML = `<span style="color: #F7DF1E; font-size: 1.3em;">⚡</span>`;
                        } else if (course.id === 'css-course') {
                            badgeClass = 'css';
                            cardClass = ' css-course';
                            titleClass = ' css-title';
                            badgeHTML = `<span style="color: #1572B6; font-size: 1.3em;">🎨</span>`;
                        }
                        
                        return `
                            <div class="course-card${cardClass}" onclick="startCourse('${course.id}')">
                                ${badgeHTML}
                                <span class="course-badge ${badgeClass}">${course.difficulty}</span>
                                <h3 class="course-title${titleClass}">${escapeHtml(course.name)}</h3>
                                <p class="course-description">${escapeHtml(course.description)}</p>
                                <div class="course-info">
                                    <div class="info-item">📝 ${course.questions.length} questions</div>
                                </div>
                                <button class="btn-start-course">Start Course</button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else {
        // Show selected course
        const course = coursesData[currentCourseId];
        let badgeClass = course.difficulty.toLowerCase();
        let cardClass = '';
        let titleClass = '';
        let badgeHTML = '';
        
        if (currentCourseId === 'html-course') {
            badgeClass = 'html';
            cardClass = ' html-course';
            titleClass = ' html-title';
            badgeHTML = `<span style="color: #E34C26; font-size: 1.3em;">📄</span>`;
        } else if (currentCourseId === 'javascript-course') {
            badgeClass = 'javascript';
            cardClass = ' javascript-course';
            titleClass = ' javascript-title';
            badgeHTML = `<span style="color: #F7DF1E; font-size: 1.3em;">⚡</span>`;
        } else if (currentCourseId === 'css-course') {
            badgeClass = 'css';
            cardClass = ' css-course';
            titleClass = ' css-title';
            badgeHTML = `<span style="color: #1572B6; font-size: 1.3em;">🎨</span>`;
        }
        
        contentArea.innerHTML = `
            <div class="course-selection-screen">
                <h2>📚 ${escapeHtml(course.name)}</h2>
                <div class="courses-grid">
                    <div class="course-card${cardClass}">
                        ${badgeHTML}
                        <span class="course-badge ${badgeClass}">${course.difficulty}</span>
                        <h3 class="course-title${titleClass}">${escapeHtml(course.name)}</h3>
                        <p class="course-description">${escapeHtml(course.description)}</p>
                        <div class="course-info">
                            <div class="info-item">📝 ${course.questions.length} questions</div>
                        </div>
                        <button class="btn-start-course" onclick="startCourse('${course.id}')">Start Quiz</button>
                        <button class="btn-start-course" style="margin-top: 10px; background: #0369a1;" onclick="backToCourseSelection()">← Back to Courses</button>
                        <button class="btn-start-course" style="margin-top: 10px; background: #dc2626;" onclick="exitCourseSelection()">❌ Exit Course</button>
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

function exitCourseSelection() {
    currentCourseId = '';
    currentPlayerName = '';
    updateUserInfo();
    updateSidebarCourses();
    showNameEntryScreen();
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
                        <span>Complete to proceed</span>
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
                        <span>Complete to proceed</span>
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
        
        setTimeout(() => {
            addOrUpdateLeaderboard(currentPlayerName, currentSessionScore);
            alert('Quiz restarting. Try again!');
            quizInProgress = false;
            currentCourseId = '';
            showCourseSelection();
        }, 2000);
    }
}

// ===== SUBMIT ERROR ANSWER =====
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
        
        let detailedFeedback = `
            <div class="feedback-box correct">
                <strong>✓ Correct! You found the error!</strong>
                <div class="feedback-details">
                    <strong style="color: inherit; display: block; margin-top: 12px;">Error Type:</strong>
                    ${escapeHtml(question.errorInfo.errorType)}
                    
                    <strong style="color: inherit; display: block; margin-top: 12px;">Problem:</strong>
                    ${escapeHtml(question.errorInfo.description)}
        `;
        
        if (question.errorInfo.errorLines && question.errorInfo.errorLines.length > 0) {
            detailedFeedback += '<strong style="color: inherit; display: block; margin-top: 12px;">Error Location(s):</strong>';
            
            question.errorInfo.errorLines.forEach((errorLine) => {
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
        let detailedFeedback = `
            <div class="feedback-box incorrect">
                <strong>✗ Incorrect</strong>
                <div class="feedback-details">
                    <strong style="color: inherit; display: block; margin-top: 12px;">The error was:</strong>
                    <strong style="color: inherit; display: block; margin-top: 8px; font-size: 1.1em;">${escapeHtml(question.errorAnswer)}</strong>
                    
                    <strong style="color: inherit; display: block; margin-top: 12px;">Error Type:</strong>
                    ${escapeHtml(question.errorInfo.errorType)}
                    
                    <strong style="color: inherit; display: block; margin-top: 12px;">Look for:</strong>
                    ${escapeHtml(question.errorInfo.description)}
        `;
        
        if (question.errorInfo.errorLines && question.errorInfo.errorLines.length > 0) {
            detailedFeedback += '<strong style="color: inherit; display: block; margin-top: 12px;">Error Location(s):</strong>';
            
            question.errorInfo.errorLines.forEach((errorLine) => {
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
        
        detailedFeedback += `
                    <strong style="color: inherit; display: block; margin-top: 12px;">💡 Tip:</strong>
                    ${escapeHtml(question.errorInfo.tip)}
                </div>
            </div>
        `;
        
        feedbackDiv.innerHTML = detailedFeedback;
        feedbackDiv.style.display = 'block';
        
        submitBtn.disabled = true;
        
        setTimeout(() => {
            addOrUpdateLeaderboard(currentPlayerName, currentSessionScore);
            alert('Quiz restarting. Try again!');
            quizInProgress = false;
            currentCourseId = '';
            showCourseSelection();
        }, 3000);
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
