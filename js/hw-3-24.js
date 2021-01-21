
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта.
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const {hex, rgb} of colors) {
  hexColors.push({hex, rgb}.hex);
  rgbColors.push({hex, rgb}.rgb);
}
console.log(hexColors);
console.log(rgbColors);