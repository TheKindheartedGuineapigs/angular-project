import { AngularFireAuth } from 'angularfire2/auth';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { UserService } from './../services/user.services';
import { SignUpComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
    declarations: [
        SignUpComponent,
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AlertModule.forRoot()
    ],
    entryComponents: [
        SignUpComponent,
        LoginComponent],
    providers: [
        UserService,
        BsModalRef,
        AngularFireAuth
    ],
})
export class AuthModule {}
