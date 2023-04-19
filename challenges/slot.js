/**
 * You are working in a casino and are tasked with developing a classic slot game machine.
 *
 * Considering a slot machine with three rows and three vertical reels defined like this:
 * Reel1: ['cherry', 'lemon', 'apple',  'lemon', 'banana', 'banana', 'lemon', 'lemon']
 * Reel2: ['lemon', 'apple',  'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon']
 * Reel3: ['lemon', 'apple',  'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']
 *
 * Using these reels, complete the calculateResult function so that, when it's called, it gives back the result of a spin.
 * The calculateResult function takes 3 arguments, each specifying a stopping position for the corresponding reel.
 * The stopping positions describe the array index of the first symbol shown in each column. Since the machine shows
 * three rows of each reel, given a stopping position i, the reel will show symbols i, i+1, and i+2.
 *
 * 3 Cherries in a row: won 50 coins
 * 2 Cherries in a row: won 40 coins
 * 3 Apples in a row: won 20 coins
 * 2 Apples in a row: won 10 coins
 * 3 Bananas in a row: won 15 coins
 * 2 Bananas in a row: won 5 coins
 * 3 Lemons in a row: won 3 coins
 *
 *
 *   Example:
 *    Given the stopping positions (0, 2, 7), the slot machine would look like this:
 *
 *       Reel1      Reel2     Reel3
 *    --------------------------------
 *    |  cherry  |  lemon  |  lemon  |
 *    |  lemon   |  lemon  |  lemon  |
 *    |  apple   |  cherry |  apple  |
 *    --------------------------------
 *
 *   The machine shows three lemons in the second row (gives 3 coins) and two apples in the third row (gives 10 coins).
 *   Therefore the total win amount is 13.
 *
 */

const reel1 = [
  'cherry',
  'lemon',
  'apple',
  'lemon',
  'banana',
  'banana',
  'lemon',
  'lemon',
];
const reel2 = [
  'lemon',
  'apple',
  'lemon',
  'lemon',
  'cherry',
  'apple',
  'banana',
  'lemon',
];
const reel3 = [
  'lemon',
  'apple',
  'lemon',
  'apple',
  'cherry',
  'lemon',
  'banana',
  'lemon',
];
function calculateRowPoints(row) {
  let totalPoints = 0;
  let lemons = 0,
    apples = 0,
    bananas = 0,
    cherries = 0;

  row.forEach((el) => {
    if (el === 'lemon') lemons += 1;
    if (el === 'apple') apples += 1;
    if (el === 'banana') bananas += 1;
    if (el === 'cherry') cherries += 1;
  });

  if (cherries === 3) totalPoints += 50;
  if (cherries === 2) totalPoints += 40;
  if (apples === 3) totalPoints += 20;
  if (apples === 2) totalPoints += 10;
  if (bananas === 3) totalPoints += 15;
  if (bananas === 2) totalPoints += 5;
  if (lemons === 3) totalPoints += 3;

  return totalPoints;
}

function calculateResult(position1, position2, position3) {
  const firstRow = [reel1[position1], reel2[position2], reel3[position3]];
  const secondRow = [
    reel1[position1 + 1] ?? reel1[position1 + 1 - reel1.length],
    reel2[position2 + 1] ?? reel1[position2 + 1 - reel2.length],
    reel3[position3 + 1] ?? reel3[position3 + 1 - reel3.length],
  ];
  const thirdRow = [
    reel1[position1 + 2] ?? reel1[position1 + 2 - reel1.length],
    reel2[position2 + 2] ?? reel2[position2 + 2 - reel2.length],
    reel3[position3 + 2] ?? reel3[position3 + 2 - reel3.length],
  ];

  const firstRowPoints = calculateRowPoints(firstRow);
  const secondRowPoints = calculateRowPoints(secondRow);
  const thirdRowPoints = calculateRowPoints(thirdRow);

  const totalPoints = firstRowPoints + secondRowPoints + thirdRowPoints;
  return totalPoints;
}

calculateResult(0, 2, 7);

module.exports = calculateResult;