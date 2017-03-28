import { Routes, RouterModule } from '@angular/router';
import { BooksComponent }    from './books.component';
import { DashboardComponent } from './dashboard.component';
import { BookDetailComponent } from './book-detail.component';

 const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path:'',redirectTo:'/dashboard',pathMatch:'full'},
    { path: 'books', component: BooksComponent },
    { path:'detail/:id',component: BookDetailComponent}
];  


export const routing = RouterModule.forRoot(routes);
