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
  private userDetails = {
    address: '',
    details: ''
  };
  constructor(private igmService: ImgurService, private advertismentService: AdvertismentService, private userService: UserService) {
    userService.getUserDetails(userService.getCurrentUserId()).subscribe(details => {
      if (details.address && details.details) {
        this.userDetails = details;
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
    const advert = {
      createdBy: this.userService.getCurrentUserId(),
      heading: formData.value.heading,
      category: this.category,
      description: formData.value.description,
      photoOne: this.photoUrls[0],
      photoTwo: this.photoUrls[1],
      photoThree: this.photoUrls[2],
      city: formData.value.city,
      address: formData.value.address,
      phoneNumber: formData.value.phoneNumber,
      username: formData.value.username
    };
    console.log(advert);
    // this.advertismentService.createAdvertisements(advert).subscribe(res => {
    //   console.log(res);
    // });
  }
}
