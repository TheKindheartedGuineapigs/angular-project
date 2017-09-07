import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './../services/user.services';
import { SignUpComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent }
  ];

@NgModule({
    declarations: [
        SignUpComponent,
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AlertModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    entryComponents: [
        SignUpComponent,
        LoginComponent],
    providers: [
        UserService,
        AngularFireAuth,
        AuthService
    ],
})
export class AuthModule {}
