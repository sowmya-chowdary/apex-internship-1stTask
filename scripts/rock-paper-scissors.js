const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  tie: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You Lost';
    } else {
      result = 'You Win!';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win!';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else {
      result = 'You Lost';
    }
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You Lost';
    } else if (computerMove === 'Paper') {
      result = 'You Win!';
    } else {
      result = 'Tie';
    }
  }

  if (result === 'You Win!') {
    score.wins += 1;
  } else if (result === 'You Lost') {
    score.losses += 1;
  } else if (result === 'Tie') {
    score.tie += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `
    YOU <img src="images/${playerMove.toLowerCase()}-emoji.png" class="res">
    <img src="images/${computerMove.toLowerCase()}-emoji.png" class="res"> COMPUTER
  `;

  fetchJoke();
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.tie = 0;
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-moves').innerHTML = '';
  document.getElementById('joke').textContent = '';
}

function fetchJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('joke').textContent = `😂 Joke: ${data.joke}`;
    })
    .catch(() => {
      document.getElementById('joke').textContent = 'Could not load a joke.';
    });
}
