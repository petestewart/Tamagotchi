import data from '../helpers/data/data';
import utils from '../helpers/utils';

const restart = () => {
  window.location.reload();
};

const restartButton = () => {
  setTimeout(() => {
    document.getElementById('restart-button').style.visibility = 'visible';
  }, 4000);
  const domString = 'RESTART';
  utils.printToDom('#restart-button', domString);
};

const gameOver = () => {
  const screen = document.getElementById('app');
  screen.className += 'dead';
  const domString = '<div id="restart-button" style="visibility:hidden;"></div><i class="fas fa-skull-crossbones deathscreen"></i>';
  utils.printToDom('#progress', domString);
  restartButton();
  $(document).ready(() => {
    $('#restart-button').click(restart);
  });
};

const setProgressBar = () => {
  let score = data.getScore();
  if (score <= 0) {
    score = 0;
  }
  const domString = `
    <div id="progress-bar">
    </div>
    <div id="total-score">
    ${score}%
    </div>
    `;
  utils.printToDom('#progress', domString);
  document.getElementById('progress-bar').style.width = (`${(score - 10)}%`);
  if (score <= 0) {
    gameOver();
  }
};

export default { setProgressBar };
