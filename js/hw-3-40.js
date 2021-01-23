// Дополни метод updatePotionName(oldName, newName) так,
// чтобы он обновлял название зелья с oldName на newName,
// в массиве зелий в свойстве potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex,1,newName);
    return this.potions;
    
    // 🔥 Оставляем три пустые строки для студента
    
    
    
    // Пиши код выше этой строки
  },
};

console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'));