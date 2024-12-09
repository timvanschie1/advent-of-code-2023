function part2(data) {
  const almanac = data.toString().split('\n\n');

  const startLengthPairs = almanac[0].split(': ')[1].split(' ').map(Number);

  let ranges = [];
  startLengthPairs.forEach((startOrLength, i) => {
    const isStart = i % 2 === 0;
    if (!isStart) return;

    const start = startOrLength;
    const length = startLengthPairs[i + 1];
    const end = start + length - 1; // up to and including

    ranges.push([start, end]);
  });

  const maps = almanac.slice(1);

  maps.forEach((map) => {
    const instructions = map.split('\n').slice(1);

    const easierInstructions = instructions.map((instruction) => {
      const [destinationRangeStart, sourceRangeStart, rangeLength] = instruction
        .split(' ')
        .map(Number);

      const start = sourceRangeStart;
      const end = sourceRangeStart + rangeLength - 1; // up to and including
      const raiser = destinationRangeStart - sourceRangeStart;

      return [start, end, raiser];
    });

    easierInstructions.forEach((instruction) => {
      for (let i = 0; i < ranges.length; i++) {
        const range = ranges[i];

        const isAlreadyChanged = typeof range[0] === 'string';
        if (isAlreadyChanged) {
          continue;
        }

        const [rangeStart, rangeEnd] = range;
        const [instructionStart, instructionEnd, instructionOffset] =
          instruction;

        // Inside range
        let insideStart = Math.max(rangeStart, instructionStart);
        let insideEnd = Math.min(rangeEnd, instructionEnd);
        if (insideEnd - insideStart >= 0) {
          insideStart = insideStart + instructionOffset;
          insideEnd = insideEnd + instructionOffset;
          const rangeInside = [insideStart.toString(), insideEnd.toString()];
          ranges.push(rangeInside);

          // Before rangeheading
          if (rangeStart < instructionStart) {
            const beforeStart = rangeStart;
            const beforeEnd = Math.min(rangeEnd, instructionStart - 1);
            if (beforeEnd - beforeStart >= 0) {
              const rangeBefore = [beforeStart, beforeEnd];
              ranges.push(rangeBefore);
            }
          }

          // After range
          if (rangeEnd > instructionEnd) {
            const afterStart = Math.max(rangeStart, instructionEnd + 1);
            const afterEnd = rangeEnd;
            if (afterEnd - afterStart >= 0) {
              const rangeAfter = [afterStart, afterEnd];
              ranges.push(rangeAfter);
            }
          }
        }
      }
    });

    ranges = ranges.map((range) => range.map(Number)); // Converting the strings back to numbers
  });

  let lowestStart = ranges[0][0];

  console.log(ranges);

  ranges.forEach(([start]) => {
    lowestStart = Math.min(lowestStart, start);
  });

  return lowestStart;
}

module.exports = part2;
