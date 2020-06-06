import utils from '../helpers/utils';

const createQuadrant = (name, start, icon1, button1, icon2, button2) => {
  const domString = `
    <div class = "quad-header">${(name.toUpperCase())}</div>
    <div class = "quad-score">${start}</div>
    <div class = "quad-buttons">
      <div class="button">
        <i class="${icon1}"></i>
        <div class="btn-descr">${button1}</div>
      </div>
      <div class="button">
      <i class="${icon2}"></i>
      <div class="btn-descr">${button2}</div>
      </div>
    </div>
  `;
  utils.printToDom(`#${name}`, domString);
};

export default { createQuadrant };
