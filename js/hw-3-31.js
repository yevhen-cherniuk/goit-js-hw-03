// Используя операцию rest дополни код функции add() так,
// чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// Пиши код ниже этой строки

function add(...args) {
 let totalValue = 0;
  for (const arg of args){
  totalValue += arg;
  }
  return totalValue;
  
  // Пиши код выше этой строки
}
console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));
