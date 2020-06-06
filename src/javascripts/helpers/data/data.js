const levels = {
  full: 100,
  fun: 50,
  strength: 100,
  energy: 50,
};

const actions = {
  eat1: ['full', 10],
  eat2: ['full', -3],
  play1: ['fun', 50],
  play2: ['fun', 2],
  fight1: ['strength', 1],
  fight2: ['strength', -10],
  sleep1: ['energy', 50],
  sleep2: ['energy', 60],
};

const getLevel = (category) => (levels[category]);

const getLevels = () => (levels);

const setLevel = (buttonId) => {
  const result = actions[buttonId];
  const category = result[0];
  const amount = result[1];
  levels[category] += amount;
  if (levels[category] > 100) {
    levels[category] = 100;
  }
};

const getScore = () => {
  const score = levels.full + levels.fun + levels.strength + levels.sleep;
  return score;
};

export default {
  getLevel, setLevel, getScore, getLevels,
};
