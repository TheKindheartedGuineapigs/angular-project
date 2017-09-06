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
    constructor(private userService: UserService, private imgService: ImgurService) {
        this.currentUser = userService.getCurrentUser();
    }

    onSubmitPicture(file) {
        this.imgService.uploadImg(file)
            .map((res) => res.json())
            .subscribe(responce => {
                this.userService.updateUserProfile(this.currentUser.displayName, responce.data.link);
            });
    }

    onSubmitPersonalDetails(detailsFormData) {
        const details = {
            username: detailsFormData.value.username,
            firstName: detailsFormData.value.firstName,
            lastName: detailsFormData.value.lastName,
            phoneNumber: detailsFormData.value.phoneNumber
        };

        this.userService.updatePersonalDetails(details, this.currentUser.uid);
    }

    onSubmitAddress(addressFormData) {
        const address = {
            addressOne: addressFormData.value.addressOne,
            addressTwo: addressFormData.value.addressTwo,
            city: addressFormData.value.city,
            country: addressFormData.value.country
        };

        this.userService.updateAddress(address, this.currentUser.uid);
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
