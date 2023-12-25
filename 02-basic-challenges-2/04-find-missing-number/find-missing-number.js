function findMissingNumber(arr) {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;

  let currentSum = 0;
  for (const num of arr) {
    currentSum += num;
  }

  return totalSum - currentSum;
}

module.exports = findMissingNumber;
