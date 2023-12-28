function countDown(number) {
  if (number <= 0) {
    console.log('All done!');
    return;
  }

  console.log(number);
  countDown(number - 1);
}

module.exports = countDown;
