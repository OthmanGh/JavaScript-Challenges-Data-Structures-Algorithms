// ! solution 1 :
// function isPalindrome(str) {
//   formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   reversedStr = formattedStr.split('').reverse().join('');
//   return formattedStr === reversedStr;
// }

// ! Solution 2 :
function isPalindrome(str) {
  const formattedStr = removeNoneAlphaNumeric(str.toLowerCase());
  return formattedStr === reverseStr(formattedStr);
}

const removeNoneAlphaNumeric = function (str) {
  let formattedStr = [];
  for (let i = 0; i < str.length; i++) {
    if (isAlphaNumerice(str[i])) {
      formattedStr.push(str[i]);
    }
  }
  return formattedStr.join('');
};

const isAlphaNumerice = function (char) {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
};

const reverseStr = function (str) {
  reversedStr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return reversedStr.join('');
};

module.exports = isPalindrome;
