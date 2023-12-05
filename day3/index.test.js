const { test, expect } = require('@jest/globals');
const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
  '467..114..',
  '...*......',
  '..35..633.',
  '......#...',
  '617*......',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$.*....',
  '.664.598..',
];

test('day 3, part 1', () => expect(part1(testData)).toBe(4361));
test('day 3, part 2', () => expect(part2(testData)).toBe(467835));
