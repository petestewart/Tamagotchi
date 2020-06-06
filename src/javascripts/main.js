import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import '@fortawesome/fontawesome-free';
// import quad from './components/quadrant';

const init = () => {
  eat.makeQuad();
  play.makeQuad();
  fight.makeQuad();
  sleep.makeQuad();
};

init();

console.error('testing');
