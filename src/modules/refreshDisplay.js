import LeadershipData from "./LeadershipData";
import displayData from "./displayData";

const display = document.querySelector('.names-scores');
const refresh = document.getElementById('refresh')

const refreshDisplay = () => {
  refresh.addEventListener('click', () => {
    display.innerHTML = '';
    displayData(LeadershipData);
  });
}

export default refreshDisplay;
