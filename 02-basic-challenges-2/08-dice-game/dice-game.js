const getRandom = () => Math.floor(Math.random() * 6) + 1;

function diceGameSimulation(simulation) {
  const output = [];
  for (let i = 0; i < simulation; i++) {
    const dice1 = getRandom();
    const dice2 = getRandom();

    sum = dice1 + dice2;

    let result = '';

    if (sum === 7 || sum === 11) {
      result = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    } else {
      result = 'roll again';
    }

    output.push({ dice1: dice1, dice2: dice2, sum: sum, result: result });
  }

  return output;
}

module.exports = diceGameSimulation;
