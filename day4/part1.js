function part1(data) {
  let sum = 0;

  function getCardRowScore(amountOfWinningNumbers) {
    if (amountOfWinningNumbers === 0) {
      return 0;
    }

    if (amountOfWinningNumbers === 1) {
      return 1;
    }

    let score = 1;
    for (let i = 2; i <= amountOfWinningNumbers; i++) {
      score = score * 2;
    }

    return score;
  }

  data.forEach((row) => {
    const numbers = row.split(':')[1].trim();
    let [winningNumbersString, haveNumbersString] = numbers.split('|');
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

    sum = sum + getCardRowScore(amountOfWinningNumbers);
  });

  return sum;
}

module.exports = part1;
