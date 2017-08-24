import { UserProfileComponent } from './../components/user.profile/user.profile.component';
import { LoginComponent } from './../auth/components/login/login.component';
import { SignUpComponent } from '../auth/components/signup/signup.component';
import { DummyComponent } from '../dummy/dummy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'advertisements', component: DummyComponent },
  { path: 'profile', component: UserProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
