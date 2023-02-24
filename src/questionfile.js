export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore : 5 , 
    questions: [
      {
        question:
          'How to write an "if" statement in js to check if "i" is not equal to 5?',
          
          letters:['A','B','C','D'],
        choices: ['if i <> 5', 'if i =! 5 then', 'if (i <> 5)', 'if (i != 5)'],
        type: 'MCQs',
        correctAnswer: 'if (i != 5)',
      },
      {
        question:
          'What is the default port number in which the application run ?',
        choices: ['3000', '8080', '5000', '3030'],
        type: 'MCQs',
        correctAnswer: '3000',
      },
      {
        question:
          'Which of the following methods  form using Javascript?',
        choices: [
          'document',
          'console',
          'window.alert',
          'of above',
        ],
        type:'MCQs', 
        correctAnswer: 'of above',
      },
      {
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: ['<scripting>', '<script>', '<js>', '<javascript>'],
        type: 'MCQs',
        correctAnswer: '<script>',
      },
    ],
  }