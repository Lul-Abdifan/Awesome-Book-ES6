let books;
class Collection {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
// for storing
class Store {
  static getBooks() {
    const storage = localStorage.getItem('books');
    if (storage === null) {
      books = [];
    } else {
      books = JSON.parse(storage);
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(author) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.author === author) {
        books.splice(index, 1);
      }
      localStorage.setItem('books', JSON.stringify(books));
    });
  }
}

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
export { Store, books, Collection };