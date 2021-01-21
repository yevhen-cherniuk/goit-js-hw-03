// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками.
// Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast.
// Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки

const {today:{highToday, lowToday, todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'},
     tomorrow:{highTomorrow, lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;
console.log(forecast);