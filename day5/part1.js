function part1(data) {
  const almanac = data.toString().split('\n\n');

  let numbers = almanac[0].split(': ')[1].split(' ').map(Number);
  const maps = almanac.slice(1);

  maps.forEach((map) => {
    const instructions = map.split('\n').slice(1);

    instructions.forEach((instruction) => {
      const [destinationRangeStart, sourceRangeStart, rangeLength] = instruction
        .split(' ')
        .map(Number);

      numbers = numbers.map((number) => {
        const isAlreadyChanged = typeof number === 'string';
        if (isAlreadyChanged) {
          return number;
        }

        if (
          number >= sourceRangeStart &&
          number < sourceRangeStart + rangeLength
        ) {
          const offset = number - sourceRangeStart;
          const newNumber = destinationRangeStart + offset;
          return newNumber.toString(); // Making it a string says: it's already changed
        }

        return number;
      });
    });

    numbers = numbers.map(Number); // Converting the numbers back to numbers
  });

  return Math.min(...numbers);
}

module.exports = part1;
