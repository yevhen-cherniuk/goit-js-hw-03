const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  let getProductPrice
    for (const key of products) {
        if (productName === key.name) {
            getProductPrice = key.price;
            return getProductPrice;
        }  if (productName !== key.name) {
            getProductPrice = null;
        } 
    }
  return getProductPrice;
  
  // Пиши код выше этой строки
}
console.log(getProductPrice('Радар'));
console.log(getProductPrice('Захват'));
console.log(getProductPrice('Сканер'));
console.log(getProductPrice('Дроид'));
console.log(getProductPrice('Двигатель'));