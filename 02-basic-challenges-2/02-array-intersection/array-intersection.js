function arrayIntersection(arr1, arr2) {
  const intersectionArr = [];

  for (const el of arr1) {
    if (arr2.includes(el)) {
      intersectionArr.push(el);
    }
  }

  return intersectionArr;
}

module.exports = arrayIntersection;
