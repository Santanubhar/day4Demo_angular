import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  templateUrl: 'app/books.component.html',
  styleUrls:  ['app/books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
    error:any;
    
  constructor(private router: Router,private bookService: BookService){ }
  
  getBooks(){
	this.bookService.getBooks().then(books => this.books = books)
    .catch(error=>this.error=error);    
  }
  
  ngOnInit() {
	this.getBooks();
  }
  
  onSelect(book: Book) { this.selectedBook = book }
  
  gotoDetail() {
    this.router.navigate(['/detail',  this.selectedBook.id ]);
  }
}
