/* Task 02 */
function numberGenerator02(amountElements, m, n) {
  const resArr2 = [];
  for (let i = 0; i < amountElements; i++) {
    resArr2[i] = Math.round(Math.random() * (m - n) + n);
  }
  return resArr2;
}

const result02 = console.log(numberGenerator02(10, 5, 10));
