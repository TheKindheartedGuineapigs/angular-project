import { LoginComponent } from './../../auth/components/login/login.component';
import { SignUpComponent } from './../../auth/components/signup/signup.component';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openSignUpModal() {
    this.bsModalRef = this.modalService.show(SignUpComponent);
  }

  public openLogInModal() {
    this.bsModalRef = this.modalService.show(LoginComponent);
  }
}
