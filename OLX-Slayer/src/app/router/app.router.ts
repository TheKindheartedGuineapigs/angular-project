import { SignUpComponent } from '../auth/components/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'signup', component: SignUpComponent },
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
