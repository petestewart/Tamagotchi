import data from '../helpers/data/data';
import utils from '../helpers/utils';

const updateDisplay = () => {
  const levels = data.getLevels();
  const categories = Object.keys(levels);
  for (let i = 0; i < categories.length; i += 1) {
    utils.printToDom(`#${categories[i]}-score`, levels[categories[i]]);
  }
};

const addToScore = (event) => {
  const button = event.currentTarget.id;
  data.setLevel(button);
  updateDisplay();
};

const addButtonEvents = () => {
  $(document).ready(() => {
    $('div.button').click(addToScore);
  });
};

export default { addButtonEvents };
