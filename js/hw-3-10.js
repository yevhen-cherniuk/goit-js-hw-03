const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки
for (const key in apartment){
 keys.push(key);
  values.push(apartment[key]);

}
console.log(keys);
console.log(values);