function findMaxNumber(arr) {
  // return Math.max(...arr);

  max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    max < arr[i] ? (max = arr[i]) : max;
  }
  return max;
}

module.exports = findMaxNumber;
