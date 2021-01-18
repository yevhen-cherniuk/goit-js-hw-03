function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  const values = [];
  for (const key of values){
    if (salaries.hasOwnProperty(key)){
  
        values.concat(Object.values(salaries));
     
    }
  }
for (let i = 0 ; i < values.length; i += 1){
totalSalary += values[i];
}
  // Пиши код выше этой строки
  return totalSalary;
}
