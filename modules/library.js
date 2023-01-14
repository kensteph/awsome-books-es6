// eslint-disable-next-line no-multi-spaces
import Storage from './storage.js';
import Book from './book.js';

export default class Library {
  constructor() {
    this.books = [];
  }

  addBook() {
    const form = document.querySelector('#form');
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const bookTitle = title.value;
    const bookAuthor = author.value;

    if (bookTitle.trim().length !== 0 && bookAuthor.trim().length !== 0) {
      const objBook = new Book(bookTitle, bookAuthor);
      this.books.push(objBook);
      Storage.saveToLocalStorage(this.books);
      this.getBooks();
      form.reset();
      document.getElementById('msg-add-book').innerHTML = 'New book added...';
      setTimeout(() => {
        document.getElementById('msg-add-book').innerHTML = '';
      }, 3000);
    }
  }

  getBooks() {
    const section = document.querySelector('#book-list');
    this.books = Storage.getDataFromLocalStorage();
    let books = '<table>';
    this.books.forEach((book, index) => {
      books += `<tr>
      <td>
        <article class="book">
          <p>"${book.title}" by ${book.author}</p>
          <button type="button" id="${index}" class="btn remove-btn" onclick="removeBookFromDOM(${index})">Remove</button>
        </article>
      </td>
    </tr>
    `;
    });
    if (this.books.length === 0) {
      books += '<tr><td colspan="2" <p class="empty-libray">Library is empty...</p></td></tr>';
    }
    books += '</table>';
    section.innerHTML = books;
  }

  removeBook(bookId) {
    const filteredBooks = this.books.filter((book, index) => bookId !== index);
    this.books = filteredBooks;
    Storage.saveToLocalStorage(this.books);
    this.getBooks();
  }
}
