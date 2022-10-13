import displayData from './displayData.js';

const display = document.querySelector('.names-scores');
const refresh = document.getElementById('refresh-form"');

const refreshDisplay = () => {
  if (!refresh) return;

  refresh.addEventListener('submit', (e) => {
    e.preventDefault();
    display.innerHTML = '';
    displayData();
  });
};

export default refreshDisplay;
