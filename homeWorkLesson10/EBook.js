import { Book } from './Book.js';

export class Ebook extends Book {
  constructor(name, author, years, fileFormat) {
    super(name, author, years);
    this.fileFormat = fileFormat;
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

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(newfileFormat) {
    if (typeof newfileFormat === 'string' && newfileFormat.length > 0) {
      this._fileFormat = newfileFormat;
    } else {
      console.error('Wrong fileFormat');
    }
  }

  printInfo() {
    // super.printInfo();

    console.log(`file format ${this.fileFormat}`);

    // console.log (`Book ${this.name} by ${this.author} created ${this.years} and ${this.fileFormat}`)
  }

  static newMethod(instanceBook, fileFormat) {
    return new Ebook(
      instanceBook.name,
      instanceBook.author,
      instanceBook.years,
      fileFormat,
    );
  }
}
