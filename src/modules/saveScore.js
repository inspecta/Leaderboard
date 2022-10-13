import Score from './Score.js';

const name = document.getElementById('name');
const score = document.getElementById('score');

const id = localStorage.getItem('game');

const saveScore = async () => {
  const data = new Score(name.value, score.value);
  const saveUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const result = await fetch(saveUrl, params);
    return await result.json();
  } catch (error) {
    return error;
  }
};

export default saveScore;