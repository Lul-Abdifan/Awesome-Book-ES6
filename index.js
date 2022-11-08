import Page from './modules/UIclass.js'
import {Store,Collection,books} from './modules/book.js'
import Navigation from './modules/navigation.js'





// display Books


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


//           //navigation for the all lists



