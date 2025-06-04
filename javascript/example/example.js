function biggerThanThree(numbers) {
  /* 구현해보세요 */
  let a = [];
  for (let number of numbers) {
    if (number > 3) {
        a.push(number);

    }
    continue;
  }
  return a;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

export default biggerThanThree;
