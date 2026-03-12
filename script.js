// ===== COURSES DATABASE WITH COLOR CODING =====
const coursesData = {
    'beginner-general': {
        id: 'beginner-general',
        name: 'Beginner: General',
        category: 'Beginner',
        difficulty: 'Beginner',
        description: 'Start from scratch with basic programming concepts',
        color: '#8B5CF6',
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
                type: "code-task",
                question: "Write code to print 'Hello World' to the console",
                expectedCode: `console.log("Hello World")`,
                language: "javascript",
                hints: [
                    { code: `console.log("message");`, desc: "Use console.log to print" },
                    { code: `console.log("Hello World");`, desc: "Print exactly this message" }
                ],
                explanation: "console.log() is the basic way to print text in JavaScript.",
                codeBehavior: "Will output: Hello World"
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
                type: "code-task",
                question: "Create a variable called name with the value 'John'",
                expectedCode: `const name = "John"`,
                language: "javascript",
                hints: [
                    { code: `const variableName = "value";`, desc: "Use const to create a variable" },
                    { code: `const name = "John";`, desc: "Create name with value John" }
                ],
                explanation: "Variables store data that you can use later in your code.",
                codeBehavior: "Creates a variable that can be used throughout the code"
            }
        ]
    },
    
    'novice-general': {
        id: 'novice-general',
        name: 'Novice: General',
        category: 'Novice',
        difficulty: 'Novice',
        description: 'Build on basics with variables, functions, and logic',
        color: '#F59E0B',
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
                type: "code-task",
                question: "Create two variables and add them together",
                expectedCode: `const x = 10;
const y = 20;
console.log(x + y);`,
                language: "javascript",
                hints: [
                    { code: `const a = 5;
const b = 3;`, desc: "Create two variables" },
                    { code: `console.log(a + b);`, desc: "Add and print them" }
                ],
                explanation: "You can perform math operations on variables.",
                codeBehavior: "Will output: 30"
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
            }
        ]
    },

    'expert-general': {
        id: 'expert-general',
        name: 'Expert: General',
        category: 'Expert',
        difficulty: 'Expert',
        description: 'Master advanced concepts and optimization',
        color: '#EF4444',
        questions: [
            {
                type: "code-task",
                question: "Write a function that returns the square of a number",
                expectedCode: `function square(num) {
  return num * num;
}`,
                language: "javascript",
                hints: [
                    { code: `function square(n) { return n * n; }`, desc: "Function that multiplies num by itself" },
                    { code: `const result = num * num;
return result;`, desc: "Multiply the number by itself and return" }
                ],
                explanation: "Functions can take parameters and return computed values.",
                codeBehavior: "square(5) will return 25"
            },
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
        badge: '📄',
        questions: [
            {
                type: "code-task",
                question: "Write an HTML page with a title and heading",
                expectedCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>`,
                language: "html",
                hints: [
                    { code: `<!DOCTYPE html>
<html>
<head>
  <title>Title</title>
</head>
<body></body>
</html>`, desc: "Basic HTML structure" },
                    { code: `<h1>Your heading here</h1>`, desc: "Add a heading in body" }
                ],
                explanation: "A proper HTML page has DOCTYPE, html, head, and body tags.",
                codeBehavior: "Creates a valid HTML document"
            },
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
        badge: '⚡',
        questions: [
            {
                type: "code-task",
                question: "Create an array and print the first element",
                expectedCode: `const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);`,
                language: "javascript",
                hints: [
                    { code: `const arr = [item1, item2, item3];`, desc: "Create an array with brackets []" },
                    { code: `console.log(arr[0]);`, desc: "Print first element using index 0" }
                ],
                explanation: "Arrays store multiple values. Index 0 is the first element.",
                codeBehavior: "Will output: apple"
            },
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
        badge: '🎨',
        questions: [
            {
                type: "code-task",
                question: "Write CSS to make text red and centered",
                expectedCode: `body {
  color: red;
  text-align: center;
}`,
                language: "css",
                hints: [
                    { code: `selector {
  property: value;
}`, desc: "CSS syntax with curly braces" },
                    { code: `color: red;
text-align: center;`, desc: "Add these properties" }
                ],
                explanation: "CSS rules use property: value syntax inside curly braces.",
                codeBehavior: "Makes all text red and centered"
            },
            {
                type: "identify",
                code: `#header { color: red; }`,
                question: "What does # mean?",
                options: ["ID selector", "Class selector", "Tag](#)*

