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
            <h2>📚 Choose`

