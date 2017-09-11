import { UserResolver } from './../utils/user.resolver';
import { CreateAdvertisementComponent } from './../components/create.advertisement/create.advertisement.component';
import { AuthGuardService } from './../services/auth.guard.service';
import { LoginComponent } from './../auth/components/login/login.component';
import { SignUpComponent } from '../auth/components/signup/signup.component';
import { SearchComponent } from '../components/shared/search/search.component';
import { DummyComponent } from '../dummy/dummy.component';
import { AdvertisementsComponent } from '../advertisements/advertisements/advertisements.component';
<<<<<<< HEAD
import { AdvertisementDetailsComponent } from '../advertisements/advertisement.details/advertisement.details.component';
=======
>>>>>>> feature/advertisements
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: SearchComponent},
<<<<<<< HEAD
=======
  { path: 'advertisements', component: AdvertisementsComponent},
  { path: 'advertisement', resolve: { users: UserResolver }, component: CreateAdvertisementComponent, canActivate: [AuthGuardService] },
>>>>>>> feature/advertisements
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
