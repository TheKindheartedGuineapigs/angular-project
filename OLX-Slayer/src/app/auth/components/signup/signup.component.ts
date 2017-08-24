import { UserService } from './../../../services/user.services';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  public error: any;
  constructor(private userService: UserService, private router: Router, public bsModalRef: BsModalRef) {  }

  onSubmit(formData) {
    if (formData.valid) {
      this.userService.signup(formData)
      .then(
        (success) => {
        console.log(success);
        // this.router.navigate(['/profile']); TODO: implement profile component
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
