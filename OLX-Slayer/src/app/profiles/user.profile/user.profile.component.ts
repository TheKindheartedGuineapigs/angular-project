import { config } from './../../config/api.config';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from './../../models/userProfile';
import { ImgurService } from './../../services/imgur.service';
import { UserService } from './../../services/user.services';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user.profile.component.html',
})
export class UserProfileComponent {
    private currentUser: firebase.User;
    private message: string;
    private checkUsernameMessage: string;
    private resetPasswordMessage: string;
    private aveilable: boolean;
    private userProfile: UserProfile;

    constructor(private userService: UserService, private imgService: ImgurService, private route: ActivatedRoute) {
        this.userProfile = new UserProfile();
        this.currentUser = route.snapshot.data['users'];

        userService.getUserDetails(this.currentUser.uid).subscribe(details => {
            if (details && details.$value !== null) {
                this.userProfile = details;
                this.aveilable = true;
            } else {
                this.userProfile.setAllFields('');
                this.aveilable = false;
            }
        });
    }

    onSubmitPicture(file) {
        this.imgService.uploadImg(file)
            .map((res) => res.json())
            .subscribe(responce => {
                this.userProfile.photoUrl = responce.data.link;
                this.userService.updatePersonalDetails(this.userProfile, this.currentUser.uid);
            });
    }

    onSubmitResetPassword(formData) {
        if (formData.valid) {
          this.userService.resetPasswor(formData.value.email)
            .then( (response) => {
              this.resetPasswordMessage = 'Check you email!';
              console.log('Sent successfully');
            })
            .catch( (error) => {
              this.resetPasswordMessage = error.message;
              console.log(error);
            });
        }
    }

    checkUsername(username: string) {
        this.userService.availableUsername(username).subscribe(response => {
            if (response.length === 0) {
                this.aveilable = true;
                this.checkUsernameMessage = 'username is aveilable';
            } else {
                this.aveilable = false;
                this.checkUsernameMessage = 'username is taken';
            }
        });
    }
    onSubmitUserDetails() {
        this.userService.updatePersonalDetails(this.userProfile, this.currentUser.uid);
        this.message = 'Successfully updated!';
    }
}
