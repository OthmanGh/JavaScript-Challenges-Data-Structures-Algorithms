// ! Solution 1 :
// function removeDuplicates(arr) {
//   set = new Set(arr);
//   return Array.from(set);
// }

// ! Solution 2 :
function removeDuplicates(arr) {
  uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

module.exports = removeDuplicates;
