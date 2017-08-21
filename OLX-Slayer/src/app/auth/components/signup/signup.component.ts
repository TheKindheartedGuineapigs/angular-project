import { UserService } from './../../../services/user.services';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup.component.ts',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  public error: any;

  constructor(private userService: UserService, private router: Router) {  }

  onSubmit(formData) {
    console.log(formData.value);
    if (formData.valid) {
      this.userService.signup(formData)
      .then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login']);
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
