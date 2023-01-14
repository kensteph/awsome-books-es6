// Import my modules
import { Library } from './modules/library.js';
import { DateTime } from './modules/luxon.js';

// My Libray
const library = new Library();

const removeBookFromDOM = (id) => {
  if (id !== -1) {
    library.removeBook(id);
  }
};

const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  library.addBook();
});

library.getBooks();
removeBookFromDOM(-1);

// ============================== NAVIGATION =====================

const displayTime = () => {
  const date = DateTime.now();
  var format = {
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  let dateDisplay = date.setLocale('en-US').toLocaleString(format); //=> 'September 14'
  dateDisplay = dateDisplay.replace(' at', ',');
  document.getElementById('date').innerHTML = dateDisplay;
  setTimeout(displayTime, 1000);
};
displayTime();

// MENUS
const listMenuLink = document.querySelector('#m-list a');
const addMenuLink = document.querySelector('#m-add a');
const contactMenuLink = document.querySelector('#m-contact a');

const displaySection = (sectionToDisp) => {
  // Get all the section
  const sections = document.querySelectorAll('section');
  const pageTitle = document.querySelector('#page-title');

  sections.forEach((section) => {
    // Active the related link
    if (sectionToDisp === 'book-list') {
      pageTitle.innerHTML = 'All awesome books';
      listMenuLink.classList.add('active');
      addMenuLink.classList.remove('active');
      contactMenuLink.classList.remove('active');
    } else if (sectionToDisp === 'add-book') {
      pageTitle.innerHTML = 'Add a new book';
      addMenuLink.classList.add('active');
      listMenuLink.classList.remove('active');
      contactMenuLink.classList.remove('active');
    } else {
      pageTitle.innerHTML = 'Contact information';
      contactMenuLink.classList.add('active');
      addMenuLink.classList.remove('active');
      listMenuLink.classList.remove('active');
    }

    // Display the related section
    if (section.id === sectionToDisp) {
      section.classList.remove('hide-section');
      section.classList.add('show-section');
    } else {
      section.classList.remove('show-section');
      section.classList.add('hide-section');
    }
  });
};

// Event on Menu Links
listMenuLink.addEventListener('click', () => {
  displaySection('book-list');
});
addMenuLink.addEventListener('click', () => {
  displaySection('add-book');
});
contactMenuLink.addEventListener('click', () => {
  displaySection('contact');
});
