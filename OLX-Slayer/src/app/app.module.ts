import { AdvertismentService } from './services/advertisments.service';
import { CreateAdvertismentComponent } from './components/create.advertisment/create.advertisment.component';
import { ChatModule } from './chat/chat.module';
import { ImgurService } from './services/imgur.service';
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
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthGuardService } from './services/auth.guard.service';

import { firebaseConfig } from '../environments/firebase.config';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap';
import { NavigationComponent } from '../app/home/navigation/navigation.component';
import { MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from '../app/home/search/search.component';
import { DummyComponent } from './dummy/dummy.component';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    DummyComponent,
    UserProfileComponent,
    CreateAdvertismentComponent
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
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [NavigationComponent],
  providers: [
    ImgurService,
    AngularFireDatabase,
    AuthGuardService,
    AdvertismentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
