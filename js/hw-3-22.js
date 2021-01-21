// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды.
// Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures.
// Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday, today, tomorrow, 
       icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
      } = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);