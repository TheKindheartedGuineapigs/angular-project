import { ImgurService } from './../../services/imgur.service';
import { UserService } from './../../services/user.services';
import { Component } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user.profile.component.html',
})
export class UserProfileComponent {
    private currentUser: firebase.User;
    private message: string;
    private userPersonal = {
        username: '',
        firstName: '',
        lastName: '',
        phoneNumber: ''
    };
    private userAddress = {
        addressOne: '',
        addressTwo: '',
        city: '',
        country: ''
    };
    constructor(private userService: UserService, private imgService: ImgurService) {
        this.currentUser = userService.getCurrentUser();
        userService.getUserDetails(this.currentUser.uid).subscribe(details => {
            if (details.details) {
                this.userPersonal = details.details;
            }

            if (details.address) {
                this.userAddress = details.address;
            }
        });
    }

    onSubmitPicture(file) {
        this.imgService.uploadImg(file)
            .map((res) => res.json())
            .subscribe(responce => {
                this.userService.updateUserProfile(this.currentUser.displayName, responce.data.link);
            });
    }

    onSubmitPersonalDetails() {
        this.userService.updatePersonalDetails(this.userPersonal, this.currentUser.uid);
    }

    onSubmitAddress() {
        this.userService.updateAddress(this.userAddress, this.currentUser.uid);
    }

    onSubmitResetPassword(formData) {
        if (formData.valid) {
          this.userService.resetPasswor(formData.value.email)
            .then( (response) => {
              this.message = 'Check you email!';
              console.log('Sent successfully');
            })
            .catch( (error) => {
              this.message = error.message;
              console.log(error);
            });
        }
    }
}
