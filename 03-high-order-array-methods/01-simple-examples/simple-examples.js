const { number } = require('yargs');

const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evensNum = numbers.filter((num) => num % 2 === 0);
console.log(evensNum);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((accum, num) => accum + num, 0);
console.log(sum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((num) => {
  console.log(num);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

const greaterThantwo = numbers.find((num) => num > 2);
console.log(greaterThantwo);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber);

/**
 * every: Checks if all array elements satisfy a condition.
 */

const isAllOddNums = numbers.every((num) => num % 2 !== 0);
console.log(isAllOddNums);
