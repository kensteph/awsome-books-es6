// Import my modules
import { Library } from './modules/library.js';

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
  const option = {
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  let today = new Date();
  let date = today.toLocaleString('en-US', option);
  date = date.replace(' at', ',');
  document.getElementById('date').innerHTML = date;
  setTimeout(displayTime, 1000);
};
displayTime();

// MENUS
const listMenuLink = document.querySelector('#m-list a');
const addMenuLink = document.querySelector('#m-add a');
const contactMenuLink = document.querySelector('#m-contact a');

// Get all the section
const sections = document.querySelectorAll('section');
const pageTitle = document.querySelector('#page-title');

const displaySection = (sectionToDisp) => {
  sections.forEach((section) => {
    // Active the related link
    if (sectionToDisp === 'book-list') {
      pageTitle.style.display = 'block';
      listMenuLink.classList.add('active');
      addMenuLink.classList.remove('active');
      contactMenuLink.classList.remove('active');
    } else if (sectionToDisp === 'add-book') {
      pageTitle.style.display = 'none';
      addMenuLink.classList.add('active');
      listMenuLink.classList.remove('active');
      contactMenuLink.classList.remove('active');
    } else {
      pageTitle.style.display = 'none';
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
