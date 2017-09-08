import { UserService } from './../../../services/user.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public error: string;

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

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
                    this.error = err.message;
                });
        } else {
            this.error = 'Your form is invalid';
        }
    }
}
