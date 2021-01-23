// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так,
// чтобы она считала сумму только тех аргументов, которые больше чем заданное число.
// Это число должно быть первым параметром функции.

// Пиши код ниже этой строки
function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > args[0]){
    total += arg;
    }
   }

  return total;
  // Пиши код выше этой строки
}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
