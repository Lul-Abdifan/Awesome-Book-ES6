import { Store } from './book.js';
class Page {
    static retrieveToPage() {
      const books = Store.getBooks();
      books.forEach((book, index) => Page.addToPage(book, index));
    }
  
    static addToPage(book, index) {
      const list = document.querySelector('.bookLists');
      const row = document.createElement('tr');
      row.innerHTML = `<td id="authorTitle"> <div class="raw-lists-header"> <h3>"${book.title}" by </h3>
          <h3>${book.author}</h3></td> </div>
        
          `;
      const createButton = document.createElement('td');
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-button';
      removeBtn.type = 'submit';
      removeBtn.innerText = 'Remove';
      removeBtn.id = index;
      createButton.appendChild(removeBtn);
      row.appendChild(createButton);
      list.appendChild(row);
    }
  
    static removeFromPage(el) {
      if (el.className === 'remove-button') {
        el.parentElement.parentElement.remove();
        books.splice(el.id, 1);
        localStorage.setItem('books', JSON.stringify(books));
      }
    }
  }
  document.addEventListener('DOMContentLoaded', Page.retrieveToPage);
  document.querySelector('.bookLists').addEventListener('click', (e) => {
    Page.removeFromPage(e.target);
  });
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
  export default Page;