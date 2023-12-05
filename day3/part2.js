function part2(data) {
  let sum = 0;

  function getGearNumbersFromPart(row, partStartIndex, partEndIndex) {
    if (row === undefined) return [];

    const checkedCharIndexes = [];
    const gearNumbers = [];

    for (let i = partStartIndex; i <= partEndIndex; i++) {
      const char = row[i];

      const alreadyChecked = checkedCharIndexes.includes(i);
      if (alreadyChecked) continue;
      checkedCharIndexes.push(i);

      if (isNaN(char)) continue;

      let charString = char;

      let searchIndex = i;
      let searchLeft = true;
      while (searchLeft) {
        searchIndex--;

        const alreadyChecked = checkedCharIndexes.includes(searchIndex);
        if (alreadyChecked) {
          searchLeft = false;
          continue;
        }
        checkedCharIndexes.push(searchIndex);

        const char = row[searchIndex];
        if (isNaN(char)) {
          searchLeft = false;
          continue;
        }

        charString = char + charString;
      }

      searchIndex = i;
      let searchRight = true;
      while (searchRight) {
        searchIndex++;

        const alreadyChecked = checkedCharIndexes.includes(searchIndex);
        if (alreadyChecked) {
          searchRight = false;
          continue;
        }
        checkedCharIndexes.push(searchIndex);

        const char = row[searchIndex];
        if (isNaN(char)) {
          searchRight = false;
          continue;
        }

        charString = charString + char;
      }

      gearNumbers.push(Number(charString));
    }

    return gearNumbers;
  }

  data.forEach((row, rowIndex) => {
    [...row].forEach((char, charIndex) => {
      if (char !== '*') return;

      let gearNumbers = [];

      const topRow = data[rowIndex - 1];
      gearNumbers = [
        ...gearNumbers,
        ...getGearNumbersFromPart(topRow, charIndex - 1, charIndex + 1),
      ];

      // left char
      gearNumbers = [
        ...gearNumbers,
        ...getGearNumbersFromPart(row, charIndex - 1, charIndex - 1),
      ];

      // right char
      gearNumbers = [
        ...gearNumbers,
        ...getGearNumbersFromPart(row, charIndex + 1, charIndex + 1),
      ];

      const bottomRow = data[rowIndex + 1];
      gearNumbers = [
        ...gearNumbers,
        ...getGearNumbersFromPart(bottomRow, charIndex - 1, charIndex + 1),
      ];

      if (gearNumbers.length === 2) {
        sum = sum + gearNumbers[0] * gearNumbers[1];
      }
    });
  });

  return sum;
}

module.exports = part2;
