import './style.css';
import Score from './modules/Score.js';
import displayData from './modules/displayData.js';
import LeadershipData from './modules/LeadershipData.js';
import refreshDisplay from './modules/refreshDisplay.js';

const form = document.getElementById('form');
const name = document.getElementById('name');
const score = document.getElementById('score');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newScore = new Score(name.value, score.value);
  LeadershipData.push(newScore);
  form.reset();
});

refreshDisplay();
displayData(LeadershipData);
