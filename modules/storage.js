export default class Storage {
  // Local Storage
  static saveToLocalStorage(data) {
    localStorage.setItem('MY-Library', JSON.stringify(data));
  }

  static getDataFromLocalStorage() {
    try {
      const data = JSON.parse(localStorage.getItem('MY-Library'));
      return data || []; // If there is no data return an empty array
    } catch (error) {
      return [];
    }
  }

  static removeBook(position) {
    // Get the books from our library
    const books = Storage.getDataFromLocalStorage();
    position = parseInt(position, 10);
    // Fiter the books
    const filteredBooks = books.filter((book, index) => position !== index);
    // Save the changes
    Storage.saveToLocalStorage(filteredBooks);
  }
}
