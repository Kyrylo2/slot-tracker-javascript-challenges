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

/**

Calculates the total points earned for a given row of fruits in a slot machine game.
@param {Array} row - An array of strings representing the fruits in a row.
@returns {number} - The total points earned for the row, or 0 if the row is empty.
*/
function calculateRowPoints(row) {
  let totalPoints = 0;

  // ---- vol 1 ----
  // const fruitCounts = {};

  // row.forEach((fruit) => {
  //   fruitCounts[fruit] = fruitCounts[fruit] ? fruitCounts[fruit] + 1 : 1;
  // });

  // if (fruitCounts.cherry === 3) totalPoints += 50;
  // if (fruitCounts.cherry === 2) totalPoints += 40;
  // if (fruitCounts.apple === 3) totalPoints += 20;
  // if (fruitCounts.apple === 2) totalPoints += 10;
  // if (fruitCounts.banana === 3) totalPoints += 15;
  // if (fruitCounts.banana === 2) totalPoints += 5;
  // if (fruitCounts.lemon === 3) totalPoints += 3;

  // ---- vol 2 ----
  const fruitCounts = row.reduce((counts, fruit) => {
    return { ...counts, [fruit]: (counts[fruit] || 0) + 1 };
  }, {});

  const FRUIT_POINTS = {
    cherry: { 2: 40, 3: 50 },
    apple: { 2: 10, 3: 20 },
    banana: { 2: 5, 3: 15 },
    lemon: { 3: 3 },
  };

  for (const [fruit, count] of Object.entries(fruitCounts)) {
    const fruitPoints = FRUIT_POINTS[fruit];

    if (fruitPoints) {
      totalPoints += fruitPoints[count] || 0;
    }
  }

  return totalPoints;
}

/**

Calculates the total points earned for a slot machine game round.
@param {number} position1 - The starting position of the first reel.
@param {number} position2 - The starting position of the second reel.
@param {number} position3 - The starting position of the third reel.
@returns {number} - The total points earned for the round.
*/
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
