function part1(data) {
  const maxCubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

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

  let sumOfIds = 0;

  for (const [key, value] of Object.entries(games)) {
    const gameIsPossible =
      value['red'] <= maxCubes['red'] &&
      value['green'] <= maxCubes['green'] &&
      value['blue'] <= maxCubes['blue'];

    if (gameIsPossible) {
      sumOfIds = sumOfIds + Number(key);
    }
  }

  return sumOfIds;
}

module.exports = part1;
