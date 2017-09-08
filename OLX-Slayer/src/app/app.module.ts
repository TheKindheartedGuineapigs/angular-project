import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UserProfilesModule } from './user.profile/user.profiles.module';
import { AdvertismentService } from './services/advertisments.service';
import { CreateAdvertismentComponent } from './components/create.advertisment/create.advertisment.component';
import { ChatModule } from './chat/chat.module';
import { ImgurService } from './services/imgur.service';
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
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthGuardService } from './services/auth.guard.service';

import { firebaseConfig } from '../environments/firebase.config';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/shared/search/search.component';
import { DummyComponent } from './dummy/dummy.component';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    DummyComponent,
    CreateAdvertismentComponent,
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
    ChatModule,
    HttpModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    UserProfilesModule
  ],
  exports: [NavigationComponent],
  providers: [
    ImgurService,
    AngularFireDatabase,
    AuthGuardService,
    AdvertismentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
