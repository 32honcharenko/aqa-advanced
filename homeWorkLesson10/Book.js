export class Book {
  constructor(name, author, years) {
    this.name = name;
    this.author = author;
    this.years = years;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string' && newName.length > 0) {
      this._name = newName;
    } else {
      console.error('Wrong name');
    }
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    if (typeof newAuthor === 'string' && newAuthor.length > 0) {
      this._author = newAuthor;
    } else {
      console.error('Wrong author');
    }
  }

  get years() {
    return this._years;
  }

  set years(newYears) {
    if (typeof newYears === 'number' && newYears !== 0) {
      this._years = newYears;
    } else {
      console.error('Wrong year');
    }
  }

  printInfo() {
    console.log(`Book ${this.name} by ${this.author} created ${this.years}`);
  }

  static oldBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      console.error('wrong array');
      return null;
    }

    let olderBook = books[0];

    for (let i = 1; i < books.length; i++) {
      if (books[i].years < olderBook.years) {
        olderBook = books[i];
      }
    }
    return olderBook;
  }
}
