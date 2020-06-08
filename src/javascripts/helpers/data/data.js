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

const moduleInteract = (category, amount) => {
  const halfAmount = Math.round(amount / 2);
  if (category === 'full' && amount > 0) {
    levels.energy -= halfAmount;
  } else if (category === 'full') {
    levels.strength += halfAmount;
  } else if (category === 'strength' && amount < 0) {
    levels.energy += halfAmount;
    levels.full += halfAmount;
    levels.fun += halfAmount;
  } else if (category === 'strength') {
    levels.energy += halfAmount;
  } else if (category === 'energy' && amount < 0) {
    levels.fun += halfAmount;
  } else if (category === 'fun' && amount > 0) {
    levels.energy -= Math.round(halfAmount / 2);
  }
};

const setLevel = (buttonId) => {
  const result = actions[buttonId];
  const category = result[0];
  let amount = result[1];
  amount += Math.round((amount * ((Math.random() * 2) - 1)));
  levels[category] += amount;
  if (levels[category] > 100) {
    levels[category] = 100;
  }
  moduleInteract(category, amount);
};

const getScore = () => {
  let score = (levels.full + levels.fun + levels.strength + levels.energy);
  score = Math.round((score / 400) * 100);
  return score;
};

export default {
  getLevel, setLevel, getScore, getLevels,
};
