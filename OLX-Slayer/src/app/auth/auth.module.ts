import { SignUpComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SignUpComponent,
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
})
export class AuthModule {}
