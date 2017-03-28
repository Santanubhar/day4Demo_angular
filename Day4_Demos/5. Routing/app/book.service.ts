import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Book } from './book';

@Injectable()
export class BookService {
    private booksUrl = 'app/books.json';
    constructor(private http: Http) { }
    getBooks() {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(response => response.json() as Book[])
            .catch(this.handleError);
    }
    getBook(id: number) {
        return this.getBooks()
            .then(books => books.find(book => book.id === id));
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
