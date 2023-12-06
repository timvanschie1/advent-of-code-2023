function part2(data) {
  const copiesPerCard = {};

  // Create initial copiesPerCard object
  data.forEach((row) => {
    const cartNrString = row.split(':')[0].trim();
    const cartNr = Number(cartNrString.split('Card ')[1]);
    copiesPerCard[cartNr] = 1;
  });

  data.forEach((row) => {
    const [cartNrString, allNumbersString] = row
      .split(':')
      .map((string) => string.trim());

    const cartNr = Number(cartNrString.split('Card ')[1]);

    let [winningNumbersString, haveNumbersString] = allNumbersString.split('|');
    winningNumbersString = winningNumbersString.trim();
    const winningNumbers = winningNumbersString.split(/\s+/);

    haveNumbersString = haveNumbersString.trim();
    const haveNumbers = haveNumbersString.split(/\s+/);

    let amountOfWinningNumbers = 0;

    haveNumbers.forEach((haveNumber) => {
      if (winningNumbers.includes(haveNumber)) {
        amountOfWinningNumbers++;
      }
    });

    const reach = amountOfWinningNumbers;

    for (let i = 1; i <= reach; i++) {
      const reachCartNr = cartNr + i;
      const cardExists = copiesPerCard[reachCartNr] !== undefined;
      if (cardExists) {
        copiesPerCard[reachCartNr] =
          copiesPerCard[reachCartNr] + copiesPerCard[cartNr];
      }
    }
  });

  let sum = 0;
  Object.values(copiesPerCard).forEach((value) => {
    sum = sum + value;
  });

  return sum;
}

module.exports = part2;
