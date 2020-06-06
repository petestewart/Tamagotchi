import utils from '../helpers/utils';
import data from '../helpers/data/data';

const createQuadrant = (name, level, icon1, button1, icon2, button2) => {
  const score = data.getLevel(level);
  const domString = `
    <div class = "quad-header">${(name.toUpperCase())}</div>
    <div class = "quad-score" id = "${level}-score">${score}</div>
    <div class = "quad-buttons">
      <div class="button" id="${name}1">
        <i class="${icon1}"></i>
        <div class="btn-descr">${button1}</div>
      </div>
      <div class="button" id="${name}2">
      <i class="${icon2}"></i>
      <div class="btn-descr">${button2}</div>
      </div>
    </div>
  `;
  utils.printToDom(`#${name}`, domString);
};

export default { createQuadrant };
