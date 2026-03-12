// ===== QUIZ DATA - Mixed Question Types =====

const quizData = [
    {
        type: "language",
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
        explanation: "This is HTML (HyperText Markup Language). It's used to structure web pages with tags like <html>, <body>, and <h1>."
    },
    {
        type: "function",
        code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);`,
        question: "What does this code do?",
        options: ["Prints all numbers", "Multiplies each number by 2 and creates a new array", "Adds numbers together"],
        correct: 1,
        explanation: "This code uses the map() function to create a new array where each element is multiplied by 2. The result is [2, 4, 6, 8, 10]."
    },
    {
        type: "language",
        code: `body {
    background-color: blue;
    font-size: 16px;
    margin: 0;
}`,
        question: "What programming language is this code written in?",
        options: ["HTML", "CSS", "Python"],
        correct: 1,
        explanation: "This is CSS (Cascading Style Sheets). It's used to style HTML elements with properties like background-color and font-size."
    },
    {
        type: "function",
        code: `function addNumbers(a, b) {
    return a + b;
}
const result = addNumbers(5, 3);
console.log(result);`,
        question: "What does this code do?",
        options: ["Prints 'addNumbers'", "Adds two numbers together and prints the sum (8)", "Multiplies two numbers"],
        correct: 1,
        explanation: "This function takes two parameters (5 and 3), adds them together, and prints the result which is 8."
    },
    {
        type: "language",
        code: `function greet(name) {
    return "Hello, " + name;
}`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Java"],
        correct: 1,
        explanation: "This is JavaScript. It uses the 'function' keyword to define reusable blocks of code."
    },
    {
        type: "function",
        code: `const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => {
    console.log("I like " + fruit);
});`,
        question: "What does this code do?",
        options: ["Prints the whole array", "Prints each fruit name with 'I like' before it", "Removes fruits from array"],
        correct: 1,
        explanation: "This code loops through each fruit in the array and prints 'I like apple', 'I like banana', 'I like orange'."
    },
    {
        type: "language",
        code: `def greet(name):
    return "Hello, " + name`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "Python", "Java"],
        correct: 1,
        explanation: "This is Python. It uses the 'def' keyword for functions and indentation for code blocks."
    },
    {
        type: "function",
        code: `const age = 20;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}`,
        question: "What does this code do?",
        options: ["Prints 'You are an adult'", "Checks if age is 18 or older, prints 'You are an adult' if true", "Asks for user input"],
        correct: 1,
        explanation: "This code checks if the age variable is 18 or greater. Since it is 20, it prints 'You are an adult'."
    },
    {
        type: "language",
        code: `<div class="container">
    <p>This is a paragraph</p>
    <button>Click me</button>
</div>`,
        question: "What programming language is this code written in?",
        options: ["CSS", "Python", "HTML"],
        correct: 2,
        explanation: "This is HTML. It uses tags like <div>, <p>, and <button> to create page structure."
    },
    {
        type: "function",
        code: `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);`,
        question: "What does this code do?",
        options: ["Counts the numbers", "Adds all numbers together and prints the sum (15)", "Prints each number"],
        correct: 1,
        explanation: "This code uses reduce() to add all numbers in the array together. 1+2+3+4+5 = 15."
    },
    {
        type: "language",
        code: `.header {
    color: white;
    background-color: #333;
    padding: 20px;
    border-radius: 5px;
}`,
        question: "What programming language is this code written in?",
        options: ["JavaScript", "CSS", "HTML"],
        correct: 1,
        explanation: "This is CSS. The dot (.) indicates a class selector that styles elements with color, background-color, padding, and border-radius properties."
    },
    {
        type: "function",
        code: `const name = "Alice";
const age = 25;
const message = name + " is " + age + " years old";
console.log(message);`,
        question: "What does this code do?",
        options: ["Prints variable names", "Combines strings and variables to print 'Alice is 25 years old'", "Creates an array"],
        correct: 1,
        explanation: "This code concatenates (combines) strings and variables to create a full message: 'Alice is 25 years old'."
    },
    {
        type: "language",
        code: `const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));`,
        question: "What programming language is this code written in?",
        options: ["Python", "JavaScript", "Ruby"],
        correct: 1,
        explanation: "This is JavaScript. It uses 'const' for variables, array literals, and the forEach method with arrow function syntax."
    },
    {
        type: "function",
        code: `function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));`,
        question: "What does this code do?",
        options: ["Divides numbers by 2", "Checks if a number is even using modulo operator, prints true for 4 and false for 7", "Multiplies numbers"],
        correct: 1,
        explanation: "This function checks if a number is even using the modulo operator (%). If num % 2 === 0, it's even. 4 is even (prints*

