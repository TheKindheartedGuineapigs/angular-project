import { FormsModule } from '@angular/forms';
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

import { NavigationComponent } from '../app/home/navigation/navigation.component';
import { MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from '../app/home/search/search.component';
import { DummyComponent } from './dummy/dummy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AuthModule,
    RouterModule,
    RoutingModule,

    MdToolbarModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    UserService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
