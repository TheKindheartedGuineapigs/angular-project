import { UserProfileComponent } from './components/user.profile/user.profile.component';
import { SignUpComponent } from './auth/components/signup/signup.component';
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
import { TabsModule } from 'ngx-bootstrap';
import { NavigationComponent } from '../app/home/navigation/navigation.component';
import { MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from '../app/home/search/search.component';
import { DummyComponent } from './dummy/dummy.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    DummyComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AuthModule,
    RouterModule,
    RoutingModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    TabsModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
