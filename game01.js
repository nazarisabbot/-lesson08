/* Game 01 */

// Генератор чисел
function generatorOfNumbers() {
  const thinkArr = [];

  for (let i = 0; i < 101; i++) {
    thinkArr[i] = i;
  }

  return thinkArr[Math.round(Math.random() * (100 - 1) + 1)];
}

const randomNumber = generatorOfNumbers();

// Запрос ответа
function requestAnswer(message) {
  const answer = +prompt(message);

  if (Number.isInteger(answer)) {
    answerNumber = answer;
    return answer;
  }

  if (!Number.isInteger(answer)) {
    requestAnswer(
      "Я же просил ввести значение именно в цифрах. Пожалуйста введите значение ответа в цифрах пожалуйста"
    );
  }
}

requestAnswer("Введите значение ответа в цифрах пожалуйста");

// Обработчик ответа
function inputHandler(botNumber, clientNumer) {
  if (botNumber < clientNumer) {
    inputHandler(randomNumber, requestAnswer("Меньше"));
  }

  if (botNumber > clientNumer) {
    inputHandler(randomNumber, requestAnswer("Больше"));
  }

  if (botNumber === clientNumer) {
    alert("Правильно!");
    location.reload();
  }
}

inputHandler(randomNumber, answerNumber);
