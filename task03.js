/* Task 03 */
function numberGenerator03(amountElements, m, n, typeFilter) {
  const resArr3 = [];

  for (let i = 0; i < amountElements; i++) {
    resArr3[i] = Math.round(Math.random() * (m - n) + n);
  }

  const resEven = resArr3.filter((item) => item % 2 == 0);
  const resOdd = resArr3.filter((item) => item % 2 !== 0);

  if (typeFilter === "even") {
    return resEven;
  }

  if (typeFilter === "odd") {
    return resOdd;
  }
}

const result03 = console.log(numberGenerator03(10, 100, 1, "even"));
