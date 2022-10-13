const gameName = document.getElementById('game-name');

const createGameId = async () => {
  const data = { name: gameName.value };
  const fetchUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const resolve = await fetch(fetchUrl, params);
    return await resolve.json();
  } catch (error) {
    return error;
  }
};

export default createGameId;