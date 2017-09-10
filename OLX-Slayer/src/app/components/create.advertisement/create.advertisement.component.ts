import { ActivatedRoute } from '@angular/router';
import { Advertisement } from './../../models/advertisement';
import { UserProfile } from './../../models/userProfile';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { UserService } from './../../services/user.services';
import { AdvertisementService } from './../../services/advertisements.service';
import { ImgurService } from './../../services/imgur.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create.advertisement.component.html',
  styleUrls: ['./create.advertisement.component.css']
})
export class CreateAdvertisementComponent {
  private noPersonalDetails: boolean;
  private categories = ['Electronics', 'Fashion', 'Work',
    'Sport, Hobbies', 'Books, Magazines',
    'Cars, Car parts', 'Bikes, Bike parts',
    'Home', 'Animals', 'Services'];
  private category: string;
  private photoUrls = [];
  private userProfile: UserProfile;
  private currentUser: firebase.User;

   constructor(private igmService: ImgurService, private advertisementService: AdvertisementService,
    private userService: UserService, private route: ActivatedRoute) {

    this.userProfile = new UserProfile();
    this.currentUser = route.snapshot.data['users'];

    userService.getUserDetails(this.currentUser.uid).subscribe(details => {
      if (details.username && details.phoneNumber && details.addressOne && details.city) {
        this.userProfile = details;
        this.noPersonalDetails = false;
      } else if (details.username || details.phoneNumber || details.addressOne || details.city) {
        this.userProfile = details;
        this.noPersonalDetails = true;
      } else {
        this.noPersonalDetails = true;
      }
    });
  }

  setCategory(category) {
    this.category = category;
  }

  onSubmitPicture(file) {
    this.igmService.uploadImg(file)
      .map((res) => res.json())
      .subscribe(responce => {
        this.photoUrls.push(responce.data.link);
      });
  }

  onCreateAdvert(formData) {
    const advertisement = new Advertisement(formData.value.heading, this.category, formData.value.description, this.photoUrls,
      this.currentUser.uid, this.userProfile.country, this.userProfile.city,
      this.userProfile.addressOne, this.userProfile.username);
    this.advertisementService.createAdvertisements(advertisement).subscribe(res => {
      console.log(res);
    });
  }
}
