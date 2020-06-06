// import utils from '../helpers/utils';
import quad from './quadrant';
import buttons from './buttons';

const makeQuad = () => {
  quad.createQuadrant('eat', 'full', 'fas fa-seedling', 'healthy food', 'fas fa-candy-cane', 'unhealthy food');
  buttons.addButtonEvents();
};

// <i class="fas fa-candy-cane"></i>
// <i class="fas fa-seedling"></i>

export default { makeQuad };
