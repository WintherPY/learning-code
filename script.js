// ===== COURSES DATABASE WITH DETAILED ERROR INFO =====
const coursesData = {
    // BEGINNER COURSES
    'beginner-general': {
        id: 'beginner-general',
        name: 'Beginner: Programming Fundamentals',
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
            },
            {
                type: "identify",
                code: `<p>This is a paragraph.</p>`,
                question: "What does the <p> tag create?",
                options: ["A paragraph of text", "A heading", "A list item"],
                correct: 0,
                explanation: "<p> defines a paragraph element in HTML.",
                codeBehavior: "Renders a block of text with top and bottom spacing"
            },
            {
                type: "identify",
                code: `<a href="https://example.com">Visit Site</a>`,
                question: "What does this HTML create?",
                options: ["A clickable hyperlink", "An image", "A button"],
                correct: 0,
                explanation: "The <a> tag creates a hyperlink. The href attribute defines the destination URL.",
                codeBehavior: "Shows a clickable link labeled 'Visit Site'"
            },
            {
                type: "behavior",
                code: `let x = 10;\nlet y = 5;\nconsole.log(x - y);`,
                question: "What does this output?",
                options: ["5", "15", "10"],
                correct: 0,
                explanation: "The minus operator subtracts y from x. 10 - 5 = 5.",
                codeBehavior: "Outputs: 5"
            },
            {
                type: "identify",
                code: `<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>`,
                question: "What does this HTML create?",
                options: ["An unordered bullet list", "A numbered list", "A table"],
                correct: 0,
                explanation: "<ul> creates an unordered list and <li> defines each list item.",
                codeBehavior: "Renders a bullet list with Apples and Bananas"
            },
            {
                type: "behavior",
                code: `let name = "Alice";\nconsole.log("Hello " + name);`,
                question: "What does this output?",
                options: ["Hello Alice", "Hello name", "Alice"],
                correct: 0,
                explanation: "The + operator joins strings together (concatenation).",
                codeBehavior: "Outputs: Hello Alice"
            },
            {
                type: "identify",
                code: `p { font-size: 16px; }`,
                question: "What does font-size do in CSS?",
                options: ["Sets the text size", "Sets the text color", "Makes text bold"],
                correct: 0,
                explanation: "font-size controls how large the text appears on screen.",
                codeBehavior: "Makes all <p> text 16 pixels tall"
            },
            {
                type: "behavior",
                code: `console.log(2 + "3");`,
                question: "What does this output?",
                options: ["23", "5", "error"],
                correct: 0,
                explanation: "When a number is added to a string, JavaScript converts the number to a string and concatenates them.",
                codeBehavior: "Outputs: 23 (string)"
            },
            {
                type: "identify",
                code: `.container { margin: 0 auto; }`,
                question: "What does margin: 0 auto do?",
                options: ["Centers the element horizontally", "Removes all spacing", "Adds padding"],
                correct: 0,
                explanation: "margin: 0 auto sets top/bottom margin to 0 and automatically centers the element horizontally.",
                codeBehavior: "Centers .container inside its parent"
            },
            {
                type: "error",
                code: `<img src="cat.jpg">`,
                question: "Find the accessibility error - Type what's missing",
                errorAnswer: "alt",
                errorInfo: {
                    errorType: "Missing Alt Attribute",
                    description: "Images must have an alt attribute for accessibility and in case the image fails to load.",
                    errorLines: [
                        { line: 1, original: '<img src="cat.jpg">', corrected: '<img src="cat.jpg" alt="A cat">', position: "inside the <img> tag" }
                    ],
                    tip: "Always add alt=\"description\" to every <img> element"
                },
                explanation: "Every <img> needs an alt attribute for accessibility.",
                codeBehavior: "Screen readers cannot describe the image without alt text"
            },
            {
                type: "identify",
                code: `h2 { color: #ff0000; }`,
                question: "What color does #ff0000 represent?",
                options: ["Red", "Blue", "Green"],
                correct: 0,
                explanation: "#ff0000 is a hex color code representing pure red (maximum red, no green, no blue).",
                codeBehavior: "Makes all <h2> headings red"
            }
        ]
    },
    
    // NOVICE COURSES
    'novice-general': {
        id: 'novice-general',
        name: 'Novice: Variables, Functions & Logic',
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
            },
            {
                type: "behavior",
                code: `const nums = [1, 2, 3];\nconsole.log(nums.length);`,
                question: "What does this output?",
                options: ["3", "1", "0"],
                correct: 0,
                explanation: "The length property returns how many items are in the array.",
                codeBehavior: "Outputs: 3"
            },
            {
                type: "identify",
                code: `<label for="email">Email</label>\n<input id="email" type="text">`,
                question: "What does the for attribute on <label> do?",
                options: ["Links the label to the input with matching id", "Creates a loop", "Styles the label"],
                correct: 0,
                explanation: "for=\"email\" links the label to the <input id=\"email\">, so clicking the label focuses the input.",
                codeBehavior: "Clicking 'Email' label focuses the text input"
            },
            {
                type: "behavior",
                code: `let count = 0;\nfor (let i = 0; i < 3; i++) {\n    count++;\n}\nconsole.log(count);`,
                question: "What does this output?",
                options: ["3", "0", "2"],
                correct: 0,
                explanation: "The loop runs 3 times (i = 0, 1, 2) and count is incremented each time.",
                codeBehavior: "Outputs: 3"
            },
            {
                type: "identify",
                code: `.flex { \n    display: flex;\n    flex-wrap: wrap;\n}`,
                question: "What does flex-wrap: wrap do?",
                options: ["Allows items to wrap to the next line", "Hides overflow", "Centers items"],
                correct: 0,
                explanation: "flex-wrap: wrap allows flex items to wrap onto multiple lines when they exceed the container width.",
                codeBehavior: "Items wrap to a new row instead of overflowing"
            },
            {
                type: "error",
                code: `function greet(name) {\n    return "Hello " name;\n}`,
                question: "Find the error - Type what's missing",
                errorAnswer: "+",
                errorInfo: {
                    errorType: "Missing Concatenation Operator",
                    description: "Two string values cannot be placed next to each other without an operator.",
                    errorLines: [
                        { line: 2, original: 'return "Hello " name;', corrected: 'return "Hello " + name;', position: "between the string and the variable" }
                    ],
                    tip: "Use + to join strings and variables together"
                },
                explanation: "Strings and variables must be joined with the + operator.",
                codeBehavior: "SyntaxError - missing + between string and variable"
            },
            {
                type: "behavior",
                code: `const arr = [5, 3, 1];\narr.sort((a, b) => a - b);\nconsole.log(arr[0]);`,
                question: "What does this output?",
                options: ["1", "5", "3"],
                correct: 0,
                explanation: "sort((a, b) => a - b) sorts the array in ascending order. The smallest value (1) moves to index 0.",
                codeBehavior: "Outputs: 1"
            },
            {
                type: "identify",
                code: `const person = {\n    name: "Bob",\n    greet() { return "Hi, I'm " + this.name; }\n};`,
                question: "What is this JavaScript pattern?",
                options: ["Object with a method", "A class definition", "An arrow function"],
                correct: 0,
                explanation: "This is an object literal with a method. greet() is a function stored as a property of the object.",
                codeBehavior: "person.greet() returns \"Hi, I'm Bob\""
            },
            {
                type: "behavior",
                code: `const x = null;\nconsole.log(x === null);`,
                question: "What does this output?",
                options: ["true", "false", "null"],
                correct: 0,
                explanation: "=== is strict equality. null strictly equals null, so the result is true.",
                codeBehavior: "Outputs: true"
            },
            {
                type: "identify",
                code: `input:focus {\n    border: 2px solid blue;\n}`,
                question: "What does the :focus pseudo-class do?",
                options: ["Styles the input when it is selected/active", "Styles on mouse hover", "Hides the input"],
                correct: 0,
                explanation: ":focus applies styles when a user clicks or tabs into an element.",
                codeBehavior: "Input gets a blue border when the user clicks on it"
            },
            {
                type: "error",
                code: `<div>\n    <p>Hello</p>\n</dvi>`,
                question: "Find the HTML error - Type what's wrong",
                errorAnswer: "closing tag",
                errorInfo: {
                    errorType: "Typo in Closing Tag",
                    description: "The closing </dvi> is misspelled. It should be </div>.",
                    errorLines: [
                        { line: 3, original: "</dvi>", corrected: "</div>", position: "closing tag" }
                    ],
                    tip: "Opening and closing tags must match exactly: <div>...</div>"
                },
                explanation: "</dvi> is a typo — the correct closing tag is </div>.",
                codeBehavior: "Browser may misinterpret the structure; the div is never properly closed"
            }
        ]
    },
    
    // EXPERT COURSES
    'expert-general': {
        id: 'expert-general',
        name: 'Expert: Advanced Concepts & Optimization',
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
            },
            {
                type: "behavior",
                code: `const nums = [1, 2, 3, 4, 5];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens);`,
                question: "What is evens?",
                options: ["[2, 4]", "[1, 3, 5]", "[1, 2, 3, 4, 5]"],
                correct: 0,
                explanation: "filter() keeps only elements where the callback returns true. Even numbers have remainder 0 when divided by 2.",
                codeBehavior: "evens = [2, 4]"
            },
            {
                type: "behavior",
                code: `const nums = [1, 2, 3, 4];\nconst total = nums.reduce((acc, n) => acc + n, 0);\nconsole.log(total);`,
                question: "What does total equal?",
                options: ["10", "0", "4"],
                correct: 0,
                explanation: "reduce() accumulates values. It starts at 0 and adds each number: 0+1+2+3+4 = 10.",
                codeBehavior: "Outputs: 10"
            },
            {
                type: "identify",
                code: `function outer() {\n    const secret = 42;\n    return function inner() {\n        return secret;\n    };\n}`,
                question: "What JavaScript concept does this demonstrate?",
                options: ["Closure", "Recursion", "Prototype"],
                correct: 0,
                explanation: "A closure is when an inner function retains access to the outer function's variables even after the outer function has returned.",
                codeBehavior: "outer()() returns 42"
            },
            {
                type: "identify",
                code: `Promise.all([fetch('/api/a'), fetch('/api/b')])\n    .then(([a, b]) => console.log(a, b));`,
                question: "What does Promise.all do?",
                options: ["Runs all promises in parallel and waits for all to resolve", "Runs promises one by one", "Returns the first resolved promise"],
                correct: 0,
                explanation: "Promise.all takes an array of promises and resolves when all of them complete, returning an array of results.",
                codeBehavior: "Fetches /api/a and /api/b simultaneously"
            },
            {
                type: "error",
                code: `async function loadData() {\n    const res = fetch('https://api.example.com/data');\n    const data = res.json();\n    return data;\n}`,
                question: "Find the error - Type what's missing",
                errorAnswer: "await",
                errorInfo: {
                    errorType: "Missing await",
                    description: "fetch() and res.json() both return Promises. Without await, res and data will be Promise objects, not actual values.",
                    errorLines: [
                        { line: 2, original: "const res = fetch('https://api.example.com/data');", corrected: "const res = await fetch('https://api.example.com/data');", position: "before fetch()" },
                        { line: 3, original: "const data = res.json();", corrected: "const data = await res.json();", position: "before res.json()" }
                    ],
                    tip: "Inside an async function, use await before any Promise-returning call"
                },
                explanation: "await is required before fetch() and res.json() to get the resolved values.",
                codeBehavior: "Without await, res is a Promise object, causing res.json is not a function error"
            },
            {
                type: "identify",
                code: `:root {\n    --primary-color: #3498db;\n}\n\n.btn { background: var(--primary-color); }`,
                question: "What is --primary-color?",
                options: ["A CSS custom property (variable)", "A class name", "A pseudo-class"],
                correct: 0,
                explanation: "CSS custom properties (variables) are defined with -- prefix and used with var(). They make it easy to reuse values.",
                codeBehavior: ".btn gets background color #3498db from the variable"
            },
            {
                type: "behavior",
                code: `const user = { profile: { name: "Sam" } };\nconsole.log(user?.profile?.name);`,
                question: "What does this output?",
                options: ["Sam", "undefined", "error"],
                correct: 0,
                explanation: "Optional chaining (?.) safely accesses nested properties without throwing if an intermediate value is null or undefined.",
                codeBehavior: "Outputs: Sam"
            },
            {
                type: "identify",
                code: `document.querySelector('#btn').addEventListener('click', (e) => {\n    console.log(e.target);\n});`,
                question: "What is e.target?",
                options: ["The element that was clicked", "The event type", "The parent element"],
                correct: 0,
                explanation: "e.target refers to the specific DOM element that triggered the event.",
                codeBehavior: "Logs the #btn element when clicked"
            },
            {
                type: "behavior",
                code: `class Animal {\n    constructor(name) { this.name = name; }\n    speak() { return this.name + ' makes a sound.'; }\n}\nclass Dog extends Animal {\n    speak() { return this.name + ' barks.'; }\n}\nconsole.log(new Dog('Rex').speak());`,
                question: "What does this output?",
                options: ["Rex barks.", "Rex makes a sound.", "undefined"],
                correct: 0,
                explanation: "Dog extends Animal and overrides the speak() method. Method overriding is a key OOP concept.",
                codeBehavior: "Outputs: Rex barks."
            },
            {
                type: "identify",
                code: `const [first, ...rest] = [10, 20, 30, 40];\nconsole.log(first);\nconsole.log(rest);`,
                question: "What does the rest parameter (...rest) collect?",
                options: ["All remaining array elements after first", "Only the last element", "A copy of the whole array"],
                correct: 0,
                explanation: "Array destructuring with ...rest collects all remaining elements. first = 10, rest = [20, 30, 40].",
                codeBehavior: "Outputs: 10 then [20, 30, 40]"
            }
        ]
    },

    // HTML COURSE
    'html-course': {
        id: 'html-course',
        name: 'HTML: Markup & Semantic Elements',
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
            },
            {
                type: "identify",
                code: `<nav>\n    <a href="/">Home</a>\n    <a href="/about">About</a>\n</nav>`,
                question: "What does the <nav> element represent?",
                options: ["A navigation block with links", "A header area", "A sidebar"],
                correct: 0,
                explanation: "<nav> is a semantic element that wraps navigation links, helping browsers and assistive technologies identify the navigation area.",
                codeBehavior: "Groups navigation links with semantic meaning"
            },
            {
                type: "identify",
                code: `<meta charset="UTF-8">`,
                question: "What does this <meta> tag do?",
                options: ["Sets the character encoding for the page", "Sets the page title", "Links a stylesheet"],
                correct: 0,
                explanation: "charset=\"UTF-8\" tells the browser which character encoding to use, allowing it to display all Unicode characters correctly.",
                codeBehavior: "Ensures special characters display correctly"
            },
            {
                type: "error",
                code: `<ul>\n    <li>Item 1\n    <li>Item 2\n</ul>`,
                question: "Find the HTML error - Type what's missing",
                errorAnswer: "closing tag",
                errorInfo: {
                    errorType: "Missing Closing Tags",
                    description: "Each <li> element should have a matching </li> closing tag.",
                    errorLines: [
                        { line: 2, original: "<li>Item 1", corrected: "<li>Item 1</li>", position: "end of line 2" },
                        { line: 3, original: "<li>Item 2", corrected: "<li>Item 2</li>", position: "end of line 3" }
                    ],
                    tip: "Always close HTML elements with a matching closing tag"
                },
                explanation: "Every <li> needs a </li> closing tag.",
                codeBehavior: "Browser may render incorrectly without proper closing tags"
            },
            {
                type: "identify",
                code: `<input type="email" required placeholder="Enter email">`,
                question: "What does the required attribute do?",
                options: ["Prevents form submission if the field is empty", "Adds a placeholder label", "Validates email format only"],
                correct: 0,
                explanation: "required prevents the HTML form from being submitted unless the field has a value.",
                codeBehavior: "Browser shows an error if user tries to submit without entering an email"
            },
            {
                type: "behavior",
                code: `<details>\n    <summary>Click to expand</summary>\n    <p>Hidden content here.</p>\n</details>`,
                question: "What does this create?",
                options: ["An expandable/collapsible section", "A tooltip", "A dialog box"],
                correct: 0,
                explanation: "<details> creates a disclosure widget. The <summary> is always visible; clicking it shows or hides the rest.",
                codeBehavior: "Shows 'Click to expand'; clicking reveals the hidden paragraph"
            },
            {
                type: "identify",
                code: `<header>\n    <h1>Site Title</h1>\n</header>\n<main>\n    <p>Content</p>\n</main>\n<footer>\n    <p>Copyright</p>\n</footer>`,
                question: "What is the purpose of <header>, <main>, and <footer>?",
                options: ["Semantic landmark elements that structure page regions", "CSS layout containers", "JavaScript hooks"],
                correct: 0,
                explanation: "These are semantic HTML5 landmark elements that divide the page into meaningful regions for accessibility and SEO.",
                codeBehavior: "Provides structured page layout with semantic meaning"
            },
            {
                type: "error",
                code: `<label>Username</label>\n<input type="text" id="username">`,
                question: "Find the accessibility error - Type what's missing",
                errorAnswer: "for",
                errorInfo: {
                    errorType: "Missing for Attribute on Label",
                    description: "The <label> is not linked to the <input>. Adding for=\"username\" connects them.",
                    errorLines: [
                        { line: 1, original: "<label>Username</label>", corrected: '<label for="username">Username</label>', position: "inside the <label> tag" }
                    ],
                    tip: "Always link labels to inputs using for=\"inputId\" to improve accessibility"
                },
                explanation: "The <label> needs for=\"username\" to be linked to the input.",
                codeBehavior: "Without for, clicking the label does not focus the input"
            },
            {
                type: "identify",
                code: `<figure>\n    <img src="chart.png" alt="Sales chart">\n    <figcaption>Q1 Sales Data</figcaption>\n</figure>`,
                question: "What does <figcaption> do?",
                options: ["Provides a caption for the figure element", "Adds a title attribute", "Creates a tooltip"],
                correct: 0,
                explanation: "<figcaption> gives a visible caption to its parent <figure>, associating descriptive text with images or diagrams.",
                codeBehavior: "Displays 'Q1 Sales Data' as a caption below the image"
            },
            {
                type: "behavior",
                code: `<select name="color">\n    <option value="red">Red</option>\n    <option value="blue" selected>Blue</option>\n</select>`,
                question: "Which option is pre-selected when the page loads?",
                options: ["Blue", "Red", "Neither"],
                correct: 0,
                explanation: "The selected attribute on an <option> makes it the default selected value when the page first loads.",
                codeBehavior: "Dropdown shows 'Blue' as the default selected option"
            },
            {
                type: "identify",
                code: `<table>\n    <thead><tr><th>Name</th><th>Age</th></tr></thead>\n    <tbody><tr><td>Alice</td><td>30</td></tr></tbody>\n</table>`,
                question: "What is the purpose of <thead> and <tbody>?",
                options: ["Semantically separate the header row from the data rows", "Style the table automatically", "Create scrollable rows"],
                correct: 0,
                explanation: "<thead> wraps the header row(s) and <tbody> wraps the data rows, making tables more semantic and accessible.",
                codeBehavior: "Renders a table with a header row and one data row"
            }
        ]
    },

    // JAVASCRIPT COURSE
    'javascript-course': {
        id: 'javascript-course',
        name: 'JavaScript: ES6+ & Advanced Concepts',
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
            },
            {
                type: "behavior",
                code: `console.log(Array.isArray([1, 2, 3]));\nconsole.log(Array.isArray("hello"));`,
                question: "What does this output?",
                options: ["true then false", "false then true", "true then true"],
                correct: 0,
                explanation: "Array.isArray() returns true only for real arrays. Strings are not arrays.",
                codeBehavior: "Outputs: true\nfalse"
            },
            {
                type: "identify",
                code: `const a = [1, 2];\nconst b = [3, 4];\nconst merged = [...a, ...b];`,
                question: "What is the spread operator (...) doing here?",
                options: ["Spreading array elements into a new array", "Copying by reference", "Filtering values"],
                correct: 0,
                explanation: "The spread operator expands an iterable (like an array) into individual elements. merged = [1, 2, 3, 4].",
                codeBehavior: "merged = [1, 2, 3, 4]"
            },
            {
                type: "error",
                code: `const double = (n) => {\n    n * 2;\n};\nconsole.log(double(5));`,
                question: "Find the error - Type what's missing",
                errorAnswer: "return",
                errorInfo: {
                    errorType: "Missing return Statement",
                    description: "When using a function body with { }, the return keyword is required to send back a value.",
                    errorLines: [
                        { line: 2, original: "    n * 2;", corrected: "    return n * 2;", position: "before n * 2" }
                    ],
                    tip: "Arrow functions with { } need an explicit return statement"
                },
                explanation: "Without return, the function returns undefined. Use return n * 2;",
                codeBehavior: "double(5) returns undefined instead of 10"
            },
            {
                type: "behavior",
                code: `const obj = { a: 1, b: 2, c: 3 };\nconsole.log(Object.keys(obj));`,
                question: "What does this output?",
                options: ["['a', 'b', 'c']", "[1, 2, 3]", "3"],
                correct: 0,
                explanation: "Object.keys() returns an array of the object's property names (keys).",
                codeBehavior: "Outputs: ['a', 'b', 'c']"
            },
            {
                type: "identify",
                code: `const name = "World";\nconsole.log(\`Hello, \${name}!\`);`,
                question: "What are backticks and ${} called?",
                options: ["Template literals", "String concatenation", "Comment syntax"],
                correct: 0,
                explanation: "Template literals use backticks and ${} to embed expressions directly inside strings.",
                codeBehavior: "Outputs: Hello, World!"
            },
            {
                type: "behavior",
                code: `const nums = [1, 2, 3, 4, 5];\nconst big = nums.filter(n => n > 3);\nconsole.log(big);`,
                question: "What does big contain?",
                options: ["[4, 5]", "[1, 2, 3]", "[3, 4, 5]"],
                correct: 0,
                explanation: "filter() returns a new array with only the elements where the callback returns true. Numbers greater than 3 are 4 and 5.",
                codeBehavior: "Outputs: [4, 5]"
            },
            {
                type: "error",
                code: `const counter = {\n    count: 0,\n    increment: () => {\n        this.count++;\n    }\n};`,
                question: "Find the error - Type what's wrong",
                errorAnswer: "this",
                errorInfo: {
                    errorType: "Incorrect this in Arrow Function",
                    description: "Arrow functions do not have their own 'this'. Inside an arrow function method, 'this' refers to the outer scope (window/undefined), not the object.",
                    errorLines: [
                        { line: 3, original: "    increment: () => {", corrected: "    increment() {", position: "method definition" }
                    ],
                    tip: "Use regular function syntax for object methods that need to access 'this'"
                },
                explanation: "Arrow functions don't bind their own 'this'. Use a regular method: increment() { this.count++; }",
                codeBehavior: "this.count++ throws a TypeError or modifies the wrong scope"
            },
            {
                type: "identify",
                code: `const age = 20;\nconst status = age >= 18 ? "adult" : "minor";`,
                question: "What is this pattern called?",
                options: ["Ternary operator", "Arrow function", "Short-circuit"],
                correct: 0,
                explanation: "The ternary operator (condition ? ifTrue : ifFalse) is a concise one-line alternative to an if/else statement.",
                codeBehavior: "status = 'adult' because 20 >= 18 is true"
            },
            {
                type: "behavior",
                code: `const str = "  hello world  ";\nconsole.log(str.trim().toUpperCase());`,
                question: "What does this output?",
                options: ["HELLO WORLD", "  HELLO WORLD  ", "hello world"],
                correct: 0,
                explanation: "trim() removes leading/trailing whitespace. toUpperCase() converts to uppercase. Methods chain left to right.",
                codeBehavior: "Outputs: HELLO WORLD"
            },
            {
                type: "behavior",
                code: `const p = new Promise((resolve) => {\n    setTimeout(() => resolve("done"), 1000);\n});\np.then(val => console.log(val));`,
                question: "What does this log after 1 second?",
                options: ["done", "undefined", "Promise {}"],
                correct: 0,
                explanation: "A Promise resolves with the value passed to resolve(). .then() receives that value. After 1 second the timeout fires and logs 'done'.",
                codeBehavior: "Logs: done (after a 1 second delay)"
            }
        ]
    },

    // CSS COURSE
    'css-course': {
        id: 'css-course',
        name: 'CSS: Styling & Layout Techniques',
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
            },
            {
                type: "identify",
                code: `/* Specificity comparison */\n#nav { color: red; }      /* wins */\n.nav { color: blue; }\ntag { color: green; }`,
                question: "Which rule wins (highest specificity)?",
                options: ["#nav (ID selector)", ".nav (class selector)", "tag (element selector)"],
                correct: 0,
                explanation: "CSS specificity order from highest to lowest: ID (#) > class (.) > element tag. IDs always override classes and tags.",
                codeBehavior: "#nav has highest specificity and applies color: red"
            },
            {
                type: "behavior",
                code: `.box {\n    width: 100px;\n    padding: 10px;\n    border: 5px solid;\n    box-sizing: border-box;\n}`,
                question: "With box-sizing: border-box, what is the total rendered width?",
                options: ["100px", "130px", "110px"],
                correct: 0,
                explanation: "box-sizing: border-box makes padding and border included inside the specified width, keeping the element at exactly 100px.",
                codeBehavior: "Total width stays at 100px"
            },
            {
                type: "error",
                code: `h1 {\n    font-size: 24;\n    color: blue;\n}`,
                question: "Find the CSS error - Type what's missing",
                errorAnswer: "unit",
                errorInfo: {
                    errorType: "Missing Unit on font-size",
                    description: "CSS length values require a unit (px, em, rem, etc.). A bare number like 24 is invalid for font-size.",
                    errorLines: [
                        { line: 2, original: "    font-size: 24;", corrected: "    font-size: 24px;", position: "after the number 24" }
                    ],
                    tip: "Always include a unit for length values in CSS: px, em, rem, %, vh, vw"
                },
                explanation: "font-size needs a unit. Use font-size: 24px; or 24rem; etc.",
                codeBehavior: "font-size is ignored by the browser without a unit"
            },
            {
                type: "identify",
                code: `@media (max-width: 768px) {\n    .menu { display: none; }\n}`,
                question: "What does this CSS rule do?",
                options: ["Hides .menu on screens narrower than 768px", "Hides .menu on all screens", "Applies only on large screens"],
                correct: 0,
                explanation: "@media queries apply styles conditionally. max-width: 768px means the rule only activates when the viewport is 768px wide or narrower.",
                codeBehavior: ".menu becomes hidden on mobile-sized screens"
            },
            {
                type: "behavior",
                code: `.btn {\n    background: blue;\n    transition: background 0.3s ease;\n}\n.btn:hover { background: red; }`,
                question: "What does the transition property do here?",
                options: ["Smoothly animates the background color change over 0.3 seconds", "Instantly changes the color", "Disables hover effects"],
                correct: 0,
                explanation: "transition defines how a property change is animated. 0.3s is the duration and ease is the timing function.",
                codeBehavior: "Background fades from blue to red smoothly when hovered"
            },
            {
                type: "identify",
                code: `.parent { position: relative; }\n.child {\n    position: absolute;\n    top: 0;\n    right: 0;\n}`,
                question: "Where is .child positioned?",
                options: ["Top-right corner of .parent", "Top-right of the page", "Bottom-right of .parent"],
                correct: 0,
                explanation: "position: absolute places an element relative to its nearest positioned ancestor. Since .parent has position: relative, .child anchors to its top-right corner.",
                codeBehavior: ".child appears in the top-right corner of .parent"
            },
            {
                type: "behavior",
                code: `:root { --gap: 16px; }\n.card { margin: var(--gap); }`,
                question: "What value does margin get?",
                options: ["16px", "0", "var"],
                correct: 0,
                explanation: "var(--gap) reads the CSS custom property --gap defined in :root and uses its value (16px).",
                codeBehavior: ".card gets margin: 16px"
            },
            {
                type: "identify",
                code: `.container {\n    display: flex;\n    align-items: center;\n}`,
                question: "What does align-items: center do in flexbox?",
                options: ["Centers items along the cross axis (vertically by default)", "Centers items horizontally", "Stretches items to fill height"],
                correct: 0,
                explanation: "In flexbox, align-items controls alignment on the cross axis. By default (row direction) this is vertical centering.",
                codeBehavior: "Flex children are vertically centered inside the container"
            },
            {
                type: "identify",
                code: `@keyframes slideIn {\n    from { transform: translateX(-100%); }\n    to   { transform: translateX(0); }\n}\n.box { animation: slideIn 0.5s ease; }`,
                question: "What does this CSS do?",
                options: ["Slides .box in from the left over 0.5 seconds", "Rotates .box", "Fades .box in"],
                correct: 0,
                explanation: "@keyframes defines animation steps. translateX(-100%) starts the element off-screen to the left; translateX(0) moves it to its natural position.",
                codeBehavior: ".box animates sliding in from the left when it appears"
            },
            {
                type: "behavior",
                code: `.gradient {\n    background: linear-gradient(to right, #ff0000, #0000ff);\n}`,
                question: "What does this CSS create?",
                options: ["A horizontal gradient from red to blue", "A vertical gradient", "A solid red background"],
                correct: 0,
                explanation: "linear-gradient(to right, ...) creates a smooth color transition flowing from left to right. The first color starts on the left and the last color ends on the right.",
                codeBehavior: "Element shows a smooth red-to-blue gradient from left to right"
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
    showExitButton();
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
    currentCourseId = '';
    currentQuestionIndex = 0;
    currentSessionScore = 0;
    quizInProgress = false;
    
    // Hide the exit button
    hideExitButton();
    
    // Show the course selection screen
    showCourseSelection();
}

// Add click event listener to the exit button
if (exitBtn) {
    exitBtn.addEventListener('click', showExitConfirmation);
}
