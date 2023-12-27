function validatePassword(password) {
  if (password.length < 8) return false;

  const hasCapitalChar = password
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasSmallChar = password
    .split('')
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasDigit = password
    .split('')
    .some((char) => !isNaN(parseInt(char, 10)));
  return hasCapitalChar && hasSmallChar && hasDigit;
}

module.exports = validatePassword;
