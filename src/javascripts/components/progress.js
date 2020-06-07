import data from '../helpers/data/data';
import utils from '../helpers/utils';

const setProgressBar = () => {
  const score = data.getScore();
  const domString = `
    <div id="progress-bar">
    </div>
    <div id="total-score">
    ${score}%
    </div>
    `;
  utils.printToDom('#progress', domString);
  document.getElementById('progress-bar').style.width = (`${(score - 10)}%`);
};

export default { setProgressBar };
