const display = document.querySelector('.names-scores');

const displayData = (LeadershipData) => {
  if (!LeadershipData.length) display.innerHTML = '<p class=\'details\'>No scores available!</p>';

  LeadershipData.forEach((data) => {
    const nameHolder = document.createElement('p');
    nameHolder.classList.add('details');
    nameHolder.id = 'details';
    display.appendChild(nameHolder);
    nameHolder.innerHTML = `${data.name} : ${data.score}`;
  });
};

export default displayData;
