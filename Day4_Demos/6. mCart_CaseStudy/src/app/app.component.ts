import {Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    pageTitle: string = "mCart";
   // visible: boolean = true;
   // orders: any;

    constructor(private _router: Router, private _http: Http) {}

    login() {
        var value = document.getElementById("login").innerHTML;

        if (value === "Login") {
            this._router.navigate(['/login']);
        }
        else if (value === "Logout") {
            sessionStorage.clear();
            document.getElementById("login").innerHTML = "Login";
            document.getElementById("welcome").style.display = "none";
            this._router.navigate(['/welcome']);
        }
    }
}
