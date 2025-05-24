function expandSection(section) {
  section.classList.add('fullscreen');
}

function closeSection(event) {
  event.stopPropagation();
  const section = event.target.closest('.section');
  section.classList.remove('fullscreen');
}

const quizData = [
  { question: 'What does HTML stand for?', options: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'Hyper Text Marketing Language', 'High Text Marking Level'], answer: 1 },
  { question: 'What is the purpose of CSS?', options: ['To style HTML content', 'To store data', 'To process backend logic', 'To define browser behavior'], answer: 0 },
  { question: 'Which language adds interactivity to web pages?', options: ['HTML', 'CSS', 'JavaScript', 'Python'], answer: 2 },
  { question: 'What does API stand for?', options: ['Advanced Programming Interface', 'Application Programming Interface', 'Applied Protocol Interface', 'Application Process Integration'], answer: 1 },
  { question: 'Which tag is used to create a hyperlink in HTML?', options: ['<link>', '<href>', '<a>', '<url>'], answer: 2 },
  { question: 'Which symbol is used for comments in JavaScript?', options: ['//', '/*', '#', '<!--'], answer: 0 }
];

let currentQuiz = 0;
const questionContainer = document.getElementById('quiz-question');
const optionsContainer = document.getElementById('quiz-options');
let userAnswers = [];

function loadQuiz() {
  const current = quizData[currentQuiz];
  questionContainer.textContent = current.question;
  optionsContainer.innerHTML = '';
  current.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option-button';
    btn.onclick = () => selectAnswer(i, btn);
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(index, btn) {
  userAnswers[currentQuiz] = index;
  Array.from(optionsContainer.children).forEach(child => child.classList.remove('selected'));
  btn.classList.add('selected');
}

function submitAnswer(event) {
  event.stopPropagation();
  if (typeof userAnswers[currentQuiz] === 'undefined') return alert("Please select an option!");
  if (currentQuiz < quizData.length - 1) {
    currentQuiz++;
    loadQuiz();
  } else {
    questionContainer.textContent = "Quiz Completed!";
    optionsContainer.innerHTML = `Correct Answers: ${userAnswers.filter((a, i) => a === quizData[i].answer).length}/${quizData.length}`;
  }
}
loadQuiz();

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/4/4f/C_programming_language.png',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vimlogo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
];
let currentImage = 0;
const carouselImg = document.getElementById('carouselImg');

function showImage(index) {
  carouselImg.src = images[index];
}

function nextImage(event) {
  event.stopPropagation();
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

function prevImage(event) {
  event.stopPropagation();
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}
showImage(currentImage);

async function fetchJoke(event) {
  event.stopPropagation();
  const jokeEl = document.getElementById('joke');
  jokeEl.textContent = 'Loading...';
  const techJoke = 'https://official-joke-api.appspot.com/jokes/programming/random';
  const generalJoke = 'https://official-joke-api.appspot.com/jokes/general/random';
  const url = Math.random() < 0.5 ? techJoke : generalJoke;
  try {
    const res = await fetch(url);
    const data = await res.json();
    jokeEl.textContent = `${data[0].setup} - ${data[0].punchline}`;
  } catch (err) {
    jokeEl.textContent = 'Failed to fetch joke.';
  }
}
