import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {BooksComponent} from './books.component';
import {BookService} from './book.service';
import {DashboardComponent} from './dashboard.component';
import {BookDetailComponent} from './book-detail.component';
import { routing }        from './app.routes';

@NgModule({
  imports:      [BrowserModule,HttpModule, routing, FormsModule],
  declarations: [AppComponent,DashboardComponent,BooksComponent,BookDetailComponent ],
  providers: [BookService],
  bootstrap:    [AppComponent]
       
})
export class AppModule { }
