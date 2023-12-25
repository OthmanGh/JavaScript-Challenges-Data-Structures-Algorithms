function findMissingLetter(arr) {
  let prevCode = arr[0].charCodeAt(0);

  for (let i = 1; i < arr.length; i++) {
    const currentCode = arr[i].charCodeAt(0);
    const diff = currentCode - prevCode;

    if (diff !== 1) {
      return String.fromCharCode(prevCode + 1);
    }

    prevCode = currentCode;
  }

  return '';
}

module.exports = findMissingLetter;
