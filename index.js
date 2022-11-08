import Page from './modules/UIclass.js'
import {Store,Collection,books} from './modules/book.js'



// display Books
document.addEventListener('DOMContentLoaded', Page.retrieveToPage);

// Event:Add a Book
document.querySelector('#add-new-book').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  // instantiate

  const book = new Collection(title, author);
  // Add book to list
  Page.addToPage(book);
  Store.addBook(book);
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

// Event :Remove a Book
document.querySelector('.bookLists').addEventListener('click', (e) => {
  Page.removeFromPage(e.target);
});

//           //navigation for the all lists

const storerSpace = document.querySelector('#bookStorer');
const addSpace = document.querySelector('#filling-form-section');
const contactSpace = document.querySelector('#contactpage');
const links = document.querySelectorAll('.nav-link');
class Navigation {
  static changePage(identifier) {
    switch (identifier) {
      case 'List':
      {
        contactSpace.style.display = 'none';
        addSpace.style.display = 'none';
        storerSpace.style.display = 'block';
        break;
      }

      case 'Add new':
      {
        contactSpace.style.display = 'none';
        addSpace.style.display = 'block';
        storerSpace.style.display = 'none';
        break;
      }

      default:
      {
        contactSpace.style.display = 'block';
        addSpace.style.display = 'none';
        storerSpace.style.display = 'none';
        break;
      }
    }
  }
}

links.forEach((link) => {
  link.onclick = () => {
    Navigation.changePage(link.textContent);
  };
});