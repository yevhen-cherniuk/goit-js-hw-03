// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    this.potions.push(potionName);
    return this.potions;    
    // Пиши код выше этой строки
  },
};

console.log(atTheOldToad.addPotion('Невидимка'));
console.log(atTheOldToad.addPotion('Зелье силы'));
