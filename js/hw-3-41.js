// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой,
// а в будущем может быть и другими характеристиками.
// Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
// {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (newPotion.name !== this.potions[i].name) { 
        return `Зелье ${newPotion} уже есть в инвентаре!`;
        break;
      }
      return this.potions.push(newPotion);
    }


   
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1){
      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1);
      }
          }
    return this.potions;
      },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if ((oldName === this.potions[i].name)) {
        this.potions[i].name = newName;
      }
      break;
    }
    return this.potions;
  },
  // Пиши код выше этой строки
  };

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
console.log(atTheOldToad.removePotion('Дыхание дракона'));
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));