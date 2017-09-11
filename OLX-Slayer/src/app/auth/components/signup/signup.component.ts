import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  public error: string;

  constructor(private authService: AuthService, private router: Router) {}

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
      this.authService.signup(formData)
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
