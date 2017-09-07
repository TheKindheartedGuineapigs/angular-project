import { UserProfile } from './../../models/userProfile';
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
    private userProfile: UserProfile;

    constructor(private userService: UserService, private imgService: ImgurService) {
        this.userProfile = new UserProfile('', '', '', '', '', '', '', '');
        this.currentUser = userService.getCurrentUser();
        userService.getUserDetails(this.currentUser.uid).subscribe(details => {
            if (details) {
                this.userProfile = details;
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

    onSubmitUserDetails() {
        this.userService.updatePersonalDetails(this.userProfile, this.currentUser.uid);
    }
}
