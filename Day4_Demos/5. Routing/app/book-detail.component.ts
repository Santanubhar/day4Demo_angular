import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'my-book-detail',
  templateUrl: 'app/book-detail.component.html',
  styleUrls:['app/book-detail.component.css']
})

export class BookDetailComponent implements OnInit, OnDestroy {
	book: Book;   
    error:any;
    sub:any;
    
	constructor(private bookService: BookService, private route: ActivatedRoute) {
}
	ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];       
        this.bookService.getBook(id)
            .then(book => this.book = book);
      } else {
        this.book = new Book();
      }
    });
  }
    
     ngOnDestroy() {
    this.sub.unsubscribe();
  }
    
  goBack() {
    window.history.back(); 
  }

}
