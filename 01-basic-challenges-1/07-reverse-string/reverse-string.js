function reverseString(str) {
  // s1 :
  //   let reversedStr = '';
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversedStr += str[i];
  //   }

  //   return reversedStr;

  // s2 :
  //string are immutable in js
  strArr = str.split('');

  let s = 0;
  let e = strArr.length - 1;

  while (s < e) {
    temp = strArr[s];
    strArr[s] = strArr[e];
    strArr[e] = temp;
    s++;
    e--;
  }
  return strArr.join('');

  // s3 :
  // return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

module.exports = reverseString;
