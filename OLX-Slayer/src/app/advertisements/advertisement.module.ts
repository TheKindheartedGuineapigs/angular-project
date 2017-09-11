import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { AdvertisementService } from '../services/advertisements.service';
import { AdvertisementDetailsComponent } from './advertisement.details/advertisement.details.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { CreateAdvertisementComponent } from './create.advertisement/create.advertisement.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserResolver } from './../utils/user.resolver';
import { BsDropdownModule, AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { ImgurService } from '../services/imgur.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthGuardService } from '../services/auth.guard.service';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    AdvertisementRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    AdvertisementsComponent,
    AdvertisementDetailsComponent,
    CreateAdvertisementComponent
  ],
  providers: [
    ImgurService,
    AdvertisementService,
    UserResolver,
    AngularFireDatabase,
    AuthGuardService
  ]
})
export class AdvertisementModule { }