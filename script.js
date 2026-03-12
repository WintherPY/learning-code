// Question 1
const question1 = {
  snippet: "console.log('Hello, World!');",
  options: ['Python', 'JavaScript', 'Java'],
  correctAnswer: 'JavaScript',
};

// Question 2
const question2 = {
  snippet: "print('Hello, World!')",
  options: ['C#', 'Python', 'JavaScript'],
  correctAnswer: 'Python',
};

// Question 3
const question3 = {
  snippet: "print('Hello, World!');",
  options: ['Ruby', 'JavaScript', 'Go'],
  correctAnswer: 'Ruby',
};

// Question 4
const question4 = {
  snippet: "echo 'Hello, World!';",
  options: ['PHP', 'Java', 'JavaScript'],
  correctAnswer: 'PHP',
};

// Question 5
const question5 = {
  snippet: "System.out.println('Hello, World!');",
  options: ['Java', 'C++', 'JavaScript'],
  correctAnswer: 'Java',
};

const questions = [question1, question2, question3, question4, question5];

let currentQuestionIndex = 0;

function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    console.log(`Question ${currentQuestionIndex + 1}: What language is this code written in?`);
    console.log(`Code Snippet: ${question.snippet}`);
    question.options.forEach((option, index) => {
      console.log(`${index + 1}: ${option}`);
    });
  } else {
    console.log('Quiz completed!');
  }
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestionIndex];
  if (question.options[selectedOption - 1] === question.correctAnswer) {
    console.log('Correct!');
    currentQuestionIndex++;
    loadQuestion();
  } else {
    console.log(`Incorrect! The correct answer was ${question.correctAnswer}.`);
  }
}

loadQuestion();