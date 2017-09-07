import { Advertisement } from './../../models/advertisement';
import { UserProfile } from './../../models/userProfile';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { UserService } from './../../services/user.services';
import { AdvertismentService } from './../../services/advertisments.service';
import { ImgurService } from './../../services/imgur.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-advertisment',
  templateUrl: './create.advertisment.component.html',
  styleUrls: ['./create.advertisment.component.css']
})
export class CreateAdvertismentComponent {
  private noPersonalDetails: boolean;
  private categories = ['Electronics', 'Fashion', 'Work',
    'Sport, Hobbies', 'Books, Magazines',
    'Cars, Car parts', 'Bikes, Bike parts',
    'Home', 'Animals', 'Services'];
  private category: string;
  private photoUrls = [];
  private userProfile: UserProfile;

  constructor(private igmService: ImgurService, private advertismentService: AdvertismentService, private userService: UserService) {
    this.userProfile = new UserProfile('', '', '', '', '', '', '', '');
    userService.getUserDetails(userService.getCurrentUserId()).subscribe(details => {
      if (details) {
        this.userProfile = details;
        this.noPersonalDetails = false;
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
      this.userService.getCurrentUserId(), this.userProfile.country, this.userProfile.city,
      this.userProfile.addressOne, this.userProfile.username);
    this.advertismentService.createAdvertisements(advertisement).subscribe(res => {
      console.log(res);
    });
  }
}
