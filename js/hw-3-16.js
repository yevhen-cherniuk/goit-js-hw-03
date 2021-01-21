function countTotalSalary(salaries) {
  let totalSalary = 0;
 
     const values = Object.values(salaries);
     console.log(values);
   
  for (const value of values){
totalSalary += value;
}
  
  return totalSalary;
}
console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
 console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));