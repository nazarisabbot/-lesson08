/* Task 01 */
function numberGenerator(amountElements) {
  const resArr1 = [];
  for (let i = 0; i < amountElements; i++) {
    resArr1[i] = Math.round(Math.random() * (101 - 1) + 1);
  }
  return resArr1;
}

const result01 = console.log(numberGenerator(10));
