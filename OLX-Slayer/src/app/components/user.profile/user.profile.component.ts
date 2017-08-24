import { ImgurService } from './../../services/imgur.service';
import { UserService } from './../../services/user.services';
import { Component } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    templateUrl: 'user.profile.component.html',
})
export class UserProfileComponent {
    private currentUser: firebase.User;
    constructor(private userService: UserService, private imgService: ImgurService) {
        userService.getCurrentUser().subscribe(user => {
           this.currentUser = user;
        });
    }

    onSubmitPicture(file) {
    }
}
