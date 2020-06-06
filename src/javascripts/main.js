import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import '@fortawesome/fontawesome-free';
import 'jquery';

const init = () => {
  eat.makeQuad();
  play.makeQuad();
  fight.makeQuad();
  sleep.makeQuad();
};

init();

console.error('testing');
