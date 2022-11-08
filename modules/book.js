
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
export {Store ,books,Collection};