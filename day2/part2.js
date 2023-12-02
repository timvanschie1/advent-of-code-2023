function part1(data) {
  const games = {};

  data.forEach((row) => {
    const [idPart, gamePart] = row.split(': ');
    const id = Number(idPart.replace('Game ', ''));
    games[id] = {};

    const strippedGamePart = gamePart.replaceAll(';', ',');
    const gameArray = strippedGamePart.split(', ');

    gameArray.forEach((set) => {
      const [amountStr, color] = set.split(' ');
      games[id][color] = Math.max(games[id][color] || 0, Number(amountStr));
    });
  });

  let sumOfPowerOfSets = 0;

  for (const [key, value] of Object.entries(games)) {
    sumOfPowerOfSets =
      sumOfPowerOfSets +
      (value['red'] || 0) * (value['green'] || 0) * (value['blue'] || 0);
  }

  return sumOfPowerOfSets;
}

module.exports = part1;
