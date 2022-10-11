import './style.css'
import Score from './modules/Score'
import displayData from './modules/displayData'
import LeadershipData from './modules/LeadershipData'
import refreshDisplay from './modules/refreshDisplay'

const form = document.getElementById('form')
const name = document.getElementById('name')
const score = document.getElementById('score')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newScore = new Score(name.value, score.value);
  LeadershipData.push(newScore);
})

refreshDisplay();
displayData(LeadershipData);
