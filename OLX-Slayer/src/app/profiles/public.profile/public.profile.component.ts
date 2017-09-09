import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.services';
import { UserProfile } from './../../models/userProfile';
import { Component } from '@angular/core';

@Component({
    selector: 'app-public-profile',
    templateUrl: './public.profile.component.html'
})
export class PublicProfileComponent {
    private userProfile: FirebaseObjectObservable<any>;
    private userId: string;

    constructor(private userService: UserService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.userId = params.uid;
        });
        this.userProfile = userService.getUserDetails(this.userId);
    }
}
