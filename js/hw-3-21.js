
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня(meanTemperature).
// Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday, today, tomorrow} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);
