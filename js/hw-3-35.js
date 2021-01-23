// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
	const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex,1,newName);
      return this.books;	
    // Пиши код выше этой строки
  },
};

console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));