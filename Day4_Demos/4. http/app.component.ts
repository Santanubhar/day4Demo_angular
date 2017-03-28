import { Component, OnInit } from '@angular/core';
import { Book} from './book';
import { BookService } from './book.service';

@Component({
  selector: 'my-books',
  template: `
    <h1>{{title}}</h1>
    <h2>My Books</h2>
    <ul class="books">
      <li *ngFor="let book of books">
        <span class="badge">{{book.id}}</span> {{book.name}}
      </li>
    </ul>
    New Book name:
    <input #newBookName />
    <button (click)="addBook(newBookName.value); newBookName.value=''">
        Add Book
    </button>
    <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
  styleUrls: ['styles.css']
})
export class AppComponent implements OnInit {
 
  books: Book[];
  errorMessage: string;

  constructor(private bookService: BookService) { }
    
  getBooks() {
    this.bookService.getBooks().subscribe(
                     books => this.books = books,
                     error =>  this.errorMessage = <any>error);
  }
    
    addBook (bookName: string) {
        if (!bookName) { return; }
        this.books.push({"id":100,"name":bookName});
        /*this.bookService.addBook(bookName)
                     .subscribe(
                       book  => this.books.push(book),
                       error =>  this.errorMessage = <any>error);*/
  }
    
  ngOnInit() {
    this.getBooks();
  }
}
