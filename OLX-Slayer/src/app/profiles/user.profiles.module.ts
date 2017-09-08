import { PublicProfileComponent } from './public.profile/public.profile.component';
import { CommonModule } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { ImgurService } from './../services/imgur.service';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AuthGuardService } from './../services/auth.guard.service';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user.profile/user.profile.component';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';

const appRoutes: Routes = [
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuardService] },
    { path: 'publicprofile/:uid', component: PublicProfileComponent }
  ];

@NgModule({
    declarations: [
        UserProfileComponent,
        PublicProfileComponent
      ],
      imports: [
          RouterModule.forRoot(appRoutes),
          AlertModule.forRoot(),
          FormsModule,
          CommonModule,
          TabsModule.forRoot(),
      ],
      exports: [],
      providers: [
        ImgurService,
        AngularFireDatabase,
        AuthGuardService,
      ]
})
export class UserProfilesModule {}
