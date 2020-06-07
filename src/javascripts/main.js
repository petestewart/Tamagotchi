import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import '@fortawesome/fontawesome-free';
import 'jquery';
import progress from './components/progress';

const init = () => {
  eat.makeQuad();
  play.makeQuad();
  fight.makeQuad();
  sleep.makeQuad();
  progress.setProgressBar();
};

init();

console.error('testing');
