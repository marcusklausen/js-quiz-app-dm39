

const questions = [
    ['title', 'answer 1'],
    ['Question 1', 'answer 183'],
    ['Question 1', 'answer 1'],
    ['Question 1', 'answer 1'],
    ['Question 1', 'answer 1'],
    ['Question 1', 'answer 1'],
    ['Question 1', 'answer 1'],
    ['Question 1', 'answer 1'],
    ['Question 1', 'answer 1'],
    ['Question 1', 'answer 1'],
    ['Question 1', 'answer 1'],
    ['Question 1', 'answer 1'],
    ['Question 1', 'answer 1']
];

let currentQuestion = questions[1];

function checkAnswer(currentQuestion,answer) {
    if (currentQuestion[1] == answer) {
        alert("nicely done");
    } else {
        alert('failed');
    }
}

let btn = document.querySelector('#submit-btn');

//btn.addEventListener('click', checkAnswer(currentQuestion,"answer 138"))



