import { Router } from '@angular/router';
import { UserService } from './../../../services/user.services';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public error: any;

    constructor(private userService: UserService, private router: Router, public bsModalRef: BsModalRef) { }
    onSubmit(formData) {
        if (formData.valid) {
            this.userService.login(formData)
                .then(
                (success) => {
                    console.log(success);
                    // this.router.navigate(['/profile']); TODO: profile component
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
