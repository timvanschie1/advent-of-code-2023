function part1(data) {
  let sum = 0;

  function isPartNumber(rowIndex, charFromIndex, charTillIndex) {
    let isPartNumber = false;

    for (let r = rowIndex - 1; r <= rowIndex + 1; r++) {
      const row = data[r];

      if (row === undefined) continue;

      for (let c = charFromIndex - 1; c < charTillIndex + 1; c++) {
        const char = row[c];

        if (char === undefined) continue;
        if (char === '.') continue;
        if (!isNaN(char)) continue;

        isPartNumber = true;
      }
    }

    return isPartNumber;
  }

  data.forEach((row, rowIndex) => {
    let i = 0;

    while (i < row.length) {
      const stringFromHere = row.substring(i);

      let part = stringFromHere.split(/\D/)[0];

      if (part === '' || isNaN(part)) {
        i++;
        continue;
      }

      if (isPartNumber(rowIndex, i, i + part.length)) {
        sum = sum + Number(part);
      }

      i = i + part.length;
    }
  });

  return sum;
}

module.exports = part1;
