import { AuthService } from './../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public error: string;

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        this.authService.signOut()
          .then(() => {
            console.log('you are now loged out!');
          }).catch(error => {
            console.log(error.message);
          });
      }

    onSubmit(formData) {
        if (formData.valid) {
            this.authService.login(formData)
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
