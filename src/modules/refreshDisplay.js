import LeadershipData from './LeadershipData.js';
import displayData from './displayData.js';

const display = document.querySelector('.names-scores');
const refresh = document.getElementById('refresh');

const refreshDisplay = () => {
  refresh.addEventListener('click', () => {
    display.innerHTML = '';
    displayData(LeadershipData);
  });
};

export default refreshDisplay;
