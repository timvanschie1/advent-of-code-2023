function part1(data) {
  const filteredRows = data.map(string =>
      [...string]
          .map(char => Number(char))
          .filter(nr => !Number.isNaN(nr))
          .map(char => String(char))
  );

  let total = 0;
  filteredRows.forEach(row => {
    const totalString = row[0] + row[row.length - 1];
    total = total + Number(totalString);
  })

  return total;
}

module.exports = part1;