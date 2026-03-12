// ===== QUIZ DATA - Progressive Difficulty =====

const quizData = [
    // LEVEL 1 - BEGINNER (Questions 1-5)
    {
        difficulty: 1,
        code: `let name = "Alice";
console.log(name);`,
        question: "What will this code print?",
        options: ["Alice", "name", "undefined", "null"],
        correct: 0,
        hint: "The variable 'name' contains the string 'Alice'. Console.log prints its value.",
        explanation: "This code prints 'Alice' because the variable name holds that string value."
    },
    {
        difficulty: 1,
        code: `let num = 5;
let result = num + 3;
console.log(result);`,
        question: "What is the output?",
        options: ["5", "3", "8", "53"],
        correct: 2,
        hint: "Add 5 + 3 together.",
        explanation: "5 + 3 = 8. The variable 'result' stores this sum."
    },
    {
        difficulty: 1,
        code: `let x = 10;
let y = 20;
console.log(x + y);`,
        question: "What does console.log display?",
        options: ["10", "20", "30", "1020"],
        correct: 2,
        hint: "10 + 20 equals what?",
        explanation: "10 + 20 = 30. This is basic addition in JavaScript."
    },
    {
        difficulty: 1,
        code: `let fruit = "apple";
console.log(fruit.length);`,
        question: "What does .length return?",
        options: ["a", "5", "apple", "error"],
        correct: 1,
        hint: "Count the characters in 'apple': a-p-p-l-e",
        explanation: "The string 'apple' has 5 characters, so .length returns 5."
    },
    {
        difficulty: 1,
        code: `let age = 25;
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}`,
        question: "What will print?",
        options: ["Not Adult", "Adult", "25", "error"],
        correct: 1,
        hint: "Is 25 greater than 18?",
        explanation: "Since 25 > 18 is true, the if block executes and prints 'Adult'."
    },

    // LEVEL 2 - EASY (Questions 6-10)
    {
        difficulty: 2,
        code: `let numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]);`,
        question: "What is printed?",
        options: ["1", "2", "3", "5"],
        correct: 2,
        hint: "Arrays start at index 0. Index 2 is the third element.",
        explanation: "Arrays are zero-indexed. Index 0=1, 1=2, 2=3. So numbers[2] is 3."
    },
    {
        difficulty: 2,
        code: `for (let i = 0; i < 3; i++) {
    console.log(i);
}`,
        question: "What is the output?",
        options: ["0 1 2", "1 2 3", "0 1 2 3", "3"],
        correct: 0,
        hint: "The loop runs while i < 3, starting from 0.",
        explanation: "i starts at 0. Loop runs: i=0, i=1, i=2. Then i=3 stops the loop."
    },
    {
        difficulty: 2,
        code: `function greet(name) {
    return "Hello " + name;
}
console.log(greet("Bob"));`,
        question: "What is the output?",
        options: ["Hello", "Bob", "Hello Bob", "function"],
        correct: 2,
        hint: "The function concatenates 'Hello ' with the name parameter.",
        explanation: "The function returns 'Hello ' + 'Bob' = 'Hello Bob'."
    },
    {
        difficulty: 2,
        code: `let obj = {name: "John", age: 30};
console.log(obj.name);`,
        question: "What prints?",
        options: ["John", "{name: 'John'}", "30", "undefined"],
        correct: 0,
        hint: "Use dot notation to access object properties.",
        explanation: "obj.name accesses the 'name' property of the object, which is 'John'."
    },
    {
        difficulty: 2,
        code: `let arr = [10, 20, 30];
arr.push(40);
console.log(arr.length);`,
        question: "What is arr.length?",
        options: ["3", "4", "40", "undefined"],
        correct: 1,
        hint: "push() adds an element to the array. What's the new length?",
        explanation: "The array started with 3 elements. push(40) adds one more, so length is 4."
    },

    // LEVEL 3 - INTERMEDIATE (Questions 11-15)
    {
        difficulty: 3,
        code: `let arr = [1, 2, 3, 4, 5];
let doubled = arr.map(x => x * 2);
console.log(doubled);`,
        question: "What is the output?",
        options: ["[2, 4, 6, 8, 10]", "[1, 2, 3, 4, 5]", "[1, 4, 9, 16, 25]", "error"],
        correct: 0,
        hint: "map() applies the arrow function to each element.",
        explanation: "map() multiplies each element by 2: 1*2=2, 2*2=4, etc."
    },
    {
        difficulty: 3,
        code: `let arr = [1, 2, 3, 4, 5];
let filtered = arr.filter(x => x > 2);
console.log(filtered);`,
        question: "What is filtered?",
        options: ["[1, 2]", "[3, 4, 5]", "[2, 3, 4, 5]", "true"],
        correct: 1,
        hint: "filter() keeps only elements where the condition is true.",
        explanation: "filter() returns only elements greater than 2: [3, 4, 5]."
    },
    {
        difficulty: 3,
        code: `const x = 5;
x = 10;
console.log(x);`,
        question: "What happens?",
        options: ["10", "5", "Error", "undefined"],
        correct: 2,
        hint: "const variables cannot be reassigned.",
        explanation: "const prevents reassignment. Trying to change x causes an error."
    },
    {
        difficulty: 3,
        code: `let obj1 = {a: 1};
let obj2 = obj1;
obj2.a = 2;
console.log(obj1.a);`,
        question: "What prints?",
        options: ["1", "2", "undefined", "error"],
        correct: 1,
        hint: "Objects are passed by reference in JavaScript.",
        explanation: "obj2 references the same object as obj1. Changing obj2.a also changes obj1.a."
    },
    {
        difficulty: 3,
        code: `let str = "JavaScript";
console.log(str.toUpperCase());`,
        question: "What is the output?",
        options: ["javascript", "JAVASCRIPT", "JavaScript", "error"],
        correct: 1,
        hint: "toUpperCase() converts all letters to uppercase.",
        explanation: "toUpperCase() returns 'JAVASCRIPT' (all uppercase)."
    },

    // LEVEL 4 - ADVANCED (Questions 16-20)
    {
        difficulty: 4,
        code: `function outer() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let counter = outer();
console.log(counter());
console.log(counter());`,
        question: "What is the second output?",
        options: ["0", "1", "2", "undefined"],
        correct: 2,
        hint: "This is a closure. The inner function remembers 'count'.",
        explanation: "The first call returns 1, the second returns 2. Closures maintain state."
    },
    {
        difficulty: 4,
        code: `let promise = new Promise((resolve) => {
    resolve("Success!");
});
promise.then(result => console.log(result));`,
        question: "What prints?",
        options: ["Promise", "Success!", "undefined", "null"],
        correct: 1,
        hint: "then() handles the resolved value.",
        explanation: "When the promise resolves with 'Success!', then() logs it."
    },
    {
        difficulty: 4,
        code: `class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a sound");
    }
}
let dog = new Animal("Dog");
dog.speak();`,
        question: "What prints?",
        options: ["makes a sound", "Dog", "Dog makes a sound", "error"],
        correct: 2,
        hint: "The speak method uses 'this.name' which is 'Dog'.",
        explanation: "The speak method accesses this.name ('Dog') and concatenates the message."
    },
    {
        difficulty: 4,
        code: `let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);`,
        question: "What is sum?",
        options: ["15", "0", "[1, 2, 3, 4, 5]", "error"],
        correct: 0,
        hint: "reduce() accumulates values. Starting at 0, add each number.",
        explanation: "reduce() sums: 0+1+2+3+4+5 = 15."
    },
    {
        difficulty: 4,
        code: `let obj1 = {x: 1, y: 2};
let obj2 = {...obj1, y: 3};
console.log(obj2.y);`,
        question: "What prints?",
        options: ["2", "3", "undefined", "error"],
        correct: 1,
        hint: "The spread operator creates a copy and overwrites y.",
        explanation: "The spread operator copies obj1, but y: 3 overrides the original y: 2."
    }
];

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', initializeQuiz);

let currentQuestionIndex = 0;
let score = 0;
let answeredCorrectly = false;

function initializeQuiz() {
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showCompletion();
        return;
    }
    
    const question = quizData[currentQuestionIndex];
    document.getElementById('code-display').textContent = question.code;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectOption(index, question);
        optionsContainer.appendChild(button);
    });
    
    updateProgress();
    answeredCorrectly = false;
    document.getElementById('hint-box').style.display = 'none';
}

function selectOption(index, question) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');
}

function submitAnswer() {
    const selectedButton = document.querySelector('.option-btn.selected');
    if (!selectedButton) {
        alert('Please select an option');
        return;
    }
    
    const question = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const selectedIndex = Array.from(buttons).indexOf(selectedButton);
    
    const feedbackDiv = document.getElementById('feedback-message');
    const feedbackSection = document.getElementById('feedback-section');
    
    if (selectedIndex === question.correct) {
        score++;
        answeredCorrectly = true;
        selectedButton.classList.add('correct');
        feedbackDiv.textContent = '✓ Correct! ' + question.explanation;
        feedbackDiv.className = 'feedback correct';
    } else {
        selectedButton.classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
        feedbackDiv.textContent = '✗ Incorrect. ' + question.explanation;
        feedbackDiv.className = 'feedback incorrect';
    }
    
    feedbackSection.style.display = 'block';
    document.getElementById('score').textContent = score;
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
    buttons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById('feedback-section').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
    loadQuestion();
}

function updateProgress() {
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = Math.round(progress) + '%';
}

function showHint() {
    const question = quizData[currentQuestionIndex];
    document.getElementById('hint-text').textContent = question.hint;
    document.getElementById('hint-box').style.display = 'block';
}

function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputDiv = document.getElementById('output');
    
    try {
        let output = '';
        const originalLog = console.log;
        console.log = function(...args) {
            output += args.join(' ') + '\n';
        };
        
        eval(code);
        console.log = originalLog;
        
        outputDiv.innerHTML = '<span class="success">' + (output || 'Code executed successfully') + '</span>';
    } catch (e) {
        outputDiv.innerHTML = '<span class="error">Error: ' + e.message + '</span>';
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = '0';
    document.getElementById('feedback-section').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
    loadQuestion();
}

function showCompletion() {
    const percentage = (score / quizData.length) * 100;
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = `
        <div style="text-align: center; padding: 50px;">
            <h2>Quiz Complete! 🎉</h2>
            <p style="font-size: 24px; color: #00d4ff;">Score: ${score}/${quizData.length}</p>
            <p style="font-size: 18px;">Percentage: ${Math.round(percentage)}%</p>
            <button class="btn btn-reset" onclick="location.reload()">Try Again</button>
        </div>
    `;
}
