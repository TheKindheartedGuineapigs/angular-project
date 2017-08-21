import { UserService } from './services/user.services';
import { RoutingModule } from './router/app.router';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { firebaseConfig } from '../environments/firebase.config';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AuthModule,
    RouterModule,
    RoutingModule
  ],
  providers: [
    UserService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
