const validatePassword = require('./password-validator');

const result1 = validatePassword('abc12345');
const result2 = validatePassword('passwordAs5');

console.log(result1);
console.log(result2);
