import { Component }       from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `
	<h1>{{title}}</h1>
	<nav>
		 <a [routerLink]="['/dashboard']">Dashboard</a>
		<a [routerLink]="['/books']">Books</a>
	</nav>
	<router-outlet></router-outlet>
	`
   
})
export class AppComponent {
    title = 'Tour of Books';
}
