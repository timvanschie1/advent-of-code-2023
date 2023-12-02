function part2(data) {
  function getStringWithNumbersAsStrings(string) {
    let newString = '';

    [...string].forEach((char, i) => {
      if (!Number.isNaN(Number(char))) {
        newString = newString + char;
        return;
      }

      const stringFromHere = string.substring(i);

      if (stringFromHere.startsWith('one')) {
        newString = newString + '1';
      } else if (stringFromHere.startsWith('two')) {
        newString = newString + '2';
      } else if (stringFromHere.startsWith('three')) {
        newString = newString + '3';
      } else if (stringFromHere.startsWith('four')) {
        newString = newString + '4';
      } else if (stringFromHere.startsWith('five')) {
        newString = newString + '5';
      } else if (stringFromHere.startsWith('six')) {
        newString = newString + '6';
      } else if (stringFromHere.startsWith('seven')) {
        newString = newString + '7';
      } else if (stringFromHere.startsWith('eight')) {
        newString = newString + '8';
      } else if (stringFromHere.startsWith('nine')) {
        newString = newString + '9';
      }
    });

    return newString;
  }

  const filteredRows = data.map(getStringWithNumbersAsStrings);

  let total = 0;
  filteredRows.forEach(row => {
    const totalString = row[0] + row[row.length - 1];
    total = total + Number(totalString);
  })

  return total;
}

module.exports = part2;