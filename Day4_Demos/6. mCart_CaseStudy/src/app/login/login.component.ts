import { Component } from '@angular/core';
import { Router }    from '@angular/router';
import {Login} from './Login';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {
    users: any[];
    login = new Login();
    valid: boolean = true;

    constructor(private router: Router, private _http: Http) {
        this._http.get('api/users/users.json')
            .map((response: Response) => <Login[]>response.json())
            .catch(this.handleError)
            .subscribe(users =>  this.users = users);
            

    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    onSubmit() {
        this.valid = true;
        var name = this.login.userName;
        sessionStorage.setItem("username", this.login.userName);
        var password = this.login.password;
        var user = this.users.filter(user => user.userName == name && user.password == password)[0];
        if (user) {
            document.getElementById("login").innerHTML = "Logout";
            this.router.navigate(['/products']);
        }
        else {
            this.valid = false;
        }
    }
}