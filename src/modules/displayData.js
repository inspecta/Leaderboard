const id = localStorage.getItem('game');
const display = document.querySelector('.names-scores');

const displayData = (leaderboard) => {
  if (leaderboard) {
    if (!leaderboard.length) display.innerHTML = '<p class=\'details\'>No scores available!</p>';

    leaderboard.forEach((data) => {
      const nameHolder = document.createElement('p');
      nameHolder.classList.add('details');
      nameHolder.id = 'details';
      display.appendChild(nameHolder);
      nameHolder.innerHTML = `${data.user} : ${data.score}`;
    });
  }
};

const fetchScoresFromApi = async () => {
  if (id) {
    const fetchUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    const response = await fetch(fetchUrl);
    const fetchedData = await response.json();
    displayData(fetchedData.result);
  }
};

fetchScoresFromApi();

export default displayData;