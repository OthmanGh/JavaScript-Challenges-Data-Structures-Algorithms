function sumOfEvenSquares(numbers) {
  // return sum of the squares of the even numbers in the array
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const squares = evenNumbers.map((num) => num * num);
  const sum = squares.reduce((total, num) => total + num, 0);

  return sum;
}

module.exports = sumOfEvenSquares;
