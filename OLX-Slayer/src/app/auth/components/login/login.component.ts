import { Router } from '@angular/router';
import { UserService } from './../../../services/user.services';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public error: any;

    constructor(private userService: UserService, private router: Router) {}

    onSubmit(formData) {
        if (formData.valid) {
            this.userService.login(formData)
                .then(
                () => {
                    console.log('success');
                    this.router.navigate(['/profile']);
                }).catch(
                (err) => {
                    console.log(err);
                    this.error = err;
                });
        } else {
            this.error = 'Your form is invalid';
        }
    }
}
