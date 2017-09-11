import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserResolver } from './../utils/user.resolver';
import { AdvertisementDetailsComponent } from './advertisement.details/advertisement.details.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { CreateAdvertisementComponent} from './create.advertisement/create.advertisement.component';



const advertisementRoutes: Routes = [
  {
    path: 'advertisements',
    children: [
      {path: '', component: AdvertisementsComponent},
      {path: ':id', component: AdvertisementDetailsComponent}
    ]
  },
  {path: 'createAdvertisement', component: CreateAdvertisementComponent, resolve: { user: UserResolver}}
];

@NgModule({
  imports: [
    RouterModule.forChild(advertisementRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AdvertisementRoutingModule{}