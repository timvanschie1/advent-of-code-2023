const {test, expect} = require("@jest/globals");
const part1 = require('./part1');
const part2 = require('./part2');

const testDataPartOne = [
  "1abc2",
  "pqr3stu8vwx",
  "a1b2c3d4e5f",
  "treb7uchet"
]

const testDataPartTwo = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen'
]

test('day 1, part 1', () => expect(part1(testDataPartOne)).toBe(142));
test('day 1, part 2', () => expect(part2(testDataPartTwo)).toBe(281));