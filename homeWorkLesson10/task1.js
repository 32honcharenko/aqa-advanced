import {Ebook} from "./EBook.js"
import {Book} from "./Book.js"


const newEbook = new Ebook ("Math7777", "Luis Brad7777", 1990, "pdf7777")

newEbook.printInfo()

const someBook = new Book ("Math", "Luis Brad", 1995)
const someBook2 = new Book ("Math2", "Luis Brad2", 1992)
const someBook3 = new Book ("Math3", "Luis Brad3", 1993)

someBook.printInfo()
someBook2.printInfo()
someBook3.printInfo()

const instanceBook = new Book ("Math9999", "Luis Brad9999", 19999)
const fileFormat = "jpg"

console.log (Book.oldBook([someBook, someBook2, someBook3, newEbook]))
console.log (Ebook.newMethod(instanceBook, fileFormat))