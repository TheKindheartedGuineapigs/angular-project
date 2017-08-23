import { AngularFireAuth } from 'angularfire2/auth';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { UserService } from './../services/user.services';
import { SignUpComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [
        SignUpComponent,
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ModalModule.forRoot(),
    ],
    entryComponents: [SignUpComponent],
    providers: [
        UserService,
        BsModalRef,
        AngularFireAuth
    ],
})
export class AuthModule {}
