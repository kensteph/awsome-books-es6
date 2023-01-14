export class Storage {
  // Local Storage
  saveToLocalStorage(data) {
    localStorage.setItem('MY-Library', JSON.stringify(data));
  }

  getDataFromLocalStorage() {
    try {
      const data = JSON.parse(localStorage.getItem('MY-Library'));
      return data || []; // If there is no data return an empty array
    } catch (error) {
      return [];
    }
  }
}
