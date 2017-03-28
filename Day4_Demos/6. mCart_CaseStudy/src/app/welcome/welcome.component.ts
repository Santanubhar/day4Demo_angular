import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/welcome/welcome.component.html',
    styleUrls: ['app/welcome/welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";
}