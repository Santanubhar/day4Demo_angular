import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { CourseFormComponent } from './course-form.component';
import {EmailValidator} from './email.validator';

@NgModule({
  imports:      [BrowserModule, FormsModule],
  declarations: [AppComponent, CourseFormComponent, EmailValidator],
  bootstrap:    [AppComponent]
})
export class AppModule { }
