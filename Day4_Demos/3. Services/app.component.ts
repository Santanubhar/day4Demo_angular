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
  `,
  styleUrls: ['styles.css']
   
})
export class AppComponent implements OnInit {
 
  books: Book[];

  constructor(private bookService: BookService) { }
    
  getBooks() {
     this.bookService.getBooks().then(books => this.books = books);
  }
    
  ngOnInit() {
    this.getBooks();      
  }
}
