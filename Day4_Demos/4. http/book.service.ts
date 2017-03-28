import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Book } from './book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BookService {

    constructor(private http: Http) { }

    private booksUrl = 'app/books.json';
    
    getBooks(): Observable<Book[]> {
        return this.http.get(this.booksUrl)
            .map((response: Response) => <Book[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    

    
    private handleError(error: any) {
        
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); 
        return Observable.throw(errMsg);
    }
    
    addBook (name: string): Observable<Book> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.booksUrl, body, options)
                    .map((response: Response) => <Book[]>response.json())
                    .catch(this.handleError);
  }

}
